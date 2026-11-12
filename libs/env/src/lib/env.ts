import z from 'zod';
import { config } from 'dotenv';
import * as path from 'node:path';

config({ path: path.resolve(__dirname, '../../../../.env') });

const environmentSchema = z.object({
    DATABASE_URL: z.string().min(1),
    POSTGRES_USER: z.string().min(1),
    POSTGRES_PASSWORD: z.string().min(1),
    POSTGRES_DB: z.string().min(1),
    REDIS_HOST: z.string().min(1),
    REDIS_PORT: z.coerce.number().int().positive(),
    NEXT_URL: z.string().min(1),
    EXPRESS_URL: z.string().min(1),
    BETTER_AUTH_SECRET: z.string().min(1),
    BETTER_AUTH_URL: z.string().min(1),
    OPENAI_MODEL: z.string().min(1),
    OPENAI_API_KEY: z.string().min(1),
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
