import type { Prisma } from '../../../generated/prisma/browser';
import * as z from 'zod';
import { GuideOrderByWithRelationInputObjectSchema as GuideOrderByWithRelationInputObjectSchema } from './objects/GuideOrderByWithRelationInput.schema';
import { GuideWhereInputObjectSchema as GuideWhereInputObjectSchema } from './objects/GuideWhereInput.schema';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './objects/GuideWhereUniqueInput.schema';
import { GuideCountAggregateInputObjectSchema as GuideCountAggregateInputObjectSchema } from './objects/GuideCountAggregateInput.schema';
import { GuideMinAggregateInputObjectSchema as GuideMinAggregateInputObjectSchema } from './objects/GuideMinAggregateInput.schema';
import { GuideMaxAggregateInputObjectSchema as GuideMaxAggregateInputObjectSchema } from './objects/GuideMaxAggregateInput.schema';

export const GuideAggregateSchema: z.ZodType<Prisma.GuideAggregateArgs> = z.object({ orderBy: z.union([GuideOrderByWithRelationInputObjectSchema, GuideOrderByWithRelationInputObjectSchema.array()]).optional(), where: GuideWhereInputObjectSchema.optional(), cursor: GuideWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), GuideCountAggregateInputObjectSchema ]).optional(), _min: GuideMinAggregateInputObjectSchema.optional(), _max: GuideMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GuideAggregateArgs>;

export const GuideAggregateZodSchema = z.object({ orderBy: z.union([GuideOrderByWithRelationInputObjectSchema, GuideOrderByWithRelationInputObjectSchema.array()]).optional(), where: GuideWhereInputObjectSchema.optional(), cursor: GuideWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), GuideCountAggregateInputObjectSchema ]).optional(), _min: GuideMinAggregateInputObjectSchema.optional(), _max: GuideMaxAggregateInputObjectSchema.optional() }).strict();