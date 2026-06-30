import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  question: z.literal(true).optional(),
  aiQuestionsId: z.literal(true).optional(),
  answer: z.literal(true).optional()
}).strict();
export const AiQuestionMaxAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionMaxAggregateInputType>;
export const AiQuestionMaxAggregateInputObjectZodSchema = makeSchema();
