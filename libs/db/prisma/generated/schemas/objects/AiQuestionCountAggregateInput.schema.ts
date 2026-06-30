import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  question: z.literal(true).optional(),
  aiQuestionsId: z.literal(true).optional(),
  answer: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AiQuestionCountAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCountAggregateInputType>;
export const AiQuestionCountAggregateInputObjectZodSchema = makeSchema();
