import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionRangeUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionRangeUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeUpdateWithoutAiQuestionsInput.schema';
import { AiQuestionRangeUncheckedUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionRangeUncheckedUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeUncheckedUpdateWithoutAiQuestionsInput.schema';
import { AiQuestionRangeCreateWithoutAiQuestionsInputObjectSchema as AiQuestionRangeCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeCreateWithoutAiQuestionsInput.schema';
import { AiQuestionRangeUncheckedCreateWithoutAiQuestionsInputObjectSchema as AiQuestionRangeUncheckedCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeUncheckedCreateWithoutAiQuestionsInput.schema';
import { AiQuestionRangeWhereInputObjectSchema as AiQuestionRangeWhereInputObjectSchema } from './AiQuestionRangeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AiQuestionRangeUpdateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionRangeUncheckedUpdateWithoutAiQuestionsInputObjectSchema)]),
  create: z.union([z.lazy(() => AiQuestionRangeCreateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionRangeUncheckedCreateWithoutAiQuestionsInputObjectSchema)]),
  where: z.lazy(() => AiQuestionRangeWhereInputObjectSchema).optional()
}).strict();
export const AiQuestionRangeUpsertWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeUpsertWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeUpsertWithoutAiQuestionsInput>;
export const AiQuestionRangeUpsertWithoutAiQuestionsInputObjectZodSchema = makeSchema();
