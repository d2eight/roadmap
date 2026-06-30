import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionABCDWhereInputObjectSchema as AiQuestionABCDWhereInputObjectSchema } from './AiQuestionABCDWhereInput.schema';
import { AiQuestionABCDUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionABCDUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDUpdateWithoutAiQuestionsInput.schema';
import { AiQuestionABCDUncheckedUpdateWithoutAiQuestionsInputObjectSchema as AiQuestionABCDUncheckedUpdateWithoutAiQuestionsInputObjectSchema } from './AiQuestionABCDUncheckedUpdateWithoutAiQuestionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionABCDWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AiQuestionABCDUpdateWithoutAiQuestionsInputObjectSchema), z.lazy(() => AiQuestionABCDUncheckedUpdateWithoutAiQuestionsInputObjectSchema)])
}).strict();
export const AiQuestionABCDUpdateToOneWithWhereWithoutAiQuestionsInputObjectSchema: z.ZodType<Prisma.AiQuestionABCDUpdateToOneWithWhereWithoutAiQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionABCDUpdateToOneWithWhereWithoutAiQuestionsInput>;
export const AiQuestionABCDUpdateToOneWithWhereWithoutAiQuestionsInputObjectZodSchema = makeSchema();
