import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsCreateWithoutAiQuestionRangeInputObjectSchema as AiQuestionsCreateWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsCreateWithoutAiQuestionRangeInput.schema';
import { AiQuestionsUncheckedCreateWithoutAiQuestionRangeInputObjectSchema as AiQuestionsUncheckedCreateWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutAiQuestionRangeInput.schema';
import { AiQuestionsCreateOrConnectWithoutAiQuestionRangeInputObjectSchema as AiQuestionsCreateOrConnectWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsCreateOrConnectWithoutAiQuestionRangeInput.schema';
import { AiQuestionsUpsertWithoutAiQuestionRangeInputObjectSchema as AiQuestionsUpsertWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsUpsertWithoutAiQuestionRangeInput.schema';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './AiQuestionsWhereUniqueInput.schema';
import { AiQuestionsUpdateToOneWithWhereWithoutAiQuestionRangeInputObjectSchema as AiQuestionsUpdateToOneWithWhereWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsUpdateToOneWithWhereWithoutAiQuestionRangeInput.schema';
import { AiQuestionsUpdateWithoutAiQuestionRangeInputObjectSchema as AiQuestionsUpdateWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsUpdateWithoutAiQuestionRangeInput.schema';
import { AiQuestionsUncheckedUpdateWithoutAiQuestionRangeInputObjectSchema as AiQuestionsUncheckedUpdateWithoutAiQuestionRangeInputObjectSchema } from './AiQuestionsUncheckedUpdateWithoutAiQuestionRangeInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutAiQuestionRangeInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutAiQuestionRangeInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionsCreateOrConnectWithoutAiQuestionRangeInputObjectSchema).optional(),
  upsert: z.lazy(() => AiQuestionsUpsertWithoutAiQuestionRangeInputObjectSchema).optional(),
  connect: z.lazy(() => AiQuestionsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AiQuestionsUpdateToOneWithWhereWithoutAiQuestionRangeInputObjectSchema), z.lazy(() => AiQuestionsUpdateWithoutAiQuestionRangeInputObjectSchema), z.lazy(() => AiQuestionsUncheckedUpdateWithoutAiQuestionRangeInputObjectSchema)]).optional()
}).strict();
export const AiQuestionsUpdateOneRequiredWithoutAiQuestionRangeNestedInputObjectSchema: z.ZodType<Prisma.AiQuestionsUpdateOneRequiredWithoutAiQuestionRangeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUpdateOneRequiredWithoutAiQuestionRangeNestedInput>;
export const AiQuestionsUpdateOneRequiredWithoutAiQuestionRangeNestedInputObjectZodSchema = makeSchema();
