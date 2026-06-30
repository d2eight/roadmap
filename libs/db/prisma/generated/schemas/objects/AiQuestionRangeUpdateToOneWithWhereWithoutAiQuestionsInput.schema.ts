import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionRangeWhereInputObjectSchema as AiQuestionRangeWhereInputObjectSchema } from './AiQuestionRangeWhereInput.schema';
import { AiQuestionRangeUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionRangeUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeUpdateWithoutAiQuestionsInput.schema';
import { AiQuestionRangeUncheckedUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionRangeUncheckedUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeUncheckedUpdateWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionRangeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AiQuestionRangeUpdateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionRangeUncheckedUpdateWithoutAiQuestionsInputObjectSchema)])
}).strict();
export const AiQuestionRangeUpdateToOneWithWhereWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeUpdateToOneWithWhereWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeUpdateToOneWithWhereWithoutAiQuestionsInput>;
export const AiQuestionRangeUpdateToOneWithWhereWithoutAiQuestionsInputObjectZodSchema = makeSchema();
