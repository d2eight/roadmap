import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { GuideWhereInputObjectSchema as GuideWhereInputObjectSchema } from './GuideWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => GuideWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => GuideWhereInputObjectSchema).optional()
}).strict();
export const GuideScalarRelationFilterObjectSchema: z.ZodType<Prisma.GuideScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GuideScalarRelationFilter>;
export const GuideScalarRelationFilterObjectZodSchema = makeSchema();
