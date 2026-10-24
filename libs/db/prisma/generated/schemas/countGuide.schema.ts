import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideOrderByWithRelationInputObjectSchema as GuideOrderByWithRelationInputObjectSchema } from './objects/GuideOrderByWithRelationInput.schema';
import { GuideWhereInputObjectSchema as GuideWhereInputObjectSchema } from './objects/GuideWhereInput.schema';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './objects/GuideWhereUniqueInput.schema';
import { GuideCountAggregateInputObjectSchema as GuideCountAggregateInputObjectSchema } from './objects/GuideCountAggregateInput.schema';

export const GuideCountSchema: z.ZodType<Prisma.GuideCountArgs> = z
    .object({
        orderBy: z
            .union([
                GuideOrderByWithRelationInputObjectSchema,
                GuideOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        where: GuideWhereInputObjectSchema.optional(),
        cursor: GuideWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        select: z
            .union([z.literal(true), GuideCountAggregateInputObjectSchema])
            .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.GuideCountArgs>;

export const GuideCountZodSchema = z
    .object({
        orderBy: z
            .union([
                GuideOrderByWithRelationInputObjectSchema,
                GuideOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        where: GuideWhereInputObjectSchema.optional(),
        cursor: GuideWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        select: z
            .union([z.literal(true), GuideCountAggregateInputObjectSchema])
            .optional(),
    })
    .strict();
