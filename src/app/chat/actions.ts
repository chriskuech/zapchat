"use server";

import { Maybe } from "@/util/maybe";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import * as server from "./_server/messages";

export async function sendMessage(message: string): Promise<Maybe> {
  try {
    await server.sendMessage(message);
    return { value: undefined };
  } catch (error) {
    console.error(error);
    return { error: "Failed to send message" };
  }
}

export async function clearMessages(): Promise<Maybe> {
  try {
    await server.saveMessages([]);
    return { value: undefined };
  } catch (error) {
    console.error(error);
    return { error: "Failed to clear messages" };
  }
}

export async function getMessages(): Promise<
  Maybe<ChatCompletionMessageParam[]>
> {
  try {
    return { value: await server.getMessages() };
  } catch (error) {
    console.error(error);
    return { error: "Failed to get messages" };
  }
}
