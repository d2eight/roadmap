import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsCreateWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsCreateWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsCreateWithoutAiQuestionCheckboxInput.schema';
import { AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInput.schema';
import { AiQuestionsCreateOrConnectWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsCreateOrConnectWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsCreateOrConnectWithoutAiQuestionCheckboxInput.schema';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './AiQuestionsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutAiQuestionCheckboxInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionsCreateOrConnectWithoutAiQuestionCheckboxInputObjectSchema).optional(),
  connect: z.lazy(() => AiQuestionsWhereUniqueInputObjectSchema).optional()
}).strict();
export const AiQuestionsCreateNestedOneWithoutAiQuestionCheckboxInputObjectSchema: z.ZodType<Prisma.AiQuestionsCreateNestedOneWithoutAiQuestionCheckboxInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsCreateNestedOneWithoutAiQuestionCheckboxInput>;
export const AiQuestionsCreateNestedOneWithoutAiQuestionCheckboxInputObjectZodSchema = makeSchema();
