import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionOrderByWithRelationInputObjectSchema as AiQuestionOrderByWithRelationInputObjectSchema } from './objects/AiQuestionOrderByWithRelationInput.schema';
import { AiQuestionWhereInputObjectSchema as AiQuestionWhereInputObjectSchema } from './objects/AiQuestionWhereInput.schema';
import { AiQuestionWhereUniqueInputObjectSchema as AiQuestionWhereUniqueInputObjectSchema } from './objects/AiQuestionWhereUniqueInput.schema';
import { AiQuestionCountAggregateInputObjectSchema as AiQuestionCountAggregateInputObjectSchema } from './objects/AiQuestionCountAggregateInput.schema';

export const AiQuestionCountSchema: z.ZodType<Prisma.AiQuestionCountArgs> = z.object({ orderBy: z.union([AiQuestionOrderByWithRelationInputObjectSchema, AiQuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiQuestionWhereInputObjectSchema.optional(), cursor: AiQuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AiQuestionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionCountArgs>;

export const AiQuestionCountZodSchema = z.object({ orderBy: z.union([AiQuestionOrderByWithRelationInputObjectSchema, AiQuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiQuestionWhereInputObjectSchema.optional(), cursor: AiQuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AiQuestionCountAggregateInputObjectSchema ]).optional() }).strict();