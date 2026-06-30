import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AiQuestionABCDUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema as AiQuestionABCDUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema } from './AiQuestionABCDUncheckedUpdateOneWithoutAiQuestionsNestedInput.schema';
import { AiQuestionRangeUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema as AiQuestionRangeUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema } from './AiQuestionRangeUncheckedUpdateOneWithoutAiQuestionsNestedInput.schema';
import { AiQuestionUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema as AiQuestionUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema } from './AiQuestionUncheckedUpdateOneWithoutAiQuestionsNestedInput.schema';
import { AiQuestionCheckboxUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema as AiQuestionCheckboxUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema } from './AiQuestionCheckboxUncheckedUpdateOneWithoutAiQuestionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  guideId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  AiQuestionABCD: z.lazy(() => AiQuestionABCDUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema).optional(),
  AiQuestionRange: z.lazy(() => AiQuestionRangeUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema).optional(),
  AiQuestion: z.lazy(() => AiQuestionUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema).optional(),
  AiQuestionCheckbox: z.lazy(() => AiQuestionCheckboxUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema).optional()
}).strict();
export const AiQuestionsUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.AiQuestionsUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUncheckedUpdateInput>;
export const AiQuestionsUncheckedUpdateInputObjectZodSchema = makeSchema();
