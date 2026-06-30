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
  answer: z.literal(true).optional(),
  customAnswer: z.literal(true).optional()
}).strict();
export const AiQuestionABCDMaxAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionABCDMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionABCDMaxAggregateInputType>;
export const AiQuestionABCDMaxAggregateInputObjectZodSchema = makeSchema();
