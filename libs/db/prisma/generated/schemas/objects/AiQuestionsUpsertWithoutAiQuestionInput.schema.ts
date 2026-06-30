import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsUpdateWithoutAiQuestionInputObjectSchema as AiQuestionsUpdateWithoutAiQuestionInputObjectSchema } from './AiQuestionsUpdateWithoutAiQuestionInput.schema';
import { AiQuestionsUncheckedUpdateWithoutAiQuestionInputObjectSchema as AiQuestionsUncheckedUpdateWithoutAiQuestionInputObjectSchema } from './AiQuestionsUncheckedUpdateWithoutAiQuestionInput.schema';
import { AiQuestionsCreateWithoutAiQuestionInputObjectSchema as AiQuestionsCreateWithoutAiQuestionInputObjectSchema } from './AiQuestionsCreateWithoutAiQuestionInput.schema';
import { AiQuestionsUncheckedCreateWithoutAiQuestionInputObjectSchema as AiQuestionsUncheckedCreateWithoutAiQuestionInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutAiQuestionInput.schema';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './AiQuestionsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AiQuestionsUpdateWithoutAiQuestionInputObjectSchema), z.lazy(() => AiQuestionsUncheckedUpdateWithoutAiQuestionInputObjectSchema)]),
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutAiQuestionInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutAiQuestionInputObjectSchema)]),
  where: z.lazy(() => AiQuestionsWhereInputObjectSchema).optional()
}).strict();
export const AiQuestionsUpsertWithoutAiQuestionInputObjectSchema: z.ZodType<Prisma.AiQuestionsUpsertWithoutAiQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUpsertWithoutAiQuestionInput>;
export const AiQuestionsUpsertWithoutAiQuestionInputObjectZodSchema = makeSchema();
