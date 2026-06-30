import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { AiQuestionsScalarRelationFilterObjectSchema as AiQuestionsScalarRelationFilterObjectSchema } from './AiQuestionsScalarRelationFilter.schema';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './AiQuestionsWhereInput.schema'

const aiquestionrangewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AiQuestionRangeWhereInputObjectSchema), z.lazy(() => AiQuestionRangeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AiQuestionRangeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AiQuestionRangeWhereInputObjectSchema), z.lazy(() => AiQuestionRangeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  question: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  aiQuestionsId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  start: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  end: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  answer: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  aiQuestions: z.union([z.lazy(() => AiQuestionsScalarRelationFilterObjectSchema), z.lazy(() => AiQuestionsWhereInputObjectSchema)]).optional()
}).strict();
export const AiQuestionRangeWhereInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeWhereInput> = aiquestionrangewhereinputSchema as unknown as z.ZodType<Prisma.AiQuestionRangeWhereInput>;
export const AiQuestionRangeWhereInputObjectZodSchema = aiquestionrangewhereinputSchema;
