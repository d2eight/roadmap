import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsCreateWithoutAiQuestionABCDInputObjectSchema as AiQuestionsCreateWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsCreateWithoutAiQuestionABCDInput.schema';
import { AiQuestionsUncheckedCreateWithoutAiQuestionABCDInputObjectSchema as AiQuestionsUncheckedCreateWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutAiQuestionABCDInput.schema';
import { AiQuestionsCreateOrConnectWithoutAiQuestionABCDInputObjectSchema as AiQuestionsCreateOrConnectWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsCreateOrConnectWithoutAiQuestionABCDInput.schema';
import { AiQuestionsUpsertWithoutAiQuestionABCDInputObjectSchema as AiQuestionsUpsertWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsUpsertWithoutAiQuestionABCDInput.schema';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './AiQuestionsWhereUniqueInput.schema';
import { AiQuestionsUpdateToOneWithWhereWithoutAiQuestionABCDInputObjectSchema as AiQuestionsUpdateToOneWithWhereWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsUpdateToOneWithWhereWithoutAiQuestionABCDInput.schema';
import { AiQuestionsUpdateWithoutAiQuestionABCDInputObjectSchema as AiQuestionsUpdateWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsUpdateWithoutAiQuestionABCDInput.schema';
import { AiQuestionsUncheckedUpdateWithoutAiQuestionABCDInputObjectSchema as AiQuestionsUncheckedUpdateWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsUncheckedUpdateWithoutAiQuestionABCDInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutAiQuestionABCDInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutAiQuestionABCDInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionsCreateOrConnectWithoutAiQuestionABCDInputObjectSchema).optional(),
  upsert: z.lazy(() => AiQuestionsUpsertWithoutAiQuestionABCDInputObjectSchema).optional(),
  connect: z.lazy(() => AiQuestionsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AiQuestionsUpdateToOneWithWhereWithoutAiQuestionABCDInputObjectSchema), z.lazy(() => AiQuestionsUpdateWithoutAiQuestionABCDInputObjectSchema), z.lazy(() => AiQuestionsUncheckedUpdateWithoutAiQuestionABCDInputObjectSchema)]).optional()
}).strict();
export const AiQuestionsUpdateOneRequiredWithoutAiQuestionABCDNestedInputObjectSchema: z.ZodType<Prisma.AiQuestionsUpdateOneRequiredWithoutAiQuestionABCDNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUpdateOneRequiredWithoutAiQuestionABCDNestedInput>;
export const AiQuestionsUpdateOneRequiredWithoutAiQuestionABCDNestedInputObjectZodSchema = makeSchema();
