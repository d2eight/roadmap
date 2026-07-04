import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { EnumGuideStatusWithAggregatesFilterObjectSchema as EnumGuideStatusWithAggregatesFilterObjectSchema } from './EnumGuideStatusWithAggregatesFilter.schema';
import { GuideStatusSchema } from '../enums/GuideStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const guidescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => GuideScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GuideScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GuideScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GuideScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GuideScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  prompt: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  questions: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  answeredQuestions: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  externalAiQuestionsStatus: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  status: z.union([z.lazy(() => EnumGuideStatusWithAggregatesFilterObjectSchema), GuideStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GuideScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.GuideScalarWhereWithAggregatesInput> = guidescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.GuideScalarWhereWithAggregatesInput>;
export const GuideScalarWhereWithAggregatesInputObjectZodSchema = guidescalarwherewithaggregatesinputSchema;
