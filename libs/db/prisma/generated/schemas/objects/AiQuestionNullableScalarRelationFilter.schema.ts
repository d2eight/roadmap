import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionWhereInputObjectSchema as AiQuestionWhereInputObjectSchema } from './AiQuestionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AiQuestionWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => AiQuestionWhereInputObjectSchema).optional().nullable()
}).strict();
export const AiQuestionNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AiQuestionNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionNullableScalarRelationFilter>;
export const AiQuestionNullableScalarRelationFilterObjectZodSchema = makeSchema();
