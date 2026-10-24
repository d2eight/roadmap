import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GuideStepCountOrderByAggregateInputObjectSchema as GuideStepCountOrderByAggregateInputObjectSchema } from './GuideStepCountOrderByAggregateInput.schema';
import { GuideStepAvgOrderByAggregateInputObjectSchema as GuideStepAvgOrderByAggregateInputObjectSchema } from './GuideStepAvgOrderByAggregateInput.schema';
import { GuideStepMaxOrderByAggregateInputObjectSchema as GuideStepMaxOrderByAggregateInputObjectSchema } from './GuideStepMaxOrderByAggregateInput.schema';
import { GuideStepMinOrderByAggregateInputObjectSchema as GuideStepMinOrderByAggregateInputObjectSchema } from './GuideStepMinOrderByAggregateInput.schema';
import { GuideStepSumOrderByAggregateInputObjectSchema as GuideStepSumOrderByAggregateInputObjectSchema } from './GuideStepSumOrderByAggregateInput.schema';

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
            _count: z
                .lazy(() => GuideStepCountOrderByAggregateInputObjectSchema)
                .optional(),
            _avg: z
                .lazy(() => GuideStepAvgOrderByAggregateInputObjectSchema)
                .optional(),
            _max: z
                .lazy(() => GuideStepMaxOrderByAggregateInputObjectSchema)
                .optional(),
            _min: z
                .lazy(() => GuideStepMinOrderByAggregateInputObjectSchema)
                .optional(),
            _sum: z
                .lazy(() => GuideStepSumOrderByAggregateInputObjectSchema)
                .optional(),
        })
        .strict();
export const GuideStepOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GuideStepOrderByWithAggregationInput> =
    makeSchema() as unknown as z.ZodType<Prisma.GuideStepOrderByWithAggregationInput>;
export const GuideStepOrderByWithAggregationInputObjectZodSchema = makeSchema();
