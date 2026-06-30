import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AiQuestionABCD_AnswersSchema } from '../enums/AiQuestionABCD_Answers.schema';
import { NullableEnumAiQuestionABCD_AnswersFieldUpdateOperationsInputObjectSchema as NullableEnumAiQuestionABCD_AnswersFieldUpdateOperationsInputObjectSchema } from './NullableEnumAiQuestionABCD_AnswersFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  question: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  aiQuestionsId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  A: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  B: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  C: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  D: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  answer: z.union([AiQuestionABCD_AnswersSchema, z.lazy(() => NullableEnumAiQuestionABCD_AnswersFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  customAnswer: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const AiQuestionABCDUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.AiQuestionABCDUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionABCDUncheckedUpdateInput>;
export const AiQuestionABCDUncheckedUpdateInputObjectZodSchema = makeSchema();
