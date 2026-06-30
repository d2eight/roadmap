import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionABCDCreateWithoutAiQuestionsInputObjectSchema as AiQuestionABCDCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDCreateWithoutAiQuestionsInput.schema';
import { AiQuestionABCDUncheckedCreateWithoutAiQuestionsInputObjectSchema as AiQuestionABCDUncheckedCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDUncheckedCreateWithoutAiQuestionsInput.schema';
import { AiQuestionABCDCreateOrConnectWithoutAiQuestionsInputObjectSchema as AiQuestionABCDCreateOrConnectWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDCreateOrConnectWithoutAiQuestionsInput.schema';
import { AiQuestionABCDWhereUniqueInputObjectSchema as AiQuestionABCDWhereUniqueInputObjectSchema } from './AiQuestionABCDWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionABCDCreateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionABCDUncheckedCreateWithoutAiQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionABCDCreateOrConnectWithoutAiQuestionsInputObjectSchema).optional(),
  connect: z.lazy(() => AiQuestionABCDWhereUniqueInputObjectSchema).optional()
}).strict();
export const AiQuestionABCDUncheckedCreateNestedOneWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionABCDUncheckedCreateNestedOneWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionABCDUncheckedCreateNestedOneWithoutAiQuestionsInput>;
export const AiQuestionABCDUncheckedCreateNestedOneWithoutAiQuestionsInputObjectZodSchema = makeSchema();
