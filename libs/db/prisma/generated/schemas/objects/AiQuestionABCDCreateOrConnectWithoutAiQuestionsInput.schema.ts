import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionABCDWhereUniqueInputObjectSchema as AiQuestionABCDWhereUniqueInputObjectSchema } from './AiQuestionABCDWhereUniqueInput.schema';
import { AiQuestionABCDCreateWithoutAiQuestionsInputObjectSchema as AiQuestionABCDCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDCreateWithoutAiQuestionsInput.schema';
import { AiQuestionABCDUncheckedCreateWithoutAiQuestionsInputObjectSchema as AiQuestionABCDUncheckedCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDUncheckedCreateWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionABCDWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AiQuestionABCDCreateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionABCDUncheckedCreateWithoutAiQuestionsInputObjectSchema)])
}).strict();
export const AiQuestionABCDCreateOrConnectWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionABCDCreateOrConnectWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionABCDCreateOrConnectWithoutAiQuestionsInput>;
export const AiQuestionABCDCreateOrConnectWithoutAiQuestionsInputObjectZodSchema = makeSchema();
