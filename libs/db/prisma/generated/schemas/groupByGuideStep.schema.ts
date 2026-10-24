import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideStepWhereInputObjectSchema as GuideStepWhereInputObjectSchema } from './objects/GuideStepWhereInput.schema';
import { GuideStepOrderByWithAggregationInputObjectSchema as GuideStepOrderByWithAggregationInputObjectSchema } from './objects/GuideStepOrderByWithAggregationInput.schema';
import { GuideStepScalarWhereWithAggregatesInputObjectSchema as GuideStepScalarWhereWithAggregatesInputObjectSchema } from './objects/GuideStepScalarWhereWithAggregatesInput.schema';
import { GuideStepScalarFieldEnumSchema } from './enums/GuideStepScalarFieldEnum.schema';
import { GuideStepCountAggregateInputObjectSchema as GuideStepCountAggregateInputObjectSchema } from './objects/GuideStepCountAggregateInput.schema';
import { GuideStepMinAggregateInputObjectSchema as GuideStepMinAggregateInputObjectSchema } from './objects/GuideStepMinAggregateInput.schema';
import { GuideStepMaxAggregateInputObjectSchema as GuideStepMaxAggregateInputObjectSchema } from './objects/GuideStepMaxAggregateInput.schema';
import { GuideStepAvgAggregateInputObjectSchema as GuideStepAvgAggregateInputObjectSchema } from './objects/GuideStepAvgAggregateInput.schema';
import { GuideStepSumAggregateInputObjectSchema as GuideStepSumAggregateInputObjectSchema } from './objects/GuideStepSumAggregateInput.schema';

export const GuideStepGroupBySchema: z.ZodType<Prisma.GuideStepGroupByArgs> = z
    .object({
        where: GuideStepWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                GuideStepOrderByWithAggregationInputObjectSchema,
                GuideStepOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: GuideStepScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(GuideStepScalarFieldEnumSchema),
        _count: z
            .union([z.literal(true), GuideStepCountAggregateInputObjectSchema])
            .optional(),
        _min: GuideStepMinAggregateInputObjectSchema.optional(),
        _max: GuideStepMaxAggregateInputObjectSchema.optional(),
        _avg: GuideStepAvgAggregateInputObjectSchema.optional(),
        _sum: GuideStepSumAggregateInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.GuideStepGroupByArgs>;

export const GuideStepGroupByZodSchema = z
    .object({
        where: GuideStepWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                GuideStepOrderByWithAggregationInputObjectSchema,
                GuideStepOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: GuideStepScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(GuideStepScalarFieldEnumSchema),
        _count: z
            .union([z.literal(true), GuideStepCountAggregateInputObjectSchema])
            .optional(),
        _min: GuideStepMinAggregateInputObjectSchema.optional(),
        _max: GuideStepMaxAggregateInputObjectSchema.optional(),
        _avg: GuideStepAvgAggregateInputObjectSchema.optional(),
        _sum: GuideStepSumAggregateInputObjectSchema.optional(),
    })
    .strict();
