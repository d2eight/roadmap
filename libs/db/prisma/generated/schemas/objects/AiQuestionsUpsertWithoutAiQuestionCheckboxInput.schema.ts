import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsUpdateWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsUpdateWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsUpdateWithoutAiQuestionCheckboxInput.schema';
import { AiQuestionsUncheckedUpdateWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsUncheckedUpdateWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsUncheckedUpdateWithoutAiQuestionCheckboxInput.schema';
import { AiQuestionsCreateWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsCreateWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsCreateWithoutAiQuestionCheckboxInput.schema';
import { AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInput.schema';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './AiQuestionsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AiQuestionsUpdateWithoutAiQuestionCheckboxInputObjectSchema), z.lazy(() => AiQuestionsUncheckedUpdateWithoutAiQuestionCheckboxInputObjectSchema)]),
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutAiQuestionCheckboxInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInputObjectSchema)]),
  where: z.lazy(() => AiQuestionsWhereInputObjectSchema).optional()
}).strict();
export const AiQuestionsUpsertWithoutAiQuestionCheckboxInputObjectSchema: z.ZodType<Prisma.AiQuestionsUpsertWithoutAiQuestionCheckboxInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUpsertWithoutAiQuestionCheckboxInput>;
export const AiQuestionsUpsertWithoutAiQuestionCheckboxInputObjectZodSchema = makeSchema();
