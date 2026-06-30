import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideIncludeObjectSchema as GuideIncludeObjectSchema } from './objects/GuideInclude.schema';
import { GuideOrderByWithRelationInputObjectSchema as GuideOrderByWithRelationInputObjectSchema } from './objects/GuideOrderByWithRelationInput.schema';
import { GuideWhereInputObjectSchema as GuideWhereInputObjectSchema } from './objects/GuideWhereInput.schema';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './objects/GuideWhereUniqueInput.schema';
import { GuideScalarFieldEnumSchema } from './enums/GuideScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GuideFindFirstOrThrowSelectSchema: z.ZodType<Prisma.GuideSelect> = z.object({
    id: z.boolean().optional(),
    prompt: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    steps: z.boolean().optional(),
    questions: z.boolean().optional(),
    externalAiQuestionsStatus: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.GuideSelect>;

export const GuideFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    prompt: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    steps: z.boolean().optional(),
    questions: z.boolean().optional(),
    externalAiQuestionsStatus: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const GuideFindFirstOrThrowSchema: z.ZodType<Prisma.GuideFindFirstOrThrowArgs> = z.object({ select: GuideFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => GuideIncludeObjectSchema.optional()), orderBy: z.union([GuideOrderByWithRelationInputObjectSchema, GuideOrderByWithRelationInputObjectSchema.array()]).optional(), where: GuideWhereInputObjectSchema.optional(), cursor: GuideWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GuideScalarFieldEnumSchema, GuideScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GuideFindFirstOrThrowArgs>;

export const GuideFindFirstOrThrowZodSchema = z.object({ select: GuideFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => GuideIncludeObjectSchema.optional()), orderBy: z.union([GuideOrderByWithRelationInputObjectSchema, GuideOrderByWithRelationInputObjectSchema.array()]).optional(), where: GuideWhereInputObjectSchema.optional(), cursor: GuideWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GuideScalarFieldEnumSchema, GuideScalarFieldEnumSchema.array()]).optional() }).strict();