import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const guidestepscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => GuideStepScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GuideStepScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GuideStepScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GuideStepScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GuideStepScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  guideId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GuideStepScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.GuideStepScalarWhereWithAggregatesInput> = guidestepscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.GuideStepScalarWhereWithAggregatesInput>;
export const GuideStepScalarWhereWithAggregatesInputObjectZodSchema = guidestepscalarwherewithaggregatesinputSchema;
