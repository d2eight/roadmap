import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  question: z.literal(true).optional(),
  aiQuestionsId: z.literal(true).optional(),
  start: z.literal(true).optional(),
  end: z.literal(true).optional(),
  answer: z.literal(true).optional()
}).strict();
export const AiQuestionRangeMinAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeMinAggregateInputType>;
export const AiQuestionRangeMinAggregateInputObjectZodSchema = makeSchema();
