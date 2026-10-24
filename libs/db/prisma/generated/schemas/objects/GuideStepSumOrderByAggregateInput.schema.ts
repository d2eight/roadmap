import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
    z
        .object({
            id: SortOrderSchema.optional(),
        })
        .strict();
export const GuideStepSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GuideStepSumOrderByAggregateInput> =
    makeSchema() as unknown as z.ZodType<Prisma.GuideStepSumOrderByAggregateInput>;
export const GuideStepSumOrderByAggregateInputObjectZodSchema = makeSchema();
