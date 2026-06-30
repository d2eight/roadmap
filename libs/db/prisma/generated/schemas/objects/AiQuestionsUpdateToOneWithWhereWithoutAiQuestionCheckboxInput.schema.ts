import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './AiQuestionsWhereInput.schema';
import { AiQuestionsUpdateWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsUpdateWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsUpdateWithoutAiQuestionCheckboxInput.schema';
import { AiQuestionsUncheckedUpdateWithoutAiQuestionCheckboxInputObjectSchema as AiQuestionsUncheckedUpdateWithoutAiQuestionCheckboxInputObjectSchema } from './AiQuestionsUncheckedUpdateWithoutAiQuestionCheckboxInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AiQuestionsUpdateWithoutAiQuestionCheckboxInputObjectSchema), z.lazy(() => AiQuestionsUncheckedUpdateWithoutAiQuestionCheckboxInputObjectSchema)])
}).strict();
export const AiQuestionsUpdateToOneWithWhereWithoutAiQuestionCheckboxInputObjectSchema: z.ZodType<Prisma.AiQuestionsUpdateToOneWithWhereWithoutAiQuestionCheckboxInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUpdateToOneWithWhereWithoutAiQuestionCheckboxInput>;
export const AiQuestionsUpdateToOneWithWhereWithoutAiQuestionCheckboxInputObjectZodSchema = makeSchema();
