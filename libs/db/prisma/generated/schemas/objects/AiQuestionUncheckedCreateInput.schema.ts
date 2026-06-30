import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  question: z.string(),
  aiQuestionsId: z.string(),
  answer: z.string().optional().nullable()
}).strict();
export const AiQuestionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AiQuestionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionUncheckedCreateInput>;
export const AiQuestionUncheckedCreateInputObjectZodSchema = makeSchema();
