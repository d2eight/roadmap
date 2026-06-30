import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsArgsObjectSchema as AiQuestionsArgsObjectSchema } from './AiQuestionsArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  question: z.boolean().optional(),
  aiQuestions: z.union([z.boolean(), z.lazy(() => AiQuestionsArgsObjectSchema)]).optional(),
  aiQuestionsId: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  answer: z.boolean().optional()
}).strict();
export const AiQuestionRangeSelectObjectSchema: z.ZodType<Prisma.AiQuestionRangeSelect> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeSelect>;
export const AiQuestionRangeSelectObjectZodSchema = makeSchema();
