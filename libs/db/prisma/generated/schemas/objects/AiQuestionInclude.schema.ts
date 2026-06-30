import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsArgsObjectSchema as AiQuestionsArgsObjectSchema } from './AiQuestionsArgs.schema'

const makeSchema = () => z.object({
  aiQuestions: z.union([z.boolean(), z.lazy(() => AiQuestionsArgsObjectSchema)]).optional()
}).strict();
export const AiQuestionIncludeObjectSchema: z.ZodType<Prisma.AiQuestionInclude> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionInclude>;
export const AiQuestionIncludeObjectZodSchema = makeSchema();
