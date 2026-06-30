import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './AiQuestionsWhereUniqueInput.schema';
import { AiQuestionsCreateWithoutAiQuestionABCDInputObjectSchema as AiQuestionsCreateWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsCreateWithoutAiQuestionABCDInput.schema';
import { AiQuestionsUncheckedCreateWithoutAiQuestionABCDInputObjectSchema as AiQuestionsUncheckedCreateWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutAiQuestionABCDInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutAiQuestionABCDInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutAiQuestionABCDInputObjectSchema)])
}).strict();
export const AiQuestionsCreateOrConnectWithoutAiQuestionABCDInputObjectSchema: z.ZodType<Prisma.AiQuestionsCreateOrConnectWithoutAiQuestionABCDInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsCreateOrConnectWithoutAiQuestionABCDInput>;
export const AiQuestionsCreateOrConnectWithoutAiQuestionABCDInputObjectZodSchema = makeSchema();
