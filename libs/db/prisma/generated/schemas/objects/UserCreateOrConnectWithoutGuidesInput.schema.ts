import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutGuidesInputObjectSchema as UserCreateWithoutGuidesInputObjectSchema } from './UserCreateWithoutGuidesInput.schema';
import { UserUncheckedCreateWithoutGuidesInputObjectSchema as UserUncheckedCreateWithoutGuidesInputObjectSchema } from './UserUncheckedCreateWithoutGuidesInput.schema';

const makeSchema = () =>
    z
        .object({
            where: z.lazy(() => UserWhereUniqueInputObjectSchema),
            create: z.union([
                z.lazy(() => UserCreateWithoutGuidesInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutGuidesInputObjectSchema),
            ]),
        })
        .strict();
export const UserCreateOrConnectWithoutGuidesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutGuidesInput> =
    makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutGuidesInput>;
export const UserCreateOrConnectWithoutGuidesInputObjectZodSchema =
    makeSchema();
