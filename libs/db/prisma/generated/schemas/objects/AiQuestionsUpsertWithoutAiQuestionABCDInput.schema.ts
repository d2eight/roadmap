import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsUpdateWithoutAiQuestionABCDInputObjectSchema as AiQuestionsUpdateWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsUpdateWithoutAiQuestionABCDInput.schema';
import { AiQuestionsUncheckedUpdateWithoutAiQuestionABCDInputObjectSchema as AiQuestionsUncheckedUpdateWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsUncheckedUpdateWithoutAiQuestionABCDInput.schema';
import { AiQuestionsCreateWithoutAiQuestionABCDInputObjectSchema as AiQuestionsCreateWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsCreateWithoutAiQuestionABCDInput.schema';
import { AiQuestionsUncheckedCreateWithoutAiQuestionABCDInputObjectSchema as AiQuestionsUncheckedCreateWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutAiQuestionABCDInput.schema';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './AiQuestionsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AiQuestionsUpdateWithoutAiQuestionABCDInputObjectSchema), z.lazy(() => AiQuestionsUncheckedUpdateWithoutAiQuestionABCDInputObjectSchema)]),
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutAiQuestionABCDInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutAiQuestionABCDInputObjectSchema)]),
  where: z.lazy(() => AiQuestionsWhereInputObjectSchema).optional()
}).strict();
export const AiQuestionsUpsertWithoutAiQuestionABCDInputObjectSchema: z.ZodType<Prisma.AiQuestionsUpsertWithoutAiQuestionABCDInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUpsertWithoutAiQuestionABCDInput>;
export const AiQuestionsUpsertWithoutAiQuestionABCDInputObjectZodSchema = makeSchema();
