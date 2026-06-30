import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const aiquestionsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AiQuestionsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AiQuestionsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AiQuestionsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AiQuestionsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AiQuestionsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  guideId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const AiQuestionsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AiQuestionsScalarWhereWithAggregatesInput> = aiquestionsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AiQuestionsScalarWhereWithAggregatesInput>;
export const AiQuestionsScalarWhereWithAggregatesInputObjectZodSchema = aiquestionsscalarwherewithaggregatesinputSchema;
