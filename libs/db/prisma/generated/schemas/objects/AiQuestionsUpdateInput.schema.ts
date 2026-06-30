import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GuideUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema as GuideUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema } from './GuideUpdateOneRequiredWithoutQuestionsNestedInput.schema';
import { AiQuestionABCDUpdateOneWithoutAiQuestionsNestedInputObjectSchema as AiQuestionABCDUpdateOneWithoutAiQuestionsNestedInputObjectSchema } from './AiQuestionABCDUpdateOneWithoutAiQuestionsNestedInput.schema';
import { AiQuestionRangeUpdateOneWithoutAiQuestionsNestedInputObjectSchema as AiQuestionRangeUpdateOneWithoutAiQuestionsNestedInputObjectSchema } from './AiQuestionRangeUpdateOneWithoutAiQuestionsNestedInput.schema';
import { AiQuestionUpdateOneWithoutAiQuestionsNestedInputObjectSchema as AiQuestionUpdateOneWithoutAiQuestionsNestedInputObjectSchema } from './AiQuestionUpdateOneWithoutAiQuestionsNestedInput.schema';
import { AiQuestionCheckboxUpdateOneWithoutAiQuestionsNestedInputObjectSchema as AiQuestionCheckboxUpdateOneWithoutAiQuestionsNestedInputObjectSchema } from './AiQuestionCheckboxUpdateOneWithoutAiQuestionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  guide: z.lazy(() => GuideUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema).optional(),
  AiQuestionABCD: z.lazy(() => AiQuestionABCDUpdateOneWithoutAiQuestionsNestedInputObjectSchema).optional(),
  AiQuestionRange: z.lazy(() => AiQuestionRangeUpdateOneWithoutAiQuestionsNestedInputObjectSchema).optional(),
  AiQuestion: z.lazy(() => AiQuestionUpdateOneWithoutAiQuestionsNestedInputObjectSchema).optional(),
  AiQuestionCheckbox: z.lazy(() => AiQuestionCheckboxUpdateOneWithoutAiQuestionsNestedInputObjectSchema).optional()
}).strict();
export const AiQuestionsUpdateInputObjectSchema: z.ZodType<Prisma.AiQuestionsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUpdateInput>;
export const AiQuestionsUpdateInputObjectZodSchema = makeSchema();
