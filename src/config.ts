import { cache } from "react";
import { z } from "zod";

const Config = z.object({
  ZAP_API_KEY: z.string().min(1),
  ZAP_BASE_URL: z.string().url(),
});

export type Config = z.infer<typeof Config>;

export const config = cache((): Config => Config.parse(process.env));
