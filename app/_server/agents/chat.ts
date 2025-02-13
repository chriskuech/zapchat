import { Vulnerability } from "@/_server/scanner";
import { AIMessage } from "@langchain/core/messages";
import { tool } from "@langchain/core/tools";
import {
  Annotation,
  MessagesAnnotation,
  StateGraph,
} from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import assert from "assert";
import { match, P } from "ts-pattern";
import { z } from "zod";
import { scannerAgent } from "./scanner";

const systemMessage = `You are a chat assistant for a website vulnerability scanner.
Users may ask you to conduct scans on websites using the \`startScan\` tool.
You will use the \`getScanResults\` tool to check the progress of a scan or the results of a completed scan.
You MUST normalize the URLs provided by the user so they are valid fully qualified URLs.

When providing information about vulnerabilities, you MUST provide clear quality information to the user:
- Severity rating
- Clear, non-technical explanation
- Potential impact
- Basic remediation suggestions

Vulnerabilities are considered more important if they have a higher severity rating and a higher confidence score.
If there are many vulnerabilities, you should only return the top 3 most important ones unless the user asks for more.

You should also assist users with any other questions they have about the scanner, the vulnerabilities found, or cybersecurity in general.
`;

// TODO: this should be a database
const jobsDb = new Map<string, Vulnerability[] | null>();

const tools = [
  tool(
    ({ url }) => {
      jobsDb.set(url, null);
      scannerAgent.invoke({ url }).then(({ scanResults }) => {
        // TODO: this will need to move to the agent (as documented) once we have a database
        jobsDb.set(url, scanResults ?? []);
      });
      return "Started";
    },
    {
      name: "startScan",
      description: "Start a scan on a URL",
      schema: z.object({ url: z.string() }),
    }
  ),
  tool(
    ({ url }) => ({
      result: match(jobsDb.get(url))
        .with(undefined, () => "Scan not started")
        .with(null, () => "Scan in progress")
        .with([], () => "No results")
        .with(P.array(), (results) => JSON.stringify(results))
        .exhaustive(),
    }),
    {
      name: "getScanResults",
      description:
        "Get the status of a scan or the results of a completed scan",
      schema: z.object({ url: z.string() }),
    }
  ),
];

const llm = new ChatOpenAI({ modelName: "gpt-4o", temperature: 0 }).bindTools(
  tools
);

// Define the state schema
const StateAnnotation = Annotation.Root(MessagesAnnotation.spec);

// Build the graph
export const chatAgent = new StateGraph(StateAnnotation)

  .addNode("tools", new ToolNode(tools))

  .addNode("respond", async (state) => {
    const message = await llm.invoke([
      {
        role: "system",
        content: systemMessage,
      },
      ...state.messages,
    ]);

    state.messages.push(message);

    return state;
  })

  // Define the execution flow
  .addEdge("__start__", "respond")
  .addConditionalEdges(
    "respond",
    (state) => {
      const lastMessage: AIMessage | undefined = state.messages.at(-1);
      assert(lastMessage, "Last message is not defined");

      return lastMessage.tool_calls?.length ? "tools" : "__end__";
    },
    {
      tools: "tools",
      __end__: "__end__",
    }
  )
  .addEdge("tools", "respond")
  .addEdge("respond", "__end__")

  .compile({
    // checkpointer: new MemorySaver(),
  });
