import "server-only";

import { cookies } from "next/headers";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { z } from "zod";
import { getCompletions, Tool } from "./llm";
import {
  checkScanStatus,
  getVulnerabilities,
  startActiveScan,
  startSpiderScan,
} from "./scanner";

const systemPrompt = `
You are a chat assistant for a website vulnerability scanner.
You are given a conversation history and a new message.
You need to respond to the new message based on the conversation history.
Some operations are asynchronous, in which case you should use the provided tools to perform the operation
`;

const tools: Tool[] = [
  {
    name: "startScan",
    description: `Starts a new vulnerability scan on the given URL. The scan will run asynchronously and return its scan ID.`,
    parameters: z.object({ url: z.string() }),
    function: async ({ url }) => {
      await startSpiderScan({ url });
      const activeScan = await startActiveScan({ url });

      return activeScan;
    },
  },
  {
    name: checkScanStatus.name,
    description: `Returns the status of the scan with the given ID.`,
    parameters: z.object({ scanId: z.string() }),
    function: checkScanStatus,
  },
  {
    name: getVulnerabilities.name,
    description: `Returns all the vulnerabilities found for the given URL.`,
    parameters: z.object({ url: z.string() }),
    function: getVulnerabilities,
  },
];

export const saveMessages = async (messages: ChatCompletionMessageParam[]) => {
  const cookieStore = await cookies();
  cookieStore.set("messages", JSON.stringify(messages));
};

export const getMessages = async () => {
  const cookieStore = await cookies();
  const messages = cookieStore.get("messages")?.value;
  return messages ? (JSON.parse(messages) as ChatCompletionMessageParam[]) : [];
};

export async function sendMessage(message: string) {
  const messages = await getMessages();

  if (!messages.length) {
    messages.push({
      content: systemPrompt,
      role: "system",
    });
  }

  messages.push({ content: message, role: "user" });

  while (messages.at(-1)?.role !== "assistant") {
    console.log("MESSAGES", JSON.stringify(messages, null, 2));
    const completions = await getCompletions(messages, tools);
    messages.push(...completions);
  }

  await saveMessages(messages);
}
