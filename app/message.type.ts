import { z } from "zod";

const RoleSchema = z.enum([
  "human",
  "ai",
  "generic",
  "developer",
  "system",
  "function",
  "tool",
  "remove",
]);

export const MessageSchema = z.object({
  role: RoleSchema,
  content: z.string(),
});

export type Message = z.infer<typeof MessageSchema>;
