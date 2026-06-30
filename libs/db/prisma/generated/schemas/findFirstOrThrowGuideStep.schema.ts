import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideStepIncludeObjectSchema as GuideStepIncludeObjectSchema } from './objects/GuideStepInclude.schema';
import { GuideStepOrderByWithRelationInputObjectSchema as GuideStepOrderByWithRelationInputObjectSchema } from './objects/GuideStepOrderByWithRelationInput.schema';
import { GuideStepWhereInputObjectSchema as GuideStepWhereInputObjectSchema } from './objects/GuideStepWhereInput.schema';
import { GuideStepWhereUniqueInputObjectSchema as GuideStepWhereUniqueInputObjectSchema } from './objects/GuideStepWhereUniqueInput.schema';
import { GuideStepScalarFieldEnumSchema } from './enums/GuideStepScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GuideStepFindFirstOrThrowSelectSchema: z.ZodType<Prisma.GuideStepSelect> = z.object({
    id: z.boolean().optional(),
    guide: z.boolean().optional(),
    guideId: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.GuideStepSelect>;

export const GuideStepFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    guide: z.boolean().optional(),
    guideId: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const GuideStepFindFirstOrThrowSchema: z.ZodType<Prisma.GuideStepFindFirstOrThrowArgs> = z.object({ select: GuideStepFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => GuideStepIncludeObjectSchema.optional()), orderBy: z.union([GuideStepOrderByWithRelationInputObjectSchema, GuideStepOrderByWithRelationInputObjectSchema.array()]).optional(), where: GuideStepWhereInputObjectSchema.optional(), cursor: GuideStepWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GuideStepScalarFieldEnumSchema, GuideStepScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GuideStepFindFirstOrThrowArgs>;

export const GuideStepFindFirstOrThrowZodSchema = z.object({ select: GuideStepFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => GuideStepIncludeObjectSchema.optional()), orderBy: z.union([GuideStepOrderByWithRelationInputObjectSchema, GuideStepOrderByWithRelationInputObjectSchema.array()]).optional(), where: GuideStepWhereInputObjectSchema.optional(), cursor: GuideStepWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GuideStepScalarFieldEnumSchema, GuideStepScalarFieldEnumSchema.array()]).optional() }).strict();