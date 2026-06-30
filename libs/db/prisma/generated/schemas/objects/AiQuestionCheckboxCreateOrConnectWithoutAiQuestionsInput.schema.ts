import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionCheckboxWhereUniqueInputObjectSchema as AiQuestionCheckboxWhereUniqueInputObjectSchema } from './AiQuestionCheckboxWhereUniqueInput.schema';
import { AiQuestionCheckboxCreateWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxCreateWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxUncheckedCreateWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxUncheckedCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxUncheckedCreateWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionCheckboxWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AiQuestionCheckboxCreateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionCheckboxUncheckedCreateWithoutAiQuestionsInputObjectSchema)])
}).strict();
export const AiQuestionCheckboxCreateOrConnectWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxCreateOrConnectWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCheckboxCreateOrConnectWithoutAiQuestionsInput>;
export const AiQuestionCheckboxCreateOrConnectWithoutAiQuestionsInputObjectZodSchema = makeSchema();
