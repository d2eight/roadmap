import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AiQuestionABCDUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema as AiQuestionABCDUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema } from './AiQuestionABCDUncheckedUpdateOneWithoutAiQuestionsNestedInput.schema';
import { AiQuestionUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema as AiQuestionUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema } from './AiQuestionUncheckedUpdateOneWithoutAiQuestionsNestedInput.schema';
import { AiQuestionCheckboxUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema as AiQuestionCheckboxUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema } from './AiQuestionCheckboxUncheckedUpdateOneWithoutAiQuestionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  guideId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  AiQuestionABCD: z.lazy(() => AiQuestionABCDUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema).optional(),
  AiQuestion: z.lazy(() => AiQuestionUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema).optional(),
  AiQuestionCheckbox: z.lazy(() => AiQuestionCheckboxUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema).optional()
}).strict();
export const AiQuestionsUncheckedUpdateWithoutAiQuestionRangeInputObjectSchema: z.ZodType<Prisma.AiQuestionsUncheckedUpdateWithoutAiQuestionRangeInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUncheckedUpdateWithoutAiQuestionRangeInput>;
export const AiQuestionsUncheckedUpdateWithoutAiQuestionRangeInputObjectZodSchema = makeSchema();
