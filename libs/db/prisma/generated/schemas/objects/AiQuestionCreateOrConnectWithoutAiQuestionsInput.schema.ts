import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionWhereUniqueInputObjectSchema as AiQuestionWhereUniqueInputObjectSchema } from './AiQuestionWhereUniqueInput.schema';
import { AiQuestionCreateWithoutAiQuestionsInputObjectSchema as AiQuestionCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCreateWithoutAiQuestionsInput.schema';
import { AiQuestionUncheckedCreateWithoutAiQuestionsInputObjectSchema as AiQuestionUncheckedCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionUncheckedCreateWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AiQuestionCreateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionUncheckedCreateWithoutAiQuestionsInputObjectSchema)])
}).strict();
export const AiQuestionCreateOrConnectWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionCreateOrConnectWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCreateOrConnectWithoutAiQuestionsInput>;
export const AiQuestionCreateOrConnectWithoutAiQuestionsInputObjectZodSchema = makeSchema();
