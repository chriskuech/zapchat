import "server-only";

import OpenAI from "openai";
import { zodFunction } from "openai/helpers/zod.mjs";
import {
  ChatCompletionMessageParam,
  ChatCompletionToolMessageParam,
} from "openai/resources/chat/completions.mjs";
import { cache } from "react";

class LlmError extends Error {}

const openai = cache(() => new OpenAI());

export type Tool = Parameters<typeof zodFunction>[0];

export const getCompletions = async (
  messages: ChatCompletionMessageParam[],
  tools: Tool[]
): Promise<ChatCompletionMessageParam[]> => {
  const completion = await openai().chat.completions.create({
    messages,
    model: "gpt-4o",
    tools: tools.map(zodFunction),
  });

  const completionMessage = completion.choices[0]?.message;

  if (!completionMessage) {
    return [
      {
        content: "No response from LLM",
        role: "assistant",
      },
    ];
  }

  const toolCalls = completionMessage.tool_calls ?? [];

  if (toolCalls.length) {
    try {
      const toolMessages = await Promise.all<ChatCompletionToolMessageParam>(
        toolCalls.map(async ({ id, function: { name, arguments: args } }) => {
          const tool = tools.find((tool) => tool.name === name);

          if (!tool) {
            throw new LlmError("Unexpected tool call");
          }

          if (!tool.function) {
            throw new LlmError("Tool function not found");
          }

          const toolArgs = tool.parameters.parse(JSON.parse(args));
          const rawContent = await tool.function(toolArgs);

          return {
            content: JSON.stringify(rawContent),
            role: "tool",
            tool_call_id: id,
          };
        })
      );

      return [completionMessage, ...toolMessages];
    } catch (error) {
      return [
        completionMessage,
        {
          content: `System failed to process tool call(s). ${error}`,
          role: "assistant",
        },
      ];
    }
  }

  return [completionMessage];
};

export const sanitize = (string: string) =>
  string.replaceAll(/\n[ \t]+/g, "\n").trim();
