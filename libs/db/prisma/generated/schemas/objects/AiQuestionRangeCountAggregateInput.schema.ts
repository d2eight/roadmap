import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  question: z.literal(true).optional(),
  aiQuestionsId: z.literal(true).optional(),
  start: z.literal(true).optional(),
  end: z.literal(true).optional(),
  answer: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AiQuestionRangeCountAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeCountAggregateInputType>;
export const AiQuestionRangeCountAggregateInputObjectZodSchema = makeSchema();
