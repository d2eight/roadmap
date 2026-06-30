import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionRangeIncludeObjectSchema as AiQuestionRangeIncludeObjectSchema } from './objects/AiQuestionRangeInclude.schema';
import { AiQuestionRangeOrderByWithRelationInputObjectSchema as AiQuestionRangeOrderByWithRelationInputObjectSchema } from './objects/AiQuestionRangeOrderByWithRelationInput.schema';
import { AiQuestionRangeWhereInputObjectSchema as AiQuestionRangeWhereInputObjectSchema } from './objects/AiQuestionRangeWhereInput.schema';
import { AiQuestionRangeWhereUniqueInputObjectSchema as AiQuestionRangeWhereUniqueInputObjectSchema } from './objects/AiQuestionRangeWhereUniqueInput.schema';
import { AiQuestionRangeScalarFieldEnumSchema } from './enums/AiQuestionRangeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AiQuestionRangeFindFirstSelectSchema: z.ZodType<Prisma.AiQuestionRangeSelect> = z.object({
    id: z.boolean().optional(),
    question: z.boolean().optional(),
    aiQuestions: z.boolean().optional(),
    aiQuestionsId: z.boolean().optional(),
    start: z.boolean().optional(),
    end: z.boolean().optional(),
    answer: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AiQuestionRangeSelect>;

export const AiQuestionRangeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    question: z.boolean().optional(),
    aiQuestions: z.boolean().optional(),
    aiQuestionsId: z.boolean().optional(),
    start: z.boolean().optional(),
    end: z.boolean().optional(),
    answer: z.boolean().optional()
  }).strict();

export const AiQuestionRangeFindFirstSchema: z.ZodType<Prisma.AiQuestionRangeFindFirstArgs> = z.object({ select: AiQuestionRangeFindFirstSelectSchema.optional(), include: z.lazy(() => AiQuestionRangeIncludeObjectSchema.optional()), orderBy: z.union([AiQuestionRangeOrderByWithRelationInputObjectSchema, AiQuestionRangeOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiQuestionRangeWhereInputObjectSchema.optional(), cursor: AiQuestionRangeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AiQuestionRangeScalarFieldEnumSchema, AiQuestionRangeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionRangeFindFirstArgs>;

export const AiQuestionRangeFindFirstZodSchema = z.object({ select: AiQuestionRangeFindFirstSelectSchema.optional(), include: z.lazy(() => AiQuestionRangeIncludeObjectSchema.optional()), orderBy: z.union([AiQuestionRangeOrderByWithRelationInputObjectSchema, AiQuestionRangeOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiQuestionRangeWhereInputObjectSchema.optional(), cursor: AiQuestionRangeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AiQuestionRangeScalarFieldEnumSchema, AiQuestionRangeScalarFieldEnumSchema.array()]).optional() }).strict();