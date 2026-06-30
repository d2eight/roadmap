import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsArgsObjectSchema as AiQuestionsArgsObjectSchema } from './AiQuestionsArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  question: z.boolean().optional(),
  aiQuestions: z.union([z.boolean(), z.lazy(() => AiQuestionsArgsObjectSchema)]).optional(),
  aiQuestionsId: z.boolean().optional(),
  answer: z.boolean().optional()
}).strict();
export const AiQuestionSelectObjectSchema: z.ZodType<Prisma.AiQuestionSelect> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionSelect>;
export const AiQuestionSelectObjectZodSchema = makeSchema();
