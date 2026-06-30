import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionCheckboxUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxUpdateWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxUncheckedUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxUncheckedUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxUncheckedUpdateWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxCreateWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxCreateWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxUncheckedCreateWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxUncheckedCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxUncheckedCreateWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxWhereInputObjectSchema as AiQuestionCheckboxWhereInputObjectSchema } from './AiQuestionCheckboxWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AiQuestionCheckboxUpdateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionCheckboxUncheckedUpdateWithoutAiQuestionsInputObjectSchema)]),
  create: z.union([z.lazy(() => AiQuestionCheckboxCreateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionCheckboxUncheckedCreateWithoutAiQuestionsInputObjectSchema)]),
  where: z.lazy(() => AiQuestionCheckboxWhereInputObjectSchema).optional()
}).strict();
export const AiQuestionCheckboxUpsertWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxUpsertWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCheckboxUpsertWithoutAiQuestionsInput>;
export const AiQuestionCheckboxUpsertWithoutAiQuestionsInputObjectZodSchema = makeSchema();
