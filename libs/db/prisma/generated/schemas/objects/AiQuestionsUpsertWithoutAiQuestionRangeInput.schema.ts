import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsUpdateWithoutAiQuestionRangeInputObjectSchema as AiQuestionsUpdateWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsUpdateWithoutAiQuestionRangeInput.schema';
import { AiQuestionsUncheckedUpdateWithoutAiQuestionRangeInputObjectSchema as AiQuestionsUncheckedUpdateWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsUncheckedUpdateWithoutAiQuestionRangeInput.schema';
import { AiQuestionsCreateWithoutAiQuestionRangeInputObjectSchema as AiQuestionsCreateWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsCreateWithoutAiQuestionRangeInput.schema';
import { AiQuestionsUncheckedCreateWithoutAiQuestionRangeInputObjectSchema as AiQuestionsUncheckedCreateWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutAiQuestionRangeInput.schema';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './AiQuestionsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AiQuestionsUpdateWithoutAiQuestionRangeInputObjectSchema), z.lazy(() => AiQuestionsUncheckedUpdateWithoutAiQuestionRangeInputObjectSchema)]),
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutAiQuestionRangeInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutAiQuestionRangeInputObjectSchema)]),
  where: z.lazy(() => AiQuestionsWhereInputObjectSchema).optional()
}).strict();
export const AiQuestionsUpsertWithoutAiQuestionRangeInputObjectSchema: z.ZodType<Prisma.AiQuestionsUpsertWithoutAiQuestionRangeInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUpsertWithoutAiQuestionRangeInput>;
export const AiQuestionsUpsertWithoutAiQuestionRangeInputObjectZodSchema = makeSchema();
