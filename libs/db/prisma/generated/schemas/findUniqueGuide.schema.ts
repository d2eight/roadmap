import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideSelectObjectSchema as GuideSelectObjectSchema } from './objects/GuideSelect.schema';
import { GuideIncludeObjectSchema as GuideIncludeObjectSchema } from './objects/GuideInclude.schema';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './objects/GuideWhereUniqueInput.schema';

export const GuideFindUniqueSchema: z.ZodType<Prisma.GuideFindUniqueArgs> = z.object({ select: GuideSelectObjectSchema.optional(), include: GuideIncludeObjectSchema.optional(), where: GuideWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GuideFindUniqueArgs>;

export const GuideFindUniqueZodSchema = z.object({ select: GuideSelectObjectSchema.optional(), include: GuideIncludeObjectSchema.optional(), where: GuideWhereUniqueInputObjectSchema }).strict();