import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideSelectObjectSchema as GuideSelectObjectSchema } from './objects/GuideSelect.schema';
import { GuideIncludeObjectSchema as GuideIncludeObjectSchema } from './objects/GuideInclude.schema';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './objects/GuideWhereUniqueInput.schema';
import { GuideCreateInputObjectSchema as GuideCreateInputObjectSchema } from './objects/GuideCreateInput.schema';
import { GuideUncheckedCreateInputObjectSchema as GuideUncheckedCreateInputObjectSchema } from './objects/GuideUncheckedCreateInput.schema';
import { GuideUpdateInputObjectSchema as GuideUpdateInputObjectSchema } from './objects/GuideUpdateInput.schema';
import { GuideUncheckedUpdateInputObjectSchema as GuideUncheckedUpdateInputObjectSchema } from './objects/GuideUncheckedUpdateInput.schema';

export const GuideUpsertOneSchema: z.ZodType<Prisma.GuideUpsertArgs> = z.object({ select: GuideSelectObjectSchema.optional(), include: GuideIncludeObjectSchema.optional(), where: GuideWhereUniqueInputObjectSchema, create: z.union([ GuideCreateInputObjectSchema, GuideUncheckedCreateInputObjectSchema ]), update: z.union([ GuideUpdateInputObjectSchema, GuideUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.GuideUpsertArgs>;

export const GuideUpsertOneZodSchema = z.object({ select: GuideSelectObjectSchema.optional(), include: GuideIncludeObjectSchema.optional(), where: GuideWhereUniqueInputObjectSchema, create: z.union([ GuideCreateInputObjectSchema, GuideUncheckedCreateInputObjectSchema ]), update: z.union([ GuideUpdateInputObjectSchema, GuideUncheckedUpdateInputObjectSchema ]) }).strict();