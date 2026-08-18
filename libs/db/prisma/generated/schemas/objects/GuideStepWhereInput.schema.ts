import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumGuideStepStatusFilterObjectSchema as EnumGuideStepStatusFilterObjectSchema } from './EnumGuideStepStatusFilter.schema';
import { GuideStepStatusSchema } from '../enums/GuideStepStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { GuideScalarRelationFilterObjectSchema as GuideScalarRelationFilterObjectSchema } from './GuideScalarRelationFilter.schema';
import { GuideWhereInputObjectSchema as GuideWhereInputObjectSchema } from './GuideWhereInput.schema'

const guidestepwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GuideStepWhereInputObjectSchema), z.lazy(() => GuideStepWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GuideStepWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GuideStepWhereInputObjectSchema), z.lazy(() => GuideStepWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  guideId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumGuideStepStatusFilterObjectSchema), GuideStepStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  guide: z.union([z.lazy(() => GuideScalarRelationFilterObjectSchema), z.lazy(() => GuideWhereInputObjectSchema)]).optional()
}).strict();
export const GuideStepWhereInputObjectSchema: z.ZodType<Prisma.GuideStepWhereInput> = guidestepwhereinputSchema as unknown as z.ZodType<Prisma.GuideStepWhereInput>;
export const GuideStepWhereInputObjectZodSchema = guidestepwhereinputSchema;
