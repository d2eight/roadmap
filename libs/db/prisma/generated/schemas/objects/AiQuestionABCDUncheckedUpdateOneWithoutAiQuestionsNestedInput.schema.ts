import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionABCDCreateWithoutAiQuestionsInputObjectSchema as AiQuestionABCDCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDCreateWithoutAiQuestionsInput.schema';
import { AiQuestionABCDUncheckedCreateWithoutAiQuestionsInputObjectSchema as AiQuestionABCDUncheckedCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDUncheckedCreateWithoutAiQuestionsInput.schema';
import { AiQuestionABCDCreateOrConnectWithoutAiQuestionsInputObjectSchema as AiQuestionABCDCreateOrConnectWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDCreateOrConnectWithoutAiQuestionsInput.schema';
import { AiQuestionABCDUpsertWithoutAiQuestionsInputObjectSchema as AiQuestionABCDUpsertWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDUpsertWithoutAiQuestionsInput.schema';
import { AiQuestionABCDWhereInputObjectSchema as AiQuestionABCDWhereInputObjectSchema } from './AiQuestionABCDWhereInput.schema';
import { AiQuestionABCDWhereUniqueInputObjectSchema as AiQuestionABCDWhereUniqueInputObjectSchema } from './AiQuestionABCDWhereUniqueInput.schema';
import { AiQuestionABCDUpdateToOneWithWhereWithoutAiQuestionsInputObjectSchema as AiQuestionABCDUpdateToOneWithWhereWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDUpdateToOneWithWhereWithoutAiQuestionsInput.schema';
import { AiQuestionABCDUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionABCDUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDUpdateWithoutAiQuestionsInput.schema';
import { AiQuestionABCDUncheckedUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionABCDUncheckedUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDUncheckedUpdateWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionABCDCreateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionABCDUncheckedCreateWithoutAiQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionABCDCreateOrConnectWithoutAiQuestionsInputObjectSchema).optional(),
  upsert: z.lazy(() => AiQuestionABCDUpsertWithoutAiQuestionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AiQuestionABCDWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AiQuestionABCDWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AiQuestionABCDWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AiQuestionABCDUpdateToOneWithWhereWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionABCDUpdateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionABCDUncheckedUpdateWithoutAiQuestionsInputObjectSchema)]).optional()
}).strict();
export const AiQuestionABCDUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectSchema: z.ZodType<Prisma.AiQuestionABCDUncheckedUpdateOneWithoutAiQuestionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionABCDUncheckedUpdateOneWithoutAiQuestionsNestedInput>;
export const AiQuestionABCDUncheckedUpdateOneWithoutAiQuestionsNestedInputObjectZodSchema = makeSchema();
