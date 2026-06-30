import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './AiQuestionsWhereInput.schema';
import { AiQuestionsUpdateWithoutAiQuestionInputObjectSchema as AiQuestionsUpdateWithoutAiQuestionInputObjectSchema } from './AiQuestionsUpdateWithoutAiQuestionInput.schema';
import { AiQuestionsUncheckedUpdateWithoutAiQuestionInputObjectSchema as AiQuestionsUncheckedUpdateWithoutAiQuestionInputObjectSchema } from './AiQuestionsUncheckedUpdateWithoutAiQuestionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AiQuestionsUpdateWithoutAiQuestionInputObjectSchema), z.lazy(() => AiQuestionsUncheckedUpdateWithoutAiQuestionInputObjectSchema)])
}).strict();
export const AiQuestionsUpdateToOneWithWhereWithoutAiQuestionInputObjectSchema: z.ZodType<Prisma.AiQuestionsUpdateToOneWithWhereWithoutAiQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUpdateToOneWithWhereWithoutAiQuestionInput>;
export const AiQuestionsUpdateToOneWithWhereWithoutAiQuestionInputObjectZodSchema = makeSchema();
