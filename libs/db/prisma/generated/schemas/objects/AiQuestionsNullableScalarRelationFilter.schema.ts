import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './AiQuestionsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AiQuestionsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => AiQuestionsWhereInputObjectSchema).optional().nullable()
}).strict();
export const AiQuestionsNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AiQuestionsNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsNullableScalarRelationFilter>;
export const AiQuestionsNullableScalarRelationFilterObjectZodSchema = makeSchema();
