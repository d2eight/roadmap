import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionCheckboxWhereInputObjectSchema as AiQuestionCheckboxWhereInputObjectSchema } from './AiQuestionCheckboxWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AiQuestionCheckboxWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => AiQuestionCheckboxWhereInputObjectSchema).optional().nullable()
}).strict();
export const AiQuestionCheckboxNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCheckboxNullableScalarRelationFilter>;
export const AiQuestionCheckboxNullableScalarRelationFilterObjectZodSchema = makeSchema();
