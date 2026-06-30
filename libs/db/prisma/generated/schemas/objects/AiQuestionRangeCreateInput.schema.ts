import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsCreateNestedOneWithoutAiQuestionRangeInputObjectSchema as AiQuestionsCreateNestedOneWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsCreateNestedOneWithoutAiQuestionRangeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  question: z.string(),
  start: z.number().int().optional(),
  end: z.number().int().optional(),
  answer: z.number().int().optional().nullable(),
  aiQuestions: z.lazy(() => AiQuestionsCreateNestedOneWithoutAiQuestionRangeInputObjectSchema)
}).strict();
export const AiQuestionRangeCreateInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeCreateInput>;
export const AiQuestionRangeCreateInputObjectZodSchema = makeSchema();
