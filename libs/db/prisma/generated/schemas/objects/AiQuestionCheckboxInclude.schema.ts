import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsArgsObjectSchema as AiQuestionsArgsObjectSchema } from './AiQuestionsArgs.schema'

const makeSchema = () => z.object({
  aiQuestions: z.union([z.boolean(), z.lazy(() => AiQuestionsArgsObjectSchema)]).optional()
}).strict();
export const AiQuestionCheckboxIncludeObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxInclude> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCheckboxInclude>;
export const AiQuestionCheckboxIncludeObjectZodSchema = makeSchema();
