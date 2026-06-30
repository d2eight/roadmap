import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsArgsObjectSchema as AiQuestionsArgsObjectSchema } from './AiQuestionsArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  question: z.boolean().optional(),
  aiQuestions: z.union([z.boolean(), z.lazy(() => AiQuestionsArgsObjectSchema)]).optional(),
  aiQuestionsId: z.boolean().optional(),
  A: z.boolean().optional(),
  B: z.boolean().optional(),
  C: z.boolean().optional(),
  D: z.boolean().optional(),
  answer: z.boolean().optional(),
  customAnswer: z.boolean().optional()
}).strict();
export const AiQuestionABCDSelectObjectSchema: z.ZodType<Prisma.AiQuestionABCDSelect> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionABCDSelect>;
export const AiQuestionABCDSelectObjectZodSchema = makeSchema();
