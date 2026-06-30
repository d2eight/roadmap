import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GuideOrderByWithRelationInputObjectSchema as GuideOrderByWithRelationInputObjectSchema } from './GuideOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  guideId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  guide: z.lazy(() => GuideOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const GuideStepOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GuideStepOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepOrderByWithRelationInput>;
export const GuideStepOrderByWithRelationInputObjectZodSchema = makeSchema();
