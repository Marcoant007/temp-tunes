import { z } from "zod";

export const envSchema = z.object({
    PORT: z.coerce.number().optional().default(3000),
    KEY: z.string()
});

export type Env = z.infer<typeof envSchema>