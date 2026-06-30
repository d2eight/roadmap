import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  question: z.literal(true).optional(),
  aiQuestionsId: z.literal(true).optional(),
  A: z.literal(true).optional(),
  B: z.literal(true).optional(),
  C: z.literal(true).optional(),
  D: z.literal(true).optional(),
  E: z.literal(true).optional(),
  F: z.literal(true).optional(),
  answer: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AiQuestionCheckboxCountAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCheckboxCountAggregateInputType>;
export const AiQuestionCheckboxCountAggregateInputObjectZodSchema = makeSchema();
