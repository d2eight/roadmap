import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionsIncludeObjectSchema as AiQuestionsIncludeObjectSchema } from './objects/AiQuestionsInclude.schema';
import { AiQuestionsOrderByWithRelationInputObjectSchema as AiQuestionsOrderByWithRelationInputObjectSchema } from './objects/AiQuestionsOrderByWithRelationInput.schema';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './objects/AiQuestionsWhereInput.schema';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './objects/AiQuestionsWhereUniqueInput.schema';
import { AiQuestionsScalarFieldEnumSchema } from './enums/AiQuestionsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AiQuestionsFindFirstSelectSchema: z.ZodType<Prisma.AiQuestionsSelect> = z.object({
    id: z.boolean().optional(),
    guide: z.boolean().optional(),
    guideId: z.boolean().optional(),
    AiQuestionABCD: z.boolean().optional(),
    AiQuestionRange: z.boolean().optional(),
    AiQuestion: z.boolean().optional(),
    AiQuestionCheckbox: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AiQuestionsSelect>;

export const AiQuestionsFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    guide: z.boolean().optional(),
    guideId: z.boolean().optional(),
    AiQuestionABCD: z.boolean().optional(),
    AiQuestionRange: z.boolean().optional(),
    AiQuestion: z.boolean().optional(),
    AiQuestionCheckbox: z.boolean().optional()
  }).strict();

export const AiQuestionsFindFirstSchema: z.ZodType<Prisma.AiQuestionsFindFirstArgs> = z.object({ select: AiQuestionsFindFirstSelectSchema.optional(), include: z.lazy(() => AiQuestionsIncludeObjectSchema.optional()), orderBy: z.union([AiQuestionsOrderByWithRelationInputObjectSchema, AiQuestionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiQuestionsWhereInputObjectSchema.optional(), cursor: AiQuestionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AiQuestionsScalarFieldEnumSchema, AiQuestionsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionsFindFirstArgs>;

export const AiQuestionsFindFirstZodSchema = z.object({ select: AiQuestionsFindFirstSelectSchema.optional(), include: z.lazy(() => AiQuestionsIncludeObjectSchema.optional()), orderBy: z.union([AiQuestionsOrderByWithRelationInputObjectSchema, AiQuestionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiQuestionsWhereInputObjectSchema.optional(), cursor: AiQuestionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AiQuestionsScalarFieldEnumSchema, AiQuestionsScalarFieldEnumSchema.array()]).optional() }).strict();