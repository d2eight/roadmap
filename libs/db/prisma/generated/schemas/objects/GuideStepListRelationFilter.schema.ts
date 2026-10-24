import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStepWhereInputObjectSchema as GuideStepWhereInputObjectSchema } from './GuideStepWhereInput.schema';

const makeSchema = () =>
    z
        .object({
            every: z.lazy(() => GuideStepWhereInputObjectSchema).optional(),
            some: z.lazy(() => GuideStepWhereInputObjectSchema).optional(),
            none: z.lazy(() => GuideStepWhereInputObjectSchema).optional(),
        })
        .strict();
export const GuideStepListRelationFilterObjectSchema: z.ZodType<Prisma.GuideStepListRelationFilter> =
    makeSchema() as unknown as z.ZodType<Prisma.GuideStepListRelationFilter>;
export const GuideStepListRelationFilterObjectZodSchema = makeSchema();
