import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
    z
        .object({
            id: SortOrderSchema.optional(),
            guideId: SortOrderSchema.optional(),
            title: SortOrderSchema.optional(),
            description: SortOrderSchema.optional(),
            status: SortOrderSchema.optional(),
            createdAt: SortOrderSchema.optional(),
            updatedAt: SortOrderSchema.optional(),
        })
        .strict();
export const GuideStepCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GuideStepCountOrderByAggregateInput> =
    makeSchema() as unknown as z.ZodType<Prisma.GuideStepCountOrderByAggregateInput>;
export const GuideStepCountOrderByAggregateInputObjectZodSchema = makeSchema();
