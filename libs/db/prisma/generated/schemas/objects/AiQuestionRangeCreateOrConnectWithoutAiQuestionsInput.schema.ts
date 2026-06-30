import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionRangeWhereUniqueInputObjectSchema as AiQuestionRangeWhereUniqueInputObjectSchema } from './AiQuestionRangeWhereUniqueInput.schema';
import { AiQuestionRangeCreateWithoutAiQuestionsInputObjectSchema as AiQuestionRangeCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeCreateWithoutAiQuestionsInput.schema';
import { AiQuestionRangeUncheckedCreateWithoutAiQuestionsInputObjectSchema as AiQuestionRangeUncheckedCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeUncheckedCreateWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionRangeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AiQuestionRangeCreateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionRangeUncheckedCreateWithoutAiQuestionsInputObjectSchema)])
}).strict();
export const AiQuestionRangeCreateOrConnectWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeCreateOrConnectWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeCreateOrConnectWithoutAiQuestionsInput>;
export const AiQuestionRangeCreateOrConnectWithoutAiQuestionsInputObjectZodSchema = makeSchema();
