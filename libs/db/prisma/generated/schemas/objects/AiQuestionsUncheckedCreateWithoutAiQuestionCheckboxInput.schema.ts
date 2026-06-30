import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionABCDUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionABCDUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDUncheckedCreateNestedOneWithoutAiQuestionsInput.schema';
import { AiQuestionRangeUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionRangeUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeUncheckedCreateNestedOneWithoutAiQuestionsInput.schema';
import { AiQuestionUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionUncheckedCreateNestedOneWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  guideId: z.string(),
  AiQuestionABCD: z.lazy(() => AiQuestionABCDUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional(),
  AiQuestionRange: z.lazy(() => AiQuestionRangeUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional(),
  AiQuestion: z.lazy(() => AiQuestionUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional()
}).strict();
export const AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInputObjectSchema: z.ZodType<Prisma.AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInput>;
export const AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInputObjectZodSchema = makeSchema();
