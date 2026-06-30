import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionCheckboxCreateWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxCreateWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxUncheckedCreateWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxUncheckedCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxUncheckedCreateWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxCreateOrConnectWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxCreateOrConnectWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxCreateOrConnectWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxWhereUniqueInputObjectSchema as AiQuestionCheckboxWhereUniqueInputObjectSchema } from './AiQuestionCheckboxWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionCheckboxCreateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionCheckboxUncheckedCreateWithoutAiQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionCheckboxCreateOrConnectWithoutAiQuestionsInputObjectSchema).optional(),
  connect: z.lazy(() => AiQuestionCheckboxWhereUniqueInputObjectSchema).optional()
}).strict();
export const AiQuestionCheckboxCreateNestedOneWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxCreateNestedOneWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCheckboxCreateNestedOneWithoutAiQuestionsInput>;
export const AiQuestionCheckboxCreateNestedOneWithoutAiQuestionsInputObjectZodSchema = makeSchema();
