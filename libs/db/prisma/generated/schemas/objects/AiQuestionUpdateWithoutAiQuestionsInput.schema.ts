import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  question: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  answer: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const AiQuestionUpdateWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionUpdateWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionUpdateWithoutAiQuestionsInput>;
export const AiQuestionUpdateWithoutAiQuestionsInputObjectZodSchema = makeSchema();
