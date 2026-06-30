import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionABCD_AnswersSchema } from '../enums/AiQuestionABCD_Answers.schema'

const makeSchema = () => z.object({
  set: AiQuestionABCD_AnswersSchema.optional()
}).strict();
export const NullableEnumAiQuestionABCD_AnswersFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumAiQuestionABCD_AnswersFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumAiQuestionABCD_AnswersFieldUpdateOperationsInput>;
export const NullableEnumAiQuestionABCD_AnswersFieldUpdateOperationsInputObjectZodSchema = makeSchema();
