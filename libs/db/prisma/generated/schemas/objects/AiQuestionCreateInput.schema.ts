import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsCreateNestedOneWithoutAiQuestionInputObjectSchema as AiQuestionsCreateNestedOneWithoutAiQuestionInputObjectSchema } from './AiQuestionsCreateNestedOneWithoutAiQuestionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  question: z.string(),
  answer: z.string().optional().nullable(),
  aiQuestions: z.lazy(() => AiQuestionsCreateNestedOneWithoutAiQuestionInputObjectSchema)
}).strict();
export const AiQuestionCreateInputObjectSchema: z.ZodType<Prisma.AiQuestionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCreateInput>;
export const AiQuestionCreateInputObjectZodSchema = makeSchema();
