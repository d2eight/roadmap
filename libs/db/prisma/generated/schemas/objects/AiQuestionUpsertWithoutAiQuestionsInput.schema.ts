import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionUpdateWithoutAiQuestionsInput.schema';
import { AiQuestionUncheckedUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionUncheckedUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionUncheckedUpdateWithoutAiQuestionsInput.schema';
import { AiQuestionCreateWithoutAiQuestionsInputObjectSchema as AiQuestionCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCreateWithoutAiQuestionsInput.schema';
import { AiQuestionUncheckedCreateWithoutAiQuestionsInputObjectSchema as AiQuestionUncheckedCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionUncheckedCreateWithoutAiQuestionsInput.schema';
import { AiQuestionWhereInputObjectSchema as AiQuestionWhereInputObjectSchema } from './AiQuestionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AiQuestionUpdateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionUncheckedUpdateWithoutAiQuestionsInputObjectSchema)]),
  create: z.union([z.lazy(() => AiQuestionCreateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionUncheckedCreateWithoutAiQuestionsInputObjectSchema)]),
  where: z.lazy(() => AiQuestionWhereInputObjectSchema).optional()
}).strict();
export const AiQuestionUpsertWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionUpsertWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionUpsertWithoutAiQuestionsInput>;
export const AiQuestionUpsertWithoutAiQuestionsInputObjectZodSchema = makeSchema();
