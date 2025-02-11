import "server-only";

import { cookies } from "next/headers";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { z } from "zod";
import { getCompletions, sanitize, Tool } from "./llm";
import {
  checkScanStatus as checkActiveScanStatus,
  getSpiderScanStatus as checkSpiderScanStatus,
  getVulnerabilities,
  startActiveScan,
  startSpiderScan,
} from "./scanner";

const systemPrompt = `
You are a chat assistant for a website vulnerability scanner abstracting OWASP ZAP API (aka zaproxy).
Users will provide you with a URL and you will scan it for vulnerabilities.
Once the scan is complete, you will return the top 3 most severe vulnerabilities found.

For each identified vulnerability, generate:
- Severity rating
- Clear, non-technical explanation
- Potential impact
- Basic remediation suggestions

To analyze a website, you will need to:
1. Start a spider scan
2. Check the status of the spider scan until it is complete
3. Start an active scan
4. Check the status of the active scan until it is complete
5. Return the top 3 most severe vulnerabilities found

Scans occur asynchronously and you will need to check the status of the scan before you can return the results.
If you are asked for the status of a scan that is not complete, you should return a message indicating that the scan is still in progress and that the user should check back later.
Do not "busy wait" for the scan to complete by calling the tool again.

Return messages in markdown format. Emphasis on clear, actionable vulnerability explanations.
`;

const introMessage = `
Hello! I'm zapchat, your vulnerability scanner chatbot powered by OWASP ZAP.

I can help you scan a website for vulnerabilities and understand your risk exposure.

To get started, please provide me with the URL you'd like to start scanning, or ask me about the status of a previous scan you'd like the results for.
`;

const tools: Tool[] = [
  {
    name: startSpiderScan.name,
    description: sanitize(`
      Starts a new spider scan on the given URL.
      The scan will run asynchronously and return its scan ID.
    `),
    parameters: z.object({ url: z.string() }),
    function: startSpiderScan,
  },
  {
    name: checkSpiderScanStatus.name,
    description: sanitize(`
      Returns the status of the spider scan with the given scan ID.
    `),
    parameters: z.object({ scanId: z.string() }),
    function: checkSpiderScanStatus,
  },
  {
    name: startActiveScan.name,
    description: sanitize(`
      Starts a new vulnerability scan on the given URL.
      The scan will run asynchronously and return its scan ID.
      Internally, this tool will start a "Spider Scan" then an "Active Scan" and return the "Active Scan" API response.
    `),
    parameters: z.object({ url: z.string() }),
    function: startActiveScan,
  },
  {
    name: checkActiveScanStatus.name,
    description: sanitize(`
      Returns the status of the "Active Scan" scan with the given scan ID.
    `),
    parameters: z.object({ scanId: z.string() }),
    function: checkActiveScanStatus,
  },
  {
    name: getVulnerabilities.name,
    description: sanitize(`
      Returns all the vulnerabilities found for the given URL.
      This tool will return all vulnerabilities found in the "Active Scan" scan and must not be called until the scan has completed.
    `),
    parameters: z.object({ url: z.string() }),
    function: getVulnerabilities,
  },
];

export const saveMessages = async (
  messages: ChatCompletionMessageParam[] | undefined
) => {
  const cookieStore = await cookies();
  if (messages?.length) {
    cookieStore.set("messages", JSON.stringify(messages));
  } else {
    cookieStore.delete("messages");
  }
};

export const getMessages = async (): Promise<ChatCompletionMessageParam[]> => {
  const cookieStore = await cookies();
  const messages = cookieStore.get("messages")?.value;

  if (!messages) {
    return [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "assistant",
        content: introMessage,
      },
    ];
  }

  return JSON.parse(messages) as ChatCompletionMessageParam[];
};

export async function sendMessage(message: string) {
  const messages = await getMessages();

  messages.push({ content: message, role: "user" });

  // TODO: We are hacking everything into the request-response lifecycle of the user's message to avoid implementing push events.
  //       This is not scalable. We need to offload the responsibility of checking the status of the scan to a background job.
  //       Similarly, it will naively busy wait for the scan to complete, which is only being guarded against by the prompt instructions.
  while (messages.at(-1)?.role !== "assistant") {
    logMessages(messages);
    const completions = await getCompletions(messages, tools);
    messages.push(...completions);
  }
  logMessages(messages);

  await saveMessages(messages);
}

// TODO: Replace with tracing
const logMessages = (messages: ChatCompletionMessageParam[]) => {
  console.log("MESSAGES", JSON.stringify(messages, null, 2));
};
