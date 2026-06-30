import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './AiQuestionsWhereInput.schema';
import { AiQuestionsUpdateWithoutAiQuestionABCDInputObjectSchema as AiQuestionsUpdateWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsUpdateWithoutAiQuestionABCDInput.schema';
import { AiQuestionsUncheckedUpdateWithoutAiQuestionABCDInputObjectSchema as AiQuestionsUncheckedUpdateWithoutAiQuestionABCDInputObjectSchema } from './AiQuestionsUncheckedUpdateWithoutAiQuestionABCDInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AiQuestionsUpdateWithoutAiQuestionABCDInputObjectSchema), z.lazy(() => AiQuestionsUncheckedUpdateWithoutAiQuestionABCDInputObjectSchema)])
}).strict();
export const AiQuestionsUpdateToOneWithWhereWithoutAiQuestionABCDInputObjectSchema: z.ZodType<Prisma.AiQuestionsUpdateToOneWithWhereWithoutAiQuestionABCDInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUpdateToOneWithWhereWithoutAiQuestionABCDInput>;
export const AiQuestionsUpdateToOneWithWhereWithoutAiQuestionABCDInputObjectZodSchema = makeSchema();
