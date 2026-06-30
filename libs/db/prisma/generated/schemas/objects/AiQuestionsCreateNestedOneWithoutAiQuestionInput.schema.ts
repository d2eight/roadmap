import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsCreateWithoutAiQuestionInputObjectSchema as AiQuestionsCreateWithoutAiQuestionInputObjectSchema } from './AiQuestionsCreateWithoutAiQuestionInput.schema';
import { AiQuestionsUncheckedCreateWithoutAiQuestionInputObjectSchema as AiQuestionsUncheckedCreateWithoutAiQuestionInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutAiQuestionInput.schema';
import { AiQuestionsCreateOrConnectWithoutAiQuestionInputObjectSchema as AiQuestionsCreateOrConnectWithoutAiQuestionInputObjectSchema } from './AiQuestionsCreateOrConnectWithoutAiQuestionInput.schema';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './AiQuestionsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutAiQuestionInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutAiQuestionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionsCreateOrConnectWithoutAiQuestionInputObjectSchema).optional(),
  connect: z.lazy(() => AiQuestionsWhereUniqueInputObjectSchema).optional()
}).strict();
export const AiQuestionsCreateNestedOneWithoutAiQuestionInputObjectSchema: z.ZodType<Prisma.AiQuestionsCreateNestedOneWithoutAiQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsCreateNestedOneWithoutAiQuestionInput>;
export const AiQuestionsCreateNestedOneWithoutAiQuestionInputObjectZodSchema = makeSchema();
