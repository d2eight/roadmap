import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionCheckboxCreateWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxCreateWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxUncheckedCreateWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxUncheckedCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxUncheckedCreateWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxCreateOrConnectWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxCreateOrConnectWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxCreateOrConnectWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxUpsertWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxUpsertWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxUpsertWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxWhereInputObjectSchema as AiQuestionCheckboxWhereInputObjectSchema } from './AiQuestionCheckboxWhereInput.schema';
import { AiQuestionCheckboxWhereUniqueInputObjectSchema as AiQuestionCheckboxWhereUniqueInputObjectSchema } from './AiQuestionCheckboxWhereUniqueInput.schema';
import { AiQuestionCheckboxUpdateToOneWithWhereWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxUpdateToOneWithWhereWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxUpdateToOneWithWhereWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxUpdateWithoutAiQuestionsInput.schema';
import { AiQuestionCheckboxUncheckedUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionCheckboxUncheckedUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCheckboxUncheckedUpdateWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionCheckboxCreateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionCheckboxUncheckedCreateWithoutAiQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionCheckboxCreateOrConnectWithoutAiQuestionsInputObjectSchema).optional(),
  upsert: z.lazy(() => AiQuestionCheckboxUpsertWithoutAiQuestionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AiQuestionCheckboxWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AiQuestionCheckboxWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AiQuestionCheckboxWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AiQuestionCheckboxUpdateToOneWithWhereWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionCheckboxUpdateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionCheckboxUncheckedUpdateWithoutAiQuestionsInputObjectSchema)]).optional()
}).strict();
export const AiQuestionCheckboxUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxUncheckedUpdateOneWithoutAiQuestionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCheckboxUncheckedUpdateOneWithoutAiQuestionsNestedInput>;
export const AiQuestionCheckboxUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectZodSchema = makeSchema();
