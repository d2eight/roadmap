import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionRangeCreateWithoutAiQuestionsInputObjectSchema as AiQuestionRangeCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeCreateWithoutAiQuestionsInput.schema';
import { AiQuestionRangeUncheckedCreateWithoutAiQuestionsInputObjectSchema as AiQuestionRangeUncheckedCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeUncheckedCreateWithoutAiQuestionsInput.schema';
import { AiQuestionRangeCreateOrConnectWithoutAiQuestionsInputObjectSchema as AiQuestionRangeCreateOrConnectWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeCreateOrConnectWithoutAiQuestionsInput.schema';
import { AiQuestionRangeWhereUniqueInputObjectSchema as AiQuestionRangeWhereUniqueInputObjectSchema } from './AiQuestionRangeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionRangeCreateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionRangeUncheckedCreateWithoutAiQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionRangeCreateOrConnectWithoutAiQuestionsInputObjectSchema).optional(),
  connect: z.lazy(() => AiQuestionRangeWhereUniqueInputObjectSchema).optional()
}).strict();
export const AiQuestionRangeUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeUncheckedCreateNestedOneWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeUncheckedCreateNestedOneWithoutAiQuestionsInput>;
export const AiQuestionRangeUncheckedCreateNestedOneWithoutAiQuestionsInputObjectZodSchema = makeSchema();
