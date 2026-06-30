import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GuideUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema as GuideUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema } from './GuideUpdateOneRequiredWithoutQuestionsNestedInput.schema';
import { AiQuestionABCDUpdateOneWithoutAiQuestionsNestedInputObjectSchema as AiQuestionABCDUpdateOneWithoutAiQuestionsNestedInputObjectSchema } from './AiQuestionABCDUpdateOneWithoutAiQuestionsNestedInput.schema';
import { AiQuestionUpdateOneWithoutAiQuestionsNestedInputObjectSchema as AiQuestionUpdateOneWithoutAiQuestionsNestedInputObjectSchema } from './AiQuestionUpdateOneWithoutAiQuestionsNestedInput.schema';
import { AiQuestionCheckboxUpdateOneWithoutAiQuestionsNestedInputObjectSchema as AiQuestionCheckboxUpdateOneWithoutAiQuestionsNestedInputObjectSchema } from './AiQuestionCheckboxUpdateOneWithoutAiQuestionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  guide: z.lazy(() => GuideUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema).optional(),
  AiQuestionABCD: z.lazy(() => AiQuestionABCDUpdateOneWithoutAiQuestionsNestedInputObjectSchema).optional(),
  AiQuestion: z.lazy(() => AiQuestionUpdateOneWithoutAiQuestionsNestedInputObjectSchema).optional(),
  AiQuestionCheckbox: z.lazy(() => AiQuestionCheckboxUpdateOneWithoutAiQuestionsNestedInputObjectSchema).optional()
}).strict();
export const AiQuestionsUpdateWithoutAiQuestionRangeInputObjectSchema: z.ZodType<Prisma.AiQuestionsUpdateWithoutAiQuestionRangeInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUpdateWithoutAiQuestionRangeInput>;
export const AiQuestionsUpdateWithoutAiQuestionRangeInputObjectZodSchema = makeSchema();
