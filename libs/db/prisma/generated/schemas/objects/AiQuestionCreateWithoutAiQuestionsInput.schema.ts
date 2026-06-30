import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  question: z.string(),
  answer: z.string().optional().nullable()
}).strict();
export const AiQuestionCreateWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionCreateWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCreateWithoutAiQuestionsInput>;
export const AiQuestionCreateWithoutAiQuestionsInputObjectZodSchema = makeSchema();
