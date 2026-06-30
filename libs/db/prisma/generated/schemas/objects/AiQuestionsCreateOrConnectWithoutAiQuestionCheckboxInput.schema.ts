import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './AiQuestionsWhereUniqueInput.schema';
import { AiQuestionsCreateWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsCreateWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsCreateWithoutAiQuestionCheckboxInput.schema';
import { AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutAiQuestionCheckboxInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInputObjectSchema)])
}).strict();
export const AiQuestionsCreateOrConnectWithoutAiQuestionCheckboxInputObjectSchema: z.ZodType<Prisma.AiQuestionsCreateOrConnectWithoutAiQuestionCheckboxInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsCreateOrConnectWithoutAiQuestionCheckboxInput>;
export const AiQuestionsCreateOrConnectWithoutAiQuestionCheckboxInputObjectZodSchema = makeSchema();
