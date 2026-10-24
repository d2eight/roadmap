import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideCreateWithoutUserInputObjectSchema as GuideCreateWithoutUserInputObjectSchema } from './GuideCreateWithoutUserInput.schema';
import { GuideUncheckedCreateWithoutUserInputObjectSchema as GuideUncheckedCreateWithoutUserInputObjectSchema } from './GuideUncheckedCreateWithoutUserInput.schema';
import { GuideCreateOrConnectWithoutUserInputObjectSchema as GuideCreateOrConnectWithoutUserInputObjectSchema } from './GuideCreateOrConnectWithoutUserInput.schema';
import { GuideCreateManyUserInputEnvelopeObjectSchema as GuideCreateManyUserInputEnvelopeObjectSchema } from './GuideCreateManyUserInputEnvelope.schema';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './GuideWhereUniqueInput.schema';

const makeSchema = () =>
    z
        .object({
            create: z
                .union([
                    z.lazy(() => GuideCreateWithoutUserInputObjectSchema),
                    z
                        .lazy(() => GuideCreateWithoutUserInputObjectSchema)
                        .array(),
                    z.lazy(
                        () => GuideUncheckedCreateWithoutUserInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                GuideUncheckedCreateWithoutUserInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(
                        () => GuideCreateOrConnectWithoutUserInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                GuideCreateOrConnectWithoutUserInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(() => GuideCreateManyUserInputEnvelopeObjectSchema)
                .optional(),
            connect: z
                .union([
                    z.lazy(() => GuideWhereUniqueInputObjectSchema),
                    z.lazy(() => GuideWhereUniqueInputObjectSchema).array(),
                ])
                .optional(),
        })
        .strict();
export const GuideCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.GuideCreateNestedManyWithoutUserInput> =
    makeSchema() as unknown as z.ZodType<Prisma.GuideCreateNestedManyWithoutUserInput>;
export const GuideCreateNestedManyWithoutUserInputObjectZodSchema =
    makeSchema();
