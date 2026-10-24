import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStepWhereUniqueInputObjectSchema as GuideStepWhereUniqueInputObjectSchema } from './GuideStepWhereUniqueInput.schema';
import { GuideStepUpdateWithoutGuideInputObjectSchema as GuideStepUpdateWithoutGuideInputObjectSchema } from './GuideStepUpdateWithoutGuideInput.schema';
import { GuideStepUncheckedUpdateWithoutGuideInputObjectSchema as GuideStepUncheckedUpdateWithoutGuideInputObjectSchema } from './GuideStepUncheckedUpdateWithoutGuideInput.schema';
import { GuideStepCreateWithoutGuideInputObjectSchema as GuideStepCreateWithoutGuideInputObjectSchema } from './GuideStepCreateWithoutGuideInput.schema';
import { GuideStepUncheckedCreateWithoutGuideInputObjectSchema as GuideStepUncheckedCreateWithoutGuideInputObjectSchema } from './GuideStepUncheckedCreateWithoutGuideInput.schema';

const makeSchema = () =>
    z
        .object({
            where: z.lazy(() => GuideStepWhereUniqueInputObjectSchema),
            update: z.union([
                z.lazy(() => GuideStepUpdateWithoutGuideInputObjectSchema),
                z.lazy(
                    () => GuideStepUncheckedUpdateWithoutGuideInputObjectSchema,
                ),
            ]),
            create: z.union([
                z.lazy(() => GuideStepCreateWithoutGuideInputObjectSchema),
                z.lazy(
                    () => GuideStepUncheckedCreateWithoutGuideInputObjectSchema,
                ),
            ]),
        })
        .strict();
export const GuideStepUpsertWithWhereUniqueWithoutGuideInputObjectSchema: z.ZodType<Prisma.GuideStepUpsertWithWhereUniqueWithoutGuideInput> =
    makeSchema() as unknown as z.ZodType<Prisma.GuideStepUpsertWithWhereUniqueWithoutGuideInput>;
export const GuideStepUpsertWithWhereUniqueWithoutGuideInputObjectZodSchema =
    makeSchema();
