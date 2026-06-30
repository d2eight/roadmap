import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionABCDCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionABCDCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDCreateNestedOneWithoutAiQuestionsInput.schema';
import { AiQuestionRangeCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionRangeCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeCreateNestedOneWithoutAiQuestionsInput.schema';
import { AiQuestionCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionCreateNestedOneWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxCreateNestedOneWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  AiQuestionABCD: z.lazy(() => AiQuestionABCDCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional(),
  AiQuestionRange: z.lazy(() => AiQuestionRangeCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional(),
  AiQuestion: z.lazy(() => AiQuestionCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional(),
  AiQuestionCheckbox: z.lazy(() => AiQuestionCheckboxCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional()
}).strict();
export const AiQuestionsCreateWithoutGuideInputObjectSchema: z.ZodType<Prisma.AiQuestionsCreateWithoutGuideInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsCreateWithoutGuideInput>;
export const AiQuestionsCreateWithoutGuideInputObjectZodSchema = makeSchema();
