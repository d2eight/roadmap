import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideWhereInputObjectSchema as GuideWhereInputObjectSchema } from './GuideWhereInput.schema';

const makeSchema = () =>
    z
        .object({
            every: z.lazy(() => GuideWhereInputObjectSchema).optional(),
            some: z.lazy(() => GuideWhereInputObjectSchema).optional(),
            none: z.lazy(() => GuideWhereInputObjectSchema).optional(),
        })
        .strict();
export const GuideListRelationFilterObjectSchema: z.ZodType<Prisma.GuideListRelationFilter> =
    makeSchema() as unknown as z.ZodType<Prisma.GuideListRelationFilter>;
export const GuideListRelationFilterObjectZodSchema = makeSchema();
