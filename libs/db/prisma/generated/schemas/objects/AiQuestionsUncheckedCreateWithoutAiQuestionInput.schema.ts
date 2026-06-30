import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionABCDUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionABCDUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDUncheckedCreateNestedOneWithoutAiQuestionsInput.schema';
import { AiQuestionRangeUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionRangeUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeUncheckedCreateNestedOneWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxUncheckedCreateNestedOneWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  guideId: z.string(),
  AiQuestionABCD: z.lazy(() => AiQuestionABCDUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional(),
  AiQuestionRange: z.lazy(() => AiQuestionRangeUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional(),
  AiQuestionCheckbox: z.lazy(() => AiQuestionCheckboxUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional()
}).strict();
export const AiQuestionsUncheckedCreateWithoutAiQuestionInputObjectSchema: z.ZodType<Prisma.AiQuestionsUncheckedCreateWithoutAiQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUncheckedCreateWithoutAiQuestionInput>;
export const AiQuestionsUncheckedCreateWithoutAiQuestionInputObjectZodSchema = makeSchema();
