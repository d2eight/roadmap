import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionABCDIncludeObjectSchema as AiQuestionABCDIncludeObjectSchema } from './objects/AiQuestionABCDInclude.schema';
import { AiQuestionABCDOrderByWithRelationInputObjectSchema as AiQuestionABCDOrderByWithRelationInputObjectSchema } from './objects/AiQuestionABCDOrderByWithRelationInput.schema';
import { AiQuestionABCDWhereInputObjectSchema as AiQuestionABCDWhereInputObjectSchema } from './objects/AiQuestionABCDWhereInput.schema';
import { AiQuestionABCDWhereUniqueInputObjectSchema as AiQuestionABCDWhereUniqueInputObjectSchema } from './objects/AiQuestionABCDWhereUniqueInput.schema';
import { AiQuestionABCDScalarFieldEnumSchema } from './enums/AiQuestionABCDScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AiQuestionABCDFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AiQuestionABCDSelect> = z.object({
    id: z.boolean().optional(),
    question: z.boolean().optional(),
    aiQuestions: z.boolean().optional(),
    aiQuestionsId: z.boolean().optional(),
    A: z.boolean().optional(),
    B: z.boolean().optional(),
    C: z.boolean().optional(),
    D: z.boolean().optional(),
    answer: z.boolean().optional(),
    customAnswer: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AiQuestionABCDSelect>;

export const AiQuestionABCDFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    question: z.boolean().optional(),
    aiQuestions: z.boolean().optional(),
    aiQuestionsId: z.boolean().optional(),
    A: z.boolean().optional(),
    B: z.boolean().optional(),
    C: z.boolean().optional(),
    D: z.boolean().optional(),
    answer: z.boolean().optional(),
    customAnswer: z.boolean().optional()
  }).strict();

export const AiQuestionABCDFindFirstOrThrowSchema: z.ZodType<Prisma.AiQuestionABCDFindFirstOrThrowArgs> = z.object({ select: AiQuestionABCDFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AiQuestionABCDIncludeObjectSchema.optional()), orderBy: z.union([AiQuestionABCDOrderByWithRelationInputObjectSchema, AiQuestionABCDOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiQuestionABCDWhereInputObjectSchema.optional(), cursor: AiQuestionABCDWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AiQuestionABCDScalarFieldEnumSchema, AiQuestionABCDScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionABCDFindFirstOrThrowArgs>;

export const AiQuestionABCDFindFirstOrThrowZodSchema = z.object({ select: AiQuestionABCDFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AiQuestionABCDIncludeObjectSchema.optional()), orderBy: z.union([AiQuestionABCDOrderByWithRelationInputObjectSchema, AiQuestionABCDOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiQuestionABCDWhereInputObjectSchema.optional(), cursor: AiQuestionABCDWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AiQuestionABCDScalarFieldEnumSchema, AiQuestionABCDScalarFieldEnumSchema.array()]).optional() }).strict();