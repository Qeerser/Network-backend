import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production']).default('development'),
    PORT: z.coerce.number().default(5000),
    DATABASE_URL: z.string().default(''),
    JWT_SECRET: z.string().default(''),
    JWT_EXPIRES_IN: z.string().default('1d'),
    CLIENT_URL: z.string().default('http://localhost:3001'),
});
const Config = envSchema.parse(process.env);
export default Config;
