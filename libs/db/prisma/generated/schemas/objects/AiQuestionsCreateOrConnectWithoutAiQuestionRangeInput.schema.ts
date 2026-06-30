import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './AiQuestionsWhereUniqueInput.schema';
import { AiQuestionsCreateWithoutAiQuestionRangeInputObjectSchema as AiQuestionsCreateWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsCreateWithoutAiQuestionRangeInput.schema';
import { AiQuestionsUncheckedCreateWithoutAiQuestionRangeInputObjectSchema as AiQuestionsUncheckedCreateWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutAiQuestionRangeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutAiQuestionRangeInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutAiQuestionRangeInputObjectSchema)])
}).strict();
export const AiQuestionsCreateOrConnectWithoutAiQuestionRangeInputObjectSchema: z.ZodType<Prisma.AiQuestionsCreateOrConnectWithoutAiQuestionRangeInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsCreateOrConnectWithoutAiQuestionRangeInput>;
export const AiQuestionsCreateOrConnectWithoutAiQuestionRangeInputObjectZodSchema = makeSchema();
