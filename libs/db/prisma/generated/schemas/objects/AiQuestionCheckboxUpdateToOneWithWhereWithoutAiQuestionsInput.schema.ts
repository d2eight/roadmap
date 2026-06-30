import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionCheckboxWhereInputObjectSchema as AiQuestionCheckboxWhereInputObjectSchema } from './AiQuestionCheckboxWhereInput.schema';
import { AiQuestionCheckboxUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxUpdateWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxUncheckedUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxUncheckedUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxUncheckedUpdateWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionCheckboxWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AiQuestionCheckboxUpdateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionCheckboxUncheckedUpdateWithoutAiQuestionsInputObjectSchema)])
}).strict();
export const AiQuestionCheckboxUpdateToOneWithWhereWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxUpdateToOneWithWhereWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCheckboxUpdateToOneWithWhereWithoutAiQuestionsInput>;
export const AiQuestionCheckboxUpdateToOneWithWhereWithoutAiQuestionsInputObjectZodSchema = makeSchema();
