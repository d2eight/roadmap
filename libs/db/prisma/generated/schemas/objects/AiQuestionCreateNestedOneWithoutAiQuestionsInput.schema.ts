import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionCreateWithoutAiQuestionsInputObjectSchema as AiQuestionCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCreateWithoutAiQuestionsInput.schema';
import { AiQuestionUncheckedCreateWithoutAiQuestionsInputObjectSchema as AiQuestionUncheckedCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionUncheckedCreateWithoutAiQuestionsInput.schema';
import { AiQuestionCreateOrConnectWithoutAiQuestionsInputObjectSchema as AiQuestionCreateOrConnectWithoutAiQuestionsInputObjectSchema } from './AiQuestionCreateOrConnectWithoutAiQuestionsInput.schema';
import { AiQuestionWhereUniqueInputObjectSchema as AiQuestionWhereUniqueInputObjectSchema } from './AiQuestionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionCreateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionUncheckedCreateWithoutAiQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionCreateOrConnectWithoutAiQuestionsInputObjectSchema).optional(),
  connect: z.lazy(() => AiQuestionWhereUniqueInputObjectSchema).optional()
}).strict();
export const AiQuestionCreateNestedOneWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionCreateNestedOneWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCreateNestedOneWithoutAiQuestionsInput>;
export const AiQuestionCreateNestedOneWithoutAiQuestionsInputObjectZodSchema = makeSchema();
