import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { AiQuestionsUpdateOneRequiredWithoutAiQuestionNestedInputObjectSchema as AiQuestionsUpdateOneRequiredWithoutAiQuestionNestedInputObjectSchema } from './AiQuestionsUpdateOneRequiredWithoutAiQuestionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  question: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  answer: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  aiQuestions: z.lazy(() => AiQuestionsUpdateOneRequiredWithoutAiQuestionNestedInputObjectSchema).optional()
}).strict();
export const AiQuestionUpdateInputObjectSchema: z.ZodType<Prisma.AiQuestionUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionUpdateInput>;
export const AiQuestionUpdateInputObjectZodSchema = makeSchema();
