import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production']).default('development'),
    PORT: z.coerce.number().default(5000),
    DATABASE_URL: z.string().default(''),
    JWT_SECRET: z.string().default(''),
    JWT_EXPIRES_IN: z.string().default('1d'),
    CLIENT_URL: z.string().default(''),
    SUPABASE_URL: z.string().default(''),
    SUPABASE_REGION: z.string().default(''),
    SUPABASE_ACCESS_KEY: z.string().default(''),
    SUPABASE_SECRET_KEY: z.string().default(''),
});

const Config = envSchema.parse(process.env);
export default Config;
