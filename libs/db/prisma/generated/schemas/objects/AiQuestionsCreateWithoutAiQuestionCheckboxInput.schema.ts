import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideCreateNestedOneWithoutQuestionsInputObjectSchema as GuideCreateNestedOneWithoutQuestionsInputObjectSchema } from './GuideCreateNestedOneWithoutQuestionsInput.schema';
import { AiQuestionABCDCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionABCDCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDCreateNestedOneWithoutAiQuestionsInput.schema';
import { AiQuestionRangeCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionRangeCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeCreateNestedOneWithoutAiQuestionsInput.schema';
import { AiQuestionCreateNestedOneWithoutAiQuestionsInputObjectSchema as AiQuestionCreateNestedOneWithoutAiQuestionsInputObjectSchema } from './AiQuestionCreateNestedOneWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  guide: z.lazy(() => GuideCreateNestedOneWithoutQuestionsInputObjectSchema),
  AiQuestionABCD: z.lazy(() => AiQuestionABCDCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional(),
  AiQuestionRange: z.lazy(() => AiQuestionRangeCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional(),
  AiQuestion: z.lazy(() => AiQuestionCreateNestedOneWithoutAiQuestionsInputObjectSchema).optional()
}).strict();
export const AiQuestionsCreateWithoutAiQuestionCheckboxInputObjectSchema: z.ZodType<Prisma.AiQuestionsCreateWithoutAiQuestionCheckboxInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsCreateWithoutAiQuestionCheckboxInput>;
export const AiQuestionsCreateWithoutAiQuestionCheckboxInputObjectZodSchema = makeSchema();
