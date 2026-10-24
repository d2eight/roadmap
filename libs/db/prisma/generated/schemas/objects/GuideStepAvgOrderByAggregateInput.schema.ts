import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
    z
        .object({
            id: SortOrderSchema.optional(),
        })
        .strict();
export const GuideStepAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GuideStepAvgOrderByAggregateInput> =
    makeSchema() as unknown as z.ZodType<Prisma.GuideStepAvgOrderByAggregateInput>;
export const GuideStepAvgOrderByAggregateInputObjectZodSchema = makeSchema();
