import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  question: z.string(),
  aiQuestionsId: z.string(),
  start: z.number().int().optional(),
  end: z.number().int().optional(),
  answer: z.number().int().optional().nullable()
}).strict();
export const AiQuestionRangeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeUncheckedCreateInput>;
export const AiQuestionRangeUncheckedCreateInputObjectZodSchema = makeSchema();
