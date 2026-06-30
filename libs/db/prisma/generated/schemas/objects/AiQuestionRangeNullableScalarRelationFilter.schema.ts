import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionRangeWhereInputObjectSchema as AiQuestionRangeWhereInputObjectSchema } from './AiQuestionRangeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AiQuestionRangeWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => AiQuestionRangeWhereInputObjectSchema).optional().nullable()
}).strict();
export const AiQuestionRangeNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AiQuestionRangeNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeNullableScalarRelationFilter>;
export const AiQuestionRangeNullableScalarRelationFilterObjectZodSchema = makeSchema();
