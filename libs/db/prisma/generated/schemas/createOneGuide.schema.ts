import type { Prisma } from '../../../generated/prisma/browser';
import * as z from 'zod';
import { GuideSelectObjectSchema as GuideSelectObjectSchema } from './objects/GuideSelect.schema';
import { GuideIncludeObjectSchema as GuideIncludeObjectSchema } from './objects/GuideInclude.schema';
import { GuideCreateInputObjectSchema as GuideCreateInputObjectSchema } from './objects/GuideCreateInput.schema';
import { GuideUncheckedCreateInputObjectSchema as GuideUncheckedCreateInputObjectSchema } from './objects/GuideUncheckedCreateInput.schema';

export const GuideCreateOneSchema: z.ZodType<Prisma.GuideCreateArgs> = z.object({ select: GuideSelectObjectSchema.optional(), include: GuideIncludeObjectSchema.optional(), data: z.union([GuideCreateInputObjectSchema, GuideUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.GuideCreateArgs>;

export const GuideCreateOneZodSchema = z.object({ select: GuideSelectObjectSchema.optional(), include: GuideIncludeObjectSchema.optional(), data: z.union([GuideCreateInputObjectSchema, GuideUncheckedCreateInputObjectSchema]) }).strict();