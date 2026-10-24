import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideCreateManyUserInputObjectSchema as GuideCreateManyUserInputObjectSchema } from './GuideCreateManyUserInput.schema';

const makeSchema = () =>
    z
        .object({
            data: z.union([
                z.lazy(() => GuideCreateManyUserInputObjectSchema),
                z.lazy(() => GuideCreateManyUserInputObjectSchema).array(),
            ]),
            skipDuplicates: z.boolean().optional(),
        })
        .strict();
export const GuideCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.GuideCreateManyUserInputEnvelope> =
    makeSchema() as unknown as z.ZodType<Prisma.GuideCreateManyUserInputEnvelope>;
export const GuideCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
