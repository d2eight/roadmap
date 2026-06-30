import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsCreateWithoutAiQuestionRangeInputObjectSchema as AiQuestionsCreateWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsCreateWithoutAiQuestionRangeInput.schema';
import { AiQuestionsUncheckedCreateWithoutAiQuestionRangeInputObjectSchema as AiQuestionsUncheckedCreateWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutAiQuestionRangeInput.schema';
import { AiQuestionsCreateOrConnectWithoutAiQuestionRangeInputObjectSchema as AiQuestionsCreateOrConnectWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsCreateOrConnectWithoutAiQuestionRangeInput.schema';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './AiQuestionsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutAiQuestionRangeInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutAiQuestionRangeInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionsCreateOrConnectWithoutAiQuestionRangeInputObjectSchema).optional(),
  connect: z.lazy(() => AiQuestionsWhereUniqueInputObjectSchema).optional()
}).strict();
export const AiQuestionsCreateNestedOneWithoutAiQuestionRangeInputObjectSchema: z.ZodType<Prisma.AiQuestionsCreateNestedOneWithoutAiQuestionRangeInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsCreateNestedOneWithoutAiQuestionRangeInput>;
export const AiQuestionsCreateNestedOneWithoutAiQuestionRangeInputObjectZodSchema = makeSchema();
