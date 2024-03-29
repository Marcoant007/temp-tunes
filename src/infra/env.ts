import { z } from "zod";

export const envSchema = z.object({
    PORT: z.coerce.number().optional().default(3000),
    WEATHERMAP_KEY: z.string(),
    SPOTIFY_SECRET: z.string(),
    SPOTIFY_ID_CLIENT: z.string(),
    SPOTIFY_TOKEN_URL: z.string().url(),
    SPOTIFY_SEARCH_URL: z.string().url(),
    
    REDIS_TTL: z.string(),
    REDIS_HOST: z.string(),
    REDIS_PORT: z.string(),
    REDIS_USERNAME: z.string(),
    REDIS_PASSWORD: z.string(),
   
    REDIS_RO_TTL: z.string(),
    REDIS_RO_HOST: z.string(),
    REDIS_RO_PORT: z.string(),
    REDIS_RO_USERNAME: z.string(),
    REDIS_RO_PASSWORD: z.string(),
});

export type Env = z.infer<typeof envSchema>