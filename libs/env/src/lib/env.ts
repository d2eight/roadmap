import z from 'zod';
import { config } from 'dotenv';
import * as path from 'node:path';

config({ path: path.resolve(__dirname, '../../../../.env') });

const environmentSchema = z.object({
    DATABASE_URL: z.string(),
    POSTGRES_USER: z.string(),
    POSTGRES_PASSWORD: z.string(),
    POSTGRES_DB: z.string(),
    REDIS_HOST: z.string(),
    REDIS_PORT: z.coerce.number(),
    NEXT_URL: z.string(),
    EXPRESS_URL: z.string(),
    BETTER_AUTH_SECRET: z.string(),
    BETTER_AUTH_URL: z.string(),
    OPENAI_MODEL: z.string(),
    OPENAI_API_KEY: z.string(),
});

type EnvironmentSchemaType = z.infer<typeof environmentSchema>;

function validateEnv(): EnvironmentSchemaType {
    const parsedEnv = environmentSchema.safeParse(process.env);

    if (!parsedEnv.success) {
        console.error(parsedEnv.error.message);
        throw new Error('Corrupted env.');
    }

    return parsedEnv.data;
}

export const env = validateEnv();
