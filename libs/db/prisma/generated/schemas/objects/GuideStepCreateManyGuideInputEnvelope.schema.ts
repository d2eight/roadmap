import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStepCreateManyGuideInputObjectSchema as GuideStepCreateManyGuideInputObjectSchema } from './GuideStepCreateManyGuideInput.schema';

const makeSchema = () =>
    z
        .object({
            data: z.union([
                z.lazy(() => GuideStepCreateManyGuideInputObjectSchema),
                z.lazy(() => GuideStepCreateManyGuideInputObjectSchema).array(),
            ]),
            skipDuplicates: z.boolean().optional(),
        })
        .strict();
export const GuideStepCreateManyGuideInputEnvelopeObjectSchema: z.ZodType<Prisma.GuideStepCreateManyGuideInputEnvelope> =
    makeSchema() as unknown as z.ZodType<Prisma.GuideStepCreateManyGuideInputEnvelope>;
export const GuideStepCreateManyGuideInputEnvelopeObjectZodSchema =
    makeSchema();
