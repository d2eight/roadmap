import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumGuideStepStatusFilterObjectSchema as EnumGuideStepStatusFilterObjectSchema } from './EnumGuideStepStatusFilter.schema';
import { GuideStepStatusSchema } from '../enums/GuideStepStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const guidestepscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GuideStepScalarWhereInputObjectSchema), z.lazy(() => GuideStepScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GuideStepScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GuideStepScalarWhereInputObjectSchema), z.lazy(() => GuideStepScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  guideId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumGuideStepStatusFilterObjectSchema), GuideStepStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GuideStepScalarWhereInputObjectSchema: z.ZodType<Prisma.GuideStepScalarWhereInput> = guidestepscalarwhereinputSchema as unknown as z.ZodType<Prisma.GuideStepScalarWhereInput>;
export const GuideStepScalarWhereInputObjectZodSchema = guidestepscalarwhereinputSchema;
