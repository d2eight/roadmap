import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './AiQuestionsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AiQuestionsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => AiQuestionsWhereInputObjectSchema).optional()
}).strict();
export const AiQuestionsScalarRelationFilterObjectSchema: z.ZodType<Prisma.AiQuestionsScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsScalarRelationFilter>;
export const AiQuestionsScalarRelationFilterObjectZodSchema = makeSchema();
