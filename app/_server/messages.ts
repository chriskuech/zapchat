import "server-only";

import { Message, MessageSchema } from "@/message.type";
import assert from "assert";
import { cookies } from "next/headers";
import { isString } from "remeda";
import { z } from "zod";
import { chatAgent } from "./agents/chat";

const introMessage = `
Hello! I'm zapchat, your vulnerability scanner chatbot powered by OWASP ZAP.

I can help you scan a website for vulnerabilities and understand your risk exposure.

To get started, please provide me with the URL you'd like to start scanning, or ask me about the status of a previous scan you'd like the results for.
`;

export const saveMessages = async (messages: Message[]) => {
  const cookieStore = await cookies();
  cookieStore.set("messages", JSON.stringify(messages));
};

export const getMessages = async (): Promise<Message[]> => {
  const cookieStore = await cookies();
  const raw = cookieStore.get("messages")?.value;
  const data = raw ? JSON.parse(raw) : [];
  const messages = await z.array(MessageSchema).parseAsync(data);

  if (!messages.length) {
    return [
      {
        role: "ai",
        content: introMessage,
      },
    ];
  }

  return messages;
};

export async function sendMessage(message: string) {
  const currentMessages = await getMessages();
  currentMessages.push({ content: message, role: "human" });

  console.log("currentMessages", currentMessages);

  const { messages: updatedMessages } = await chatAgent.invoke(
    {
      messages: currentMessages,
    },
    {
      configurable: {
        thread_id: "0", // TODO: read from session
      },
    }
  );

  console.log("updatedMessages", updatedMessages);

  await saveMessages(
    updatedMessages
      .filter((m) => ["human", "ai"].includes(m.getType()))
      .map((m) => {
        assert(isString(m.content), "Message content is not a string");

        return { content: m.content, role: m.getType() };
      })
  );
}
