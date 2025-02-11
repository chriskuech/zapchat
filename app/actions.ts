"use server";

import * as server from "./_server/messages";

export async function sendMessage(message: string) {
  await server.sendMessage(message);
}

export async function clearMessages() {
  await server.saveMessages(undefined);
}

export async function getMessages() {
  return await server.getMessages();
}
