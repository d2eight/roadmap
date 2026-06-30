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
  E: z.boolean().optional(),
  F: z.boolean().optional(),
  answer: z.boolean().optional()
}).strict();
export const AiQuestionCheckboxSelectObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxSelect> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCheckboxSelect>;
export const AiQuestionCheckboxSelectObjectZodSchema = makeSchema();
