import { z } from "zod";

export const config = z
  .object({
    ZAP_API_KEY: z.string().min(1),
    ZAP_BASE_URL: z.string().url(),
  })
  .parse(process.env);
