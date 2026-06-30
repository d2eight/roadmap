import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './AiQuestionsWhereInput.schema';
import { AiQuestionsUpdateWithoutAiQuestionRangeInputObjectSchema as AiQuestionsUpdateWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsUpdateWithoutAiQuestionRangeInput.schema';
import { AiQuestionsUncheckedUpdateWithoutAiQuestionRangeInputObjectSchema as AiQuestionsUncheckedUpdateWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsUncheckedUpdateWithoutAiQuestionRangeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AiQuestionsUpdateWithoutAiQuestionRangeInputObjectSchema), z.lazy(() => AiQuestionsUncheckedUpdateWithoutAiQuestionRangeInputObjectSchema)])
}).strict();
export const AiQuestionsUpdateToOneWithWhereWithoutAiQuestionRangeInputObjectSchema: z.ZodType<Prisma.AiQuestionsUpdateToOneWithWhereWithoutAiQuestionRangeInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUpdateToOneWithWhereWithoutAiQuestionRangeInput>;
export const AiQuestionsUpdateToOneWithWhereWithoutAiQuestionRangeInputObjectZodSchema = makeSchema();
