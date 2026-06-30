import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionCheckboxCreateanswerInputObjectSchema as AiQuestionCheckboxCreateanswerInputObjectSchema } from './AiQuestionCheckboxCreateanswerInput.schema';
import { AiQuestionCheckbox_AnswersSchema } from '../enums/AiQuestionCheckbox_Answers.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  question: z.string(),
  A: z.string(),
  B: z.string(),
  C: z.string(),
  D: z.string(),
  E: z.string(),
  F: z.string(),
  answer: z.union([z.lazy(() => AiQuestionCheckboxCreateanswerInputObjectSchema), AiQuestionCheckbox_AnswersSchema.array()]).optional()
}).strict();
export const AiQuestionCheckboxCreateWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxCreateWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCheckboxCreateWithoutAiQuestionsInput>;
export const AiQuestionCheckboxCreateWithoutAiQuestionsInputObjectZodSchema = makeSchema();
