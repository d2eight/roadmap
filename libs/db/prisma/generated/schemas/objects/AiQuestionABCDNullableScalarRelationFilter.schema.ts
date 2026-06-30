import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionABCDWhereInputObjectSchema as AiQuestionABCDWhereInputObjectSchema } from './AiQuestionABCDWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AiQuestionABCDWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => AiQuestionABCDWhereInputObjectSchema).optional().nullable()
}).strict();
export const AiQuestionABCDNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AiQuestionABCDNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionABCDNullableScalarRelationFilter>;
export const AiQuestionABCDNullableScalarRelationFilterObjectZodSchema = makeSchema();
