import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';

const makeSchema = () =>
    z
        .object({
            id: z.literal(true).optional(),
        })
        .strict();
export const GuideStepAvgAggregateInputObjectSchema: z.ZodType<Prisma.GuideStepAvgAggregateInputType> =
    makeSchema() as unknown as z.ZodType<Prisma.GuideStepAvgAggregateInputType>;
export const GuideStepAvgAggregateInputObjectZodSchema = makeSchema();
