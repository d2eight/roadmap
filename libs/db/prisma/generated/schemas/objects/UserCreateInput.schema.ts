import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { GuideCreateNestedManyWithoutUserInputObjectSchema as GuideCreateNestedManyWithoutUserInputObjectSchema } from './GuideCreateNestedManyWithoutUserInput.schema';

const makeSchema = () =>
    z
        .object({
            id: z.string(),
            name: z.string(),
            email: z.string(),
            emailVerified: z.boolean().optional(),
            image: z.string().optional().nullable(),
            createdAt: z.coerce.date().optional(),
            sessions: z
                .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
                .optional(),
            accounts: z
                .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
                .optional(),
            guides: z
                .lazy(() => GuideCreateNestedManyWithoutUserInputObjectSchema)
                .optional(),
        })
        .strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> =
    makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
