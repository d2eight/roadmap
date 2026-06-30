import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsCreateWithoutAiQuestionABCDInputObjectSchema as AiQuestionsCreateWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsCreateWithoutAiQuestionABCDInput.schema';
import { AiQuestionsUncheckedCreateWithoutAiQuestionABCDInputObjectSchema as AiQuestionsUncheckedCreateWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutAiQuestionABCDInput.schema';
import { AiQuestionsCreateOrConnectWithoutAiQuestionABCDInputObjectSchema as AiQuestionsCreateOrConnectWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsCreateOrConnectWithoutAiQuestionABCDInput.schema';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './AiQuestionsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutAiQuestionABCDInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutAiQuestionABCDInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionsCreateOrConnectWithoutAiQuestionABCDInputObjectSchema).optional(),
  connect: z.lazy(() => AiQuestionsWhereUniqueInputObjectSchema).optional()
}).strict();
export const AiQuestionsCreateNestedOneWithoutAiQuestionABCDInputObjectSchema: z.ZodType<Prisma.AiQuestionsCreateNestedOneWithoutAiQuestionABCDInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsCreateNestedOneWithoutAiQuestionABCDInput>;
export const AiQuestionsCreateNestedOneWithoutAiQuestionABCDInputObjectZodSchema = makeSchema();
