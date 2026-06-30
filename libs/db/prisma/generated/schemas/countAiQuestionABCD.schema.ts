import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionABCDOrderByWithRelationInputObjectSchema as AiQuestionABCDOrderByWithRelationInputObjectSchema } from './objects/AiQuestionABCDOrderByWithRelationInput.schema';
import { AiQuestionABCDWhereInputObjectSchema as AiQuestionABCDWhereInputObjectSchema } from './objects/AiQuestionABCDWhereInput.schema';
import { AiQuestionABCDWhereUniqueInputObjectSchema as AiQuestionABCDWhereUniqueInputObjectSchema } from './objects/AiQuestionABCDWhereUniqueInput.schema';
import { AiQuestionABCDCountAggregateInputObjectSchema as AiQuestionABCDCountAggregateInputObjectSchema } from './objects/AiQuestionABCDCountAggregateInput.schema';

export const AiQuestionABCDCountSchema: z.ZodType<Prisma.AiQuestionABCDCountArgs> = z.object({ orderBy: z.union([AiQuestionABCDOrderByWithRelationInputObjectSchema, AiQuestionABCDOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiQuestionABCDWhereInputObjectSchema.optional(), cursor: AiQuestionABCDWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AiQuestionABCDCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionABCDCountArgs>;

export const AiQuestionABCDCountZodSchema = z.object({ orderBy: z.union([AiQuestionABCDOrderByWithRelationInputObjectSchema, AiQuestionABCDOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiQuestionABCDWhereInputObjectSchema.optional(), cursor: AiQuestionABCDWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AiQuestionABCDCountAggregateInputObjectSchema ]).optional() }).strict();