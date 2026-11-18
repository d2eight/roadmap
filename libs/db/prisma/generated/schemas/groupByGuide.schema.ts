import type { Prisma } from '../../../generated/prisma/browser';
import * as z from 'zod';
import { GuideWhereInputObjectSchema as GuideWhereInputObjectSchema } from './objects/GuideWhereInput.schema';
import { GuideOrderByWithAggregationInputObjectSchema as GuideOrderByWithAggregationInputObjectSchema } from './objects/GuideOrderByWithAggregationInput.schema';
import { GuideScalarWhereWithAggregatesInputObjectSchema as GuideScalarWhereWithAggregatesInputObjectSchema } from './objects/GuideScalarWhereWithAggregatesInput.schema';
import { GuideScalarFieldEnumSchema } from './enums/GuideScalarFieldEnum.schema';
import { GuideCountAggregateInputObjectSchema as GuideCountAggregateInputObjectSchema } from './objects/GuideCountAggregateInput.schema';
import { GuideMinAggregateInputObjectSchema as GuideMinAggregateInputObjectSchema } from './objects/GuideMinAggregateInput.schema';
import { GuideMaxAggregateInputObjectSchema as GuideMaxAggregateInputObjectSchema } from './objects/GuideMaxAggregateInput.schema';

export const GuideGroupBySchema: z.ZodType<Prisma.GuideGroupByArgs> = z.object({ where: GuideWhereInputObjectSchema.optional(), orderBy: z.union([GuideOrderByWithAggregationInputObjectSchema, GuideOrderByWithAggregationInputObjectSchema.array()]).optional(), having: GuideScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(GuideScalarFieldEnumSchema), _count: z.union([ z.literal(true), GuideCountAggregateInputObjectSchema ]).optional(), _min: GuideMinAggregateInputObjectSchema.optional(), _max: GuideMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GuideGroupByArgs>;

export const GuideGroupByZodSchema = z.object({ where: GuideWhereInputObjectSchema.optional(), orderBy: z.union([GuideOrderByWithAggregationInputObjectSchema, GuideOrderByWithAggregationInputObjectSchema.array()]).optional(), having: GuideScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(GuideScalarFieldEnumSchema), _count: z.union([ z.literal(true), GuideCountAggregateInputObjectSchema ]).optional(), _min: GuideMinAggregateInputObjectSchema.optional(), _max: GuideMaxAggregateInputObjectSchema.optional() }).strict();