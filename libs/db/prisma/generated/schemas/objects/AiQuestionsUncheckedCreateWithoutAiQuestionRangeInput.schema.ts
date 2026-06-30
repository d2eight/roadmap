import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionABCDUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionABCDUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDUncheckedCreateNestedOneWithoutAiQuestionsInput.schema';
import { AiQuestionUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionUncheckedCreateNestedOneWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxUncheckedCreateNestedOneWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  guideId: z.string(),
  AiQuestionABCD: z.lazy(() => AiQuestionABCDUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional(),
  AiQuestion: z.lazy(() => AiQuestionUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional(),
  AiQuestionCheckbox: z.lazy(() => AiQuestionCheckboxUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional()
}).strict();
export const AiQuestionsUncheckedCreateWithoutAiQuestionRangeInputObjectSchema: z.ZodType<Prisma.AiQuestionsUncheckedCreateWithoutAiQuestionRangeInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUncheckedCreateWithoutAiQuestionRangeInput>;
export const AiQuestionsUncheckedCreateWithoutAiQuestionRangeInputObjectZodSchema = makeSchema();
