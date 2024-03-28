import { z } from "zod";

export const envSchema = z.object({
    PORT: z.coerce.number().optional().default(3000),
    WEATHERMAP_KEY: z.string(),
    SPOTIFY_SECRET: z.string(),
    SPOTIFY_ID_CLIENT: z.string(),
});

export type Env = z.infer<typeof envSchema>