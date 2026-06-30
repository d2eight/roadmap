import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsCreateWithoutAiQuestionInputObjectSchema as AiQuestionsCreateWithoutAiQuestionInputObjectSchema } from './AiQuestionsCreateWithoutAiQuestionInput.schema';
import { AiQuestionsUncheckedCreateWithoutAiQuestionInputObjectSchema as AiQuestionsUncheckedCreateWithoutAiQuestionInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutAiQuestionInput.schema';
import { AiQuestionsCreateOrConnectWithoutAiQuestionInputObjectSchema as AiQuestionsCreateOrConnectWithoutAiQuestionInputObjectSchema } from './AiQuestionsCreateOrConnectWithoutAiQuestionInput.schema';
import { AiQuestionsUpsertWithoutAiQuestionInputObjectSchema as AiQuestionsUpsertWithoutAiQuestionInputObjectSchema } from './AiQuestionsUpsertWithoutAiQuestionInput.schema';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './AiQuestionsWhereUniqueInput.schema';
import { AiQuestionsUpdateToOneWithWhereWithoutAiQuestionInputObjectSchema as AiQuestionsUpdateToOneWithWhereWithoutAiQuestionInputObjectSchema } from './AiQuestionsUpdateToOneWithWhereWithoutAiQuestionInput.schema';
import { AiQuestionsUpdateWithoutAiQuestionInputObjectSchema as AiQuestionsUpdateWithoutAiQuestionInputObjectSchema } from './AiQuestionsUpdateWithoutAiQuestionInput.schema';
import { AiQuestionsUncheckedUpdateWithoutAiQuestionInputObjectSchema as AiQuestionsUncheckedUpdateWithoutAiQuestionInputObjectSchema } from './AiQuestionsUncheckedUpdateWithoutAiQuestionInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutAiQuestionInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutAiQuestionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionsCreateOrConnectWithoutAiQuestionInputObjectSchema).optional(),
  upsert: z.lazy(() => AiQuestionsUpsertWithoutAiQuestionInputObjectSchema).optional(),
  connect: z.lazy(() => AiQuestionsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AiQuestionsUpdateToOneWithWhereWithoutAiQuestionInputObjectSchema), z.lazy(() => AiQuestionsUpdateWithoutAiQuestionInputObjectSchema), z.lazy(() => AiQuestionsUncheckedUpdateWithoutAiQuestionInputObjectSchema)]).optional()
}).strict();
export const AiQuestionsUpdateOneRequiredWithoutAiQuestionNestedInputObjectSchema: z.ZodType<Prisma.AiQuestionsUpdateOneRequiredWithoutAiQuestionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUpdateOneRequiredWithoutAiQuestionNestedInput>;
export const AiQuestionsUpdateOneRequiredWithoutAiQuestionNestedInputObjectZodSchema = makeSchema();
