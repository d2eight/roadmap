import type { Prisma } from '../../../generated/prisma/browser';
import * as z from 'zod';
import { GuideStepOrderByWithRelationInputObjectSchema as GuideStepOrderByWithRelationInputObjectSchema } from './objects/GuideStepOrderByWithRelationInput.schema';
import { GuideStepWhereInputObjectSchema as GuideStepWhereInputObjectSchema } from './objects/GuideStepWhereInput.schema';
import { GuideStepWhereUniqueInputObjectSchema as GuideStepWhereUniqueInputObjectSchema } from './objects/GuideStepWhereUniqueInput.schema';
import { GuideStepCountAggregateInputObjectSchema as GuideStepCountAggregateInputObjectSchema } from './objects/GuideStepCountAggregateInput.schema';

export const GuideStepCountSchema: z.ZodType<Prisma.GuideStepCountArgs> = z.object({ orderBy: z.union([GuideStepOrderByWithRelationInputObjectSchema, GuideStepOrderByWithRelationInputObjectSchema.array()]).optional(), where: GuideStepWhereInputObjectSchema.optional(), cursor: GuideStepWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GuideStepCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.GuideStepCountArgs>;

export const GuideStepCountZodSchema = z.object({ orderBy: z.union([GuideStepOrderByWithRelationInputObjectSchema, GuideStepOrderByWithRelationInputObjectSchema.array()]).optional(), where: GuideStepWhereInputObjectSchema.optional(), cursor: GuideStepWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GuideStepCountAggregateInputObjectSchema ]).optional() }).strict();