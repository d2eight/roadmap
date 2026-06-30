import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { AiQuestionsUpdateOneRequiredWithoutAiQuestionRangeNestedInputObjectSchema as AiQuestionsUpdateOneRequiredWithoutAiQuestionRangeNestedInputObjectSchema } from './AiQuestionsUpdateOneRequiredWithoutAiQuestionRangeNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  question: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  start: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  end: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  answer: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  aiQuestions: z.lazy(() => AiQuestionsUpdateOneRequiredWithoutAiQuestionRangeNestedInputObjectSchema).optional()
}).strict();
export const AiQuestionRangeUpdateInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeUpdateInput>;
export const AiQuestionRangeUpdateInputObjectZodSchema = makeSchema();
