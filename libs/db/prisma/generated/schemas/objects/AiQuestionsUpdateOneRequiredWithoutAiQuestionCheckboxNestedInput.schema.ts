import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsCreateWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsCreateWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsCreateWithoutAiQuestionCheckboxInput.schema';
import { AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInput.schema';
import { AiQuestionsCreateOrConnectWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsCreateOrConnectWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsCreateOrConnectWithoutAiQuestionCheckboxInput.schema';
import { AiQuestionsUpsertWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsUpsertWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsUpsertWithoutAiQuestionCheckboxInput.schema';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './AiQuestionsWhereUniqueInput.schema';
import { AiQuestionsUpdateToOneWithWhereWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsUpdateToOneWithWhereWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsUpdateToOneWithWhereWithoutAiQuestionCheckboxInput.schema';
import { AiQuestionsUpdateWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsUpdateWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsUpdateWithoutAiQuestionCheckboxInput.schema';
import { AiQuestionsUncheckedUpdateWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsUncheckedUpdateWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsUncheckedUpdateWithoutAiQuestionCheckboxInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutAiQuestionCheckboxInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutAiQuestionCheckboxInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionsCreateOrConnectWithoutAiQuestionCheckboxInputObjectSchema).optional(),
  upsert: z.lazy(() => AiQuestionsUpsertWithoutAiQuestionCheckboxInputObjectSchema).optional(),
  connect: z.lazy(() => AiQuestionsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AiQuestionsUpdateToOneWithWhereWithoutAiQuestionCheckboxInputObjectSchema), z.lazy(() => AiQuestionsUpdateWithoutAiQuestionCheckboxInputObjectSchema), z.lazy(() => AiQuestionsUncheckedUpdateWithoutAiQuestionCheckboxInputObjectSchema)]).optional()
}).strict();
export const AiQuestionsUpdateOneRequiredWithoutAiQuestionCheckboxNestedInputObjectSchema: z.ZodType<Prisma.AiQuestionsUpdateOneRequiredWithoutAiQuestionCheckboxNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUpdateOneRequiredWithoutAiQuestionCheckboxNestedInput>;
export const AiQuestionsUpdateOneRequiredWithoutAiQuestionCheckboxNestedInputObjectZodSchema = makeSchema();
