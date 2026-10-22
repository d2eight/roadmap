import z from 'zod';
import { config } from 'dotenv';
import * as path from 'node:path';

config({ path: path.resolve(__dirname, '../../../../.env') });

const environmentSchema = z.object({
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DB: z.string(),
  REDIS_PASSWORD: z.string(),
  REDIS_USER: z.string(),
  REDIS_USER_PASSWORD: z.string(),
  NEXT_URL: z.string(),
  EXPRESS_URL: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
  DATABASE_URL: z.string(),
  OPENAI_API_KEY: z.string(),
  GOOGLE_GENERATIVE_AI_API_KEY: z.string(),
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
