import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionABCDUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionABCDUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDUpdateWithoutAiQuestionsInput.schema';
import { AiQuestionABCDUncheckedUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionABCDUncheckedUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDUncheckedUpdateWithoutAiQuestionsInput.schema';
import { AiQuestionABCDCreateWithoutAiQuestionsInputObjectSchema as AiQuestionABCDCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDCreateWithoutAiQuestionsInput.schema';
import { AiQuestionABCDUncheckedCreateWithoutAiQuestionsInputObjectSchema as AiQuestionABCDUncheckedCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDUncheckedCreateWithoutAiQuestionsInput.schema';
import { AiQuestionABCDWhereInputObjectSchema as AiQuestionABCDWhereInputObjectSchema } from './AiQuestionABCDWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AiQuestionABCDUpdateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionABCDUncheckedUpdateWithoutAiQuestionsInputObjectSchema)]),
  create: z.union([z.lazy(() => AiQuestionABCDCreateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionABCDUncheckedCreateWithoutAiQuestionsInputObjectSchema)]),
  where: z.lazy(() => AiQuestionABCDWhereInputObjectSchema).optional()
}).strict();
export const AiQuestionABCDUpsertWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionABCDUpsertWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionABCDUpsertWithoutAiQuestionsInput>;
export const AiQuestionABCDUpsertWithoutAiQuestionsInputObjectZodSchema = makeSchema();
