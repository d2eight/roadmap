import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideWhereInputObjectSchema as GuideWhereInputObjectSchema } from './GuideWhereInput.schema';
import { GuideUpdateWithoutStepsInputObjectSchema as GuideUpdateWithoutStepsInputObjectSchema } from './GuideUpdateWithoutStepsInput.schema';
import { GuideUncheckedUpdateWithoutStepsInputObjectSchema as GuideUncheckedUpdateWithoutStepsInputObjectSchema } from './GuideUncheckedUpdateWithoutStepsInput.schema';

const makeSchema = () =>
    z
        .object({
            where: z.lazy(() => GuideWhereInputObjectSchema).optional(),
            data: z.union([
                z.lazy(() => GuideUpdateWithoutStepsInputObjectSchema),
                z.lazy(() => GuideUncheckedUpdateWithoutStepsInputObjectSchema),
            ]),
        })
        .strict();
export const GuideUpdateToOneWithWhereWithoutStepsInputObjectSchema: z.ZodType<Prisma.GuideUpdateToOneWithWhereWithoutStepsInput> =
    makeSchema() as unknown as z.ZodType<Prisma.GuideUpdateToOneWithWhereWithoutStepsInput>;
export const GuideUpdateToOneWithWhereWithoutStepsInputObjectZodSchema =
    makeSchema();
