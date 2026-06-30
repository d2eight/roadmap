import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionRangeCreateWithoutAiQuestionsInputObjectSchema as AiQuestionRangeCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeCreateWithoutAiQuestionsInput.schema';
import { AiQuestionRangeUncheckedCreateWithoutAiQuestionsInputObjectSchema as AiQuestionRangeUncheckedCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeUncheckedCreateWithoutAiQuestionsInput.schema';
import { AiQuestionRangeCreateOrConnectWithoutAiQuestionsInputObjectSchema as AiQuestionRangeCreateOrConnectWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeCreateOrConnectWithoutAiQuestionsInput.schema';
import { AiQuestionRangeUpsertWithoutAiQuestionsInputObjectSchema as AiQuestionRangeUpsertWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeUpsertWithoutAiQuestionsInput.schema';
import { AiQuestionRangeWhereInputObjectSchema as AiQuestionRangeWhereInputObjectSchema } from './AiQuestionRangeWhereInput.schema';
import { AiQuestionRangeWhereUniqueInputObjectSchema as AiQuestionRangeWhereUniqueInputObjectSchema } from './AiQuestionRangeWhereUniqueInput.schema';
import { AiQuestionRangeUpdateToOneWithWhereWithoutAiQuestionsInputObjectSchema as AiQuestionRangeUpdateToOneWithWhereWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeUpdateToOneWithWhereWithoutAiQuestionsInput.schema';
import { AiQuestionRangeUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionRangeUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeUpdateWithoutAiQuestionsInput.schema';
import { AiQuestionRangeUncheckedUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionRangeUncheckedUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionRangeUncheckedUpdateWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionRangeCreateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionRangeUncheckedCreateWithoutAiQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionRangeCreateOrConnectWithoutAiQuestionsInputObjectSchema).optional(),
  upsert: z.lazy(() => AiQuestionRangeUpsertWithoutAiQuestionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AiQuestionRangeWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AiQuestionRangeWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AiQuestionRangeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AiQuestionRangeUpdateToOneWithWhereWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionRangeUpdateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionRangeUncheckedUpdateWithoutAiQuestionsInputObjectSchema)]).optional()
}).strict();
export const AiQuestionRangeUpdateOneWithoutAiQuestionsNestedInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeUpdateOneWithoutAiQuestionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeUpdateOneWithoutAiQuestionsNestedInput>;
export const AiQuestionRangeUpdateOneWithoutAiQuestionsNestedInputObjectZodSchema = makeSchema();
