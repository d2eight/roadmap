import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideStepOrderByWithRelationInputObjectSchema as GuideStepOrderByWithRelationInputObjectSchema } from './objects/GuideStepOrderByWithRelationInput.schema';
import { GuideStepWhereInputObjectSchema as GuideStepWhereInputObjectSchema } from './objects/GuideStepWhereInput.schema';
import { GuideStepWhereUniqueInputObjectSchema as GuideStepWhereUniqueInputObjectSchema } from './objects/GuideStepWhereUniqueInput.schema';
import { GuideStepCountAggregateInputObjectSchema as GuideStepCountAggregateInputObjectSchema } from './objects/GuideStepCountAggregateInput.schema';
import { GuideStepMinAggregateInputObjectSchema as GuideStepMinAggregateInputObjectSchema } from './objects/GuideStepMinAggregateInput.schema';
import { GuideStepMaxAggregateInputObjectSchema as GuideStepMaxAggregateInputObjectSchema } from './objects/GuideStepMaxAggregateInput.schema';
import { GuideStepAvgAggregateInputObjectSchema as GuideStepAvgAggregateInputObjectSchema } from './objects/GuideStepAvgAggregateInput.schema';
import { GuideStepSumAggregateInputObjectSchema as GuideStepSumAggregateInputObjectSchema } from './objects/GuideStepSumAggregateInput.schema';

export const GuideStepAggregateSchema: z.ZodType<Prisma.GuideStepAggregateArgs> =
    z
        .object({
            orderBy: z
                .union([
                    GuideStepOrderByWithRelationInputObjectSchema,
                    GuideStepOrderByWithRelationInputObjectSchema.array(),
                ])
                .optional(),
            where: GuideStepWhereInputObjectSchema.optional(),
            cursor: GuideStepWhereUniqueInputObjectSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            _count: z
                .union([
                    z.literal(true),
                    GuideStepCountAggregateInputObjectSchema,
                ])
                .optional(),
            _min: GuideStepMinAggregateInputObjectSchema.optional(),
            _max: GuideStepMaxAggregateInputObjectSchema.optional(),
            _avg: GuideStepAvgAggregateInputObjectSchema.optional(),
            _sum: GuideStepSumAggregateInputObjectSchema.optional(),
        })
        .strict() as unknown as z.ZodType<Prisma.GuideStepAggregateArgs>;

export const GuideStepAggregateZodSchema = z
    .object({
        orderBy: z
            .union([
                GuideStepOrderByWithRelationInputObjectSchema,
                GuideStepOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        where: GuideStepWhereInputObjectSchema.optional(),
        cursor: GuideStepWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z
            .union([z.literal(true), GuideStepCountAggregateInputObjectSchema])
            .optional(),
        _min: GuideStepMinAggregateInputObjectSchema.optional(),
        _max: GuideStepMaxAggregateInputObjectSchema.optional(),
        _avg: GuideStepAvgAggregateInputObjectSchema.optional(),
        _sum: GuideStepSumAggregateInputObjectSchema.optional(),
    })
    .strict();
