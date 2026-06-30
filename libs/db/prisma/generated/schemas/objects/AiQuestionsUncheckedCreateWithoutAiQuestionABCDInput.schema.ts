import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionRangeUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionRangeUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeUncheckedCreateNestedOneWithoutAiQuestionsInput.schema';
import { AiQuestionUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionUncheckedCreateNestedOneWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxUncheckedCreateNestedOneWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  guideId: z.string(),
  AiQuestionRange: z.lazy(() => AiQuestionRangeUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional(),
  AiQuestion: z.lazy(() => AiQuestionUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional(),
  AiQuestionCheckbox: z.lazy(() => AiQuestionCheckboxUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional()
}).strict();
export const AiQuestionsUncheckedCreateWithoutAiQuestionABCDInputObjectSchema: z.ZodType<Prisma.AiQuestionsUncheckedCreateWithoutAiQuestionABCDInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUncheckedCreateWithoutAiQuestionABCDInput>;
export const AiQuestionsUncheckedCreateWithoutAiQuestionABCDInputObjectZodSchema = makeSchema();
