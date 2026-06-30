import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { AiQuestionsScalarRelationFilterObjectSchema as AiQuestionsScalarRelationFilterObjectSchema } from './AiQuestionsScalarRelationFilter.schema';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './AiQuestionsWhereInput.schema'

const aiquestionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AiQuestionWhereInputObjectSchema), z.lazy(() => AiQuestionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AiQuestionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AiQuestionWhereInputObjectSchema), z.lazy(() => AiQuestionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  question: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  aiQuestionsId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  answer: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  aiQuestions: z.union([z.lazy(() => AiQuestionsScalarRelationFilterObjectSchema), z.lazy(() => AiQuestionsWhereInputObjectSchema)]).optional()
}).strict();
export const AiQuestionWhereInputObjectSchema: z.ZodType<Prisma.AiQuestionWhereInput> = aiquestionwhereinputSchema as unknown as z.ZodType<Prisma.AiQuestionWhereInput>;
export const AiQuestionWhereInputObjectZodSchema = aiquestionwhereinputSchema;
