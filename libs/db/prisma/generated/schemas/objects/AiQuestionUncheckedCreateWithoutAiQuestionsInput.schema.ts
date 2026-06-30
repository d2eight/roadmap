import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  question: z.string(),
  answer: z.string().optional().nullable()
}).strict();
export const AiQuestionUncheckedCreateWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionUncheckedCreateWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionUncheckedCreateWithoutAiQuestionsInput>;
export const AiQuestionUncheckedCreateWithoutAiQuestionsInputObjectZodSchema = makeSchema();
