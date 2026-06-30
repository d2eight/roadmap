import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionsOrderByWithRelationInputObjectSchema as AiQuestionsOrderByWithRelationInputObjectSchema } from './objects/AiQuestionsOrderByWithRelationInput.schema';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './objects/AiQuestionsWhereInput.schema';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './objects/AiQuestionsWhereUniqueInput.schema';
import { AiQuestionsCountAggregateInputObjectSchema as AiQuestionsCountAggregateInputObjectSchema } from './objects/AiQuestionsCountAggregateInput.schema';

export const AiQuestionsCountSchema: z.ZodType<Prisma.AiQuestionsCountArgs> = z.object({ orderBy: z.union([AiQuestionsOrderByWithRelationInputObjectSchema, AiQuestionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiQuestionsWhereInputObjectSchema.optional(), cursor: AiQuestionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AiQuestionsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionsCountArgs>;

export const AiQuestionsCountZodSchema = z.object({ orderBy: z.union([AiQuestionsOrderByWithRelationInputObjectSchema, AiQuestionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiQuestionsWhereInputObjectSchema.optional(), cursor: AiQuestionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AiQuestionsCountAggregateInputObjectSchema ]).optional() }).strict();