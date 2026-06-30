import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionWhereInputObjectSchema as AiQuestionWhereInputObjectSchema } from './AiQuestionWhereInput.schema';
import { AiQuestionUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionUpdateWithoutAiQuestionsInput.schema';
import { AiQuestionUncheckedUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionUncheckedUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionUncheckedUpdateWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AiQuestionUpdateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionUncheckedUpdateWithoutAiQuestionsInputObjectSchema)])
}).strict();
export const AiQuestionUpdateToOneWithWhereWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionUpdateToOneWithWhereWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionUpdateToOneWithWhereWithoutAiQuestionsInput>;
export const AiQuestionUpdateToOneWithWhereWithoutAiQuestionsInputObjectZodSchema = makeSchema();
