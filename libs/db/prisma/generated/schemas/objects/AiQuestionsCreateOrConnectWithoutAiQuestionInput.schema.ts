import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './AiQuestionsWhereUniqueInput.schema';
import { AiQuestionsCreateWithoutAiQuestionInputObjectSchema as AiQuestionsCreateWithoutAiQuestionInputObjectSchema } from './AiQuestionsCreateWithoutAiQuestionInput.schema';
import { AiQuestionsUncheckedCreateWithoutAiQuestionInputObjectSchema as AiQuestionsUncheckedCreateWithoutAiQuestionInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutAiQuestionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutAiQuestionInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutAiQuestionInputObjectSchema)])
}).strict();
export const AiQuestionsCreateOrConnectWithoutAiQuestionInputObjectSchema: z.ZodType<Prisma.AiQuestionsCreateOrConnectWithoutAiQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsCreateOrConnectWithoutAiQuestionInput>;
export const AiQuestionsCreateOrConnectWithoutAiQuestionInputObjectZodSchema = makeSchema();
