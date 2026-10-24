import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
    z
        .object({
            _count: SortOrderSchema.optional(),
        })
        .strict();
export const GuideStepOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.GuideStepOrderByRelationAggregateInput> =
    makeSchema() as unknown as z.ZodType<Prisma.GuideStepOrderByRelationAggregateInput>;
export const GuideStepOrderByRelationAggregateInputObjectZodSchema =
    makeSchema();
