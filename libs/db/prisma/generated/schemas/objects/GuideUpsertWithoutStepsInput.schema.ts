import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideUpdateWithoutStepsInputObjectSchema as GuideUpdateWithoutStepsInputObjectSchema } from './GuideUpdateWithoutStepsInput.schema';
import { GuideUncheckedUpdateWithoutStepsInputObjectSchema as GuideUncheckedUpdateWithoutStepsInputObjectSchema } from './GuideUncheckedUpdateWithoutStepsInput.schema';
import { GuideCreateWithoutStepsInputObjectSchema as GuideCreateWithoutStepsInputObjectSchema } from './GuideCreateWithoutStepsInput.schema';
import { GuideUncheckedCreateWithoutStepsInputObjectSchema as GuideUncheckedCreateWithoutStepsInputObjectSchema } from './GuideUncheckedCreateWithoutStepsInput.schema';
import { GuideWhereInputObjectSchema as GuideWhereInputObjectSchema } from './GuideWhereInput.schema';

const makeSchema = () =>
    z
        .object({
            update: z.union([
                z.lazy(() => GuideUpdateWithoutStepsInputObjectSchema),
                z.lazy(() => GuideUncheckedUpdateWithoutStepsInputObjectSchema),
            ]),
            create: z.union([
                z.lazy(() => GuideCreateWithoutStepsInputObjectSchema),
                z.lazy(() => GuideUncheckedCreateWithoutStepsInputObjectSchema),
            ]),
            where: z.lazy(() => GuideWhereInputObjectSchema).optional(),
        })
        .strict();
export const GuideUpsertWithoutStepsInputObjectSchema: z.ZodType<Prisma.GuideUpsertWithoutStepsInput> =
    makeSchema() as unknown as z.ZodType<Prisma.GuideUpsertWithoutStepsInput>;
export const GuideUpsertWithoutStepsInputObjectZodSchema = makeSchema();
