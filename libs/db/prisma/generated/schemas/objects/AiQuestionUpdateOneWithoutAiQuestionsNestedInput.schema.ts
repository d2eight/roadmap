import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionCreateWithoutAiQuestionsInputObjectSchema as AiQuestionCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionCreateWithoutAiQuestionsInput.schema';
import { AiQuestionUncheckedCreateWithoutAiQuestionsInputObjectSchema as AiQuestionUncheckedCreateWithoutAiQuestionsInputObjectSchema } from './AiQuestionUncheckedCreateWithoutAiQuestionsInput.schema';
import { AiQuestionCreateOrConnectWithoutAiQuestionsInputObjectSchema as AiQuestionCreateOrConnectWithoutAiQuestionsInputObjectSchema } from './AiQuestionCreateOrConnectWithoutAiQuestionsInput.schema';
import { AiQuestionUpsertWithoutAiQuestionsInputObjectSchema as AiQuestionUpsertWithoutAiQuestionsInputObjectSchema } from './AiQuestionUpsertWithoutAiQuestionsInput.schema';
import { AiQuestionWhereInputObjectSchema as AiQuestionWhereInputObjectSchema } from './AiQuestionWhereInput.schema';
import { AiQuestionWhereUniqueInputObjectSchema as AiQuestionWhereUniqueInputObjectSchema } from './AiQuestionWhereUniqueInput.schema';
import { AiQuestionUpdateToOneWithWhereWithoutAiQuestionsInputObjectSchema as AiQuestionUpdateToOneWithWhereWithoutAiQuestionsInputObjectSchema } from './AiQuestionUpdateToOneWithWhereWithoutAiQuestionsInput.schema';
import { AiQuestionUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionUpdateWithoutAiQuestionsInput.schema';
import { AiQuestionUncheckedUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionUncheckedUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionUncheckedUpdateWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionCreateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionUncheckedCreateWithoutAiQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionCreateOrConnectWithoutAiQuestionsInputObjectSchema).optional(),
  upsert: z.lazy(() => AiQuestionUpsertWithoutAiQuestionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AiQuestionWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AiQuestionWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AiQuestionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AiQuestionUpdateToOneWithWhereWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionUpdateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionUncheckedUpdateWithoutAiQuestionsInputObjectSchema)]).optional()
}).strict();
export const AiQuestionUpdateOneWithoutAiQuestionsNestedInputObjectSchema: z.ZodType<Prisma.AiQuestionUpdateOneWithoutAiQuestionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionUpdateOneWithoutAiQuestionsNestedInput>;
export const AiQuestionUpdateOneWithoutAiQuestionsNestedInputObjectZodSchema = makeSchema();
