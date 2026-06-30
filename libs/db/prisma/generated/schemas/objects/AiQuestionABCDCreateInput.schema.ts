import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionABCD_AnswersSchema } from '../enums/AiQuestionABCD_Answers.schema';
import { AiQuestionsCreateNestedOneWithoutAiQuestionABCDInputObjectSchema as AiQuestionsCreateNestedOneWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsCreateNestedOneWithoutAiQuestionABCDInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  question: z.string(),
  A: z.string(),
  B: z.string(),
  C: z.string(),
  D: z.string(),
  answer: AiQuestionABCD_AnswersSchema.optional().nullable(),
  customAnswer: z.string().optional().nullable(),
  aiQuestions: z.lazy(() => AiQuestionsCreateNestedOneWithoutAiQuestionABCDInputObjectSchema)
}).strict();
export const AiQuestionABCDCreateInputObjectSchema: z.ZodType<Prisma.AiQuestionABCDCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionABCDCreateInput>;
export const AiQuestionABCDCreateInputObjectZodSchema = makeSchema();
