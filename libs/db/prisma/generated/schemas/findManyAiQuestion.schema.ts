import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionIncludeObjectSchema as AiQuestionIncludeObjectSchema } from './objects/AiQuestionInclude.schema';
import { AiQuestionOrderByWithRelationInputObjectSchema as AiQuestionOrderByWithRelationInputObjectSchema } from './objects/AiQuestionOrderByWithRelationInput.schema';
import { AiQuestionWhereInputObjectSchema as AiQuestionWhereInputObjectSchema } from './objects/AiQuestionWhereInput.schema';
import { AiQuestionWhereUniqueInputObjectSchema as AiQuestionWhereUniqueInputObjectSchema } from './objects/AiQuestionWhereUniqueInput.schema';
import { AiQuestionScalarFieldEnumSchema } from './enums/AiQuestionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AiQuestionFindManySelectSchema: z.ZodType<Prisma.AiQuestionSelect> = z.object({
    id: z.boolean().optional(),
    question: z.boolean().optional(),
    aiQuestions: z.boolean().optional(),
    aiQuestionsId: z.boolean().optional(),
    answer: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AiQuestionSelect>;

export const AiQuestionFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    question: z.boolean().optional(),
    aiQuestions: z.boolean().optional(),
    aiQuestionsId: z.boolean().optional(),
    answer: z.boolean().optional()
  }).strict();

export const AiQuestionFindManySchema: z.ZodType<Prisma.AiQuestionFindManyArgs> = z.object({ select: AiQuestionFindManySelectSchema.optional(), include: z.lazy(() => AiQuestionIncludeObjectSchema.optional()), orderBy: z.union([AiQuestionOrderByWithRelationInputObjectSchema, AiQuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiQuestionWhereInputObjectSchema.optional(), cursor: AiQuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AiQuestionScalarFieldEnumSchema, AiQuestionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionFindManyArgs>;

export const AiQuestionFindManyZodSchema = z.object({ select: AiQuestionFindManySelectSchema.optional(), include: z.lazy(() => AiQuestionIncludeObjectSchema.optional()), orderBy: z.union([AiQuestionOrderByWithRelationInputObjectSchema, AiQuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiQuestionWhereInputObjectSchema.optional(), cursor: AiQuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AiQuestionScalarFieldEnumSchema, AiQuestionScalarFieldEnumSchema.array()]).optional() }).strict();