import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideSelectObjectSchema as GuideSelectObjectSchema } from './objects/GuideSelect.schema';
import { GuideUpdateManyMutationInputObjectSchema as GuideUpdateManyMutationInputObjectSchema } from './objects/GuideUpdateManyMutationInput.schema';
import { GuideWhereInputObjectSchema as GuideWhereInputObjectSchema } from './objects/GuideWhereInput.schema';

export const GuideUpdateManyAndReturnSchema: z.ZodType<Prisma.GuideUpdateManyAndReturnArgs> = z.object({ select: GuideSelectObjectSchema.optional(), data: GuideUpdateManyMutationInputObjectSchema, where: GuideWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GuideUpdateManyAndReturnArgs>;

export const GuideUpdateManyAndReturnZodSchema = z.object({ select: GuideSelectObjectSchema.optional(), data: GuideUpdateManyMutationInputObjectSchema, where: GuideWhereInputObjectSchema.optional() }).strict();