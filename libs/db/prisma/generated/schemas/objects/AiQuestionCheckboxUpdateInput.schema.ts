import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AiQuestionCheckboxUpdateanswerInputObjectSchema as AiQuestionCheckboxUpdateanswerInputObjectSchema } from './AiQuestionCheckboxUpdateanswerInput.schema';
import { AiQuestionCheckbox_AnswersSchema } from '../enums/AiQuestionCheckbox_Answers.schema';
import { AiQuestionsUpdateOneRequiredWithoutAiQuestionCheckboxNestedInputObjectSchema as AiQuestionsUpdateOneRequiredWithoutAiQuestionCheckboxNestedInputObjectSchema } from './AiQuestionsUpdateOneRequiredWithoutAiQuestionCheckboxNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  question: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  A: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  B: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  C: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  D: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  E: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  F: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  answer: z.union([z.lazy(() => AiQuestionCheckboxUpdateanswerInputObjectSchema), AiQuestionCheckbox_AnswersSchema.array()]).optional(),
  aiQuestions: z.lazy(() => AiQuestionsUpdateOneRequiredWithoutAiQuestionCheckboxNestedInputObjectSchema).optional()
}).strict();
export const AiQuestionCheckboxUpdateInputObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCheckboxUpdateInput>;
export const AiQuestionCheckboxUpdateInputObjectZodSchema = makeSchema();
