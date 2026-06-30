import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionCheckboxIncludeObjectSchema as AiQuestionCheckboxIncludeObjectSchema } from './objects/AiQuestionCheckboxInclude.schema';
import { AiQuestionCheckboxOrderByWithRelationInputObjectSchema as AiQuestionCheckboxOrderByWithRelationInputObjectSchema } from './objects/AiQuestionCheckboxOrderByWithRelationInput.schema';
import { AiQuestionCheckboxWhereInputObjectSchema as AiQuestionCheckboxWhereInputObjectSchema } from './objects/AiQuestionCheckboxWhereInput.schema';
import { AiQuestionCheckboxWhereUniqueInputObjectSchema as AiQuestionCheckboxWhereUniqueInputObjectSchema } from './objects/AiQuestionCheckboxWhereUniqueInput.schema';
import { AiQuestionCheckboxScalarFieldEnumSchema } from './enums/AiQuestionCheckboxScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AiQuestionCheckboxFindManySelectSchema: z.ZodType<Prisma.AiQuestionCheckboxSelect> = z.object({
    id: z.boolean().optional(),
    question: z.boolean().optional(),
    aiQuestions: z.boolean().optional(),
    aiQuestionsId: z.boolean().optional(),
    A: z.boolean().optional(),
    B: z.boolean().optional(),
    C: z.boolean().optional(),
    D: z.boolean().optional(),
    E: z.boolean().optional(),
    F: z.boolean().optional(),
    answer: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AiQuestionCheckboxSelect>;

export const AiQuestionCheckboxFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    question: z.boolean().optional(),
    aiQuestions: z.boolean().optional(),
    aiQuestionsId: z.boolean().optional(),
    A: z.boolean().optional(),
    B: z.boolean().optional(),
    C: z.boolean().optional(),
    D: z.boolean().optional(),
    E: z.boolean().optional(),
    F: z.boolean().optional(),
    answer: z.boolean().optional()
  }).strict();

export const AiQuestionCheckboxFindManySchema: z.ZodType<Prisma.AiQuestionCheckboxFindManyArgs> = z.object({ select: AiQuestionCheckboxFindManySelectSchema.optional(), include: z.lazy(() => AiQuestionCheckboxIncludeObjectSchema.optional()), orderBy: z.union([AiQuestionCheckboxOrderByWithRelationInputObjectSchema, AiQuestionCheckboxOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiQuestionCheckboxWhereInputObjectSchema.optional(), cursor: AiQuestionCheckboxWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AiQuestionCheckboxScalarFieldEnumSchema, AiQuestionCheckboxScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionCheckboxFindManyArgs>;

export const AiQuestionCheckboxFindManyZodSchema = z.object({ select: AiQuestionCheckboxFindManySelectSchema.optional(), include: z.lazy(() => AiQuestionCheckboxIncludeObjectSchema.optional()), orderBy: z.union([AiQuestionCheckboxOrderByWithRelationInputObjectSchema, AiQuestionCheckboxOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiQuestionCheckboxWhereInputObjectSchema.optional(), cursor: AiQuestionCheckboxWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AiQuestionCheckboxScalarFieldEnumSchema, AiQuestionCheckboxScalarFieldEnumSchema.array()]).optional() }).strict();