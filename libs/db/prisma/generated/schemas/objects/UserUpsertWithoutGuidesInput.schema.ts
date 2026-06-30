import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserUpdateWithoutGuidesInputObjectSchema as UserUpdateWithoutGuidesInputObjectSchema } from './UserUpdateWithoutGuidesInput.schema';
import { UserUncheckedUpdateWithoutGuidesInputObjectSchema as UserUncheckedUpdateWithoutGuidesInputObjectSchema } from './UserUncheckedUpdateWithoutGuidesInput.schema';
import { UserCreateWithoutGuidesInputObjectSchema as UserCreateWithoutGuidesInputObjectSchema } from './UserCreateWithoutGuidesInput.schema';
import { UserUncheckedCreateWithoutGuidesInputObjectSchema as UserUncheckedCreateWithoutGuidesInputObjectSchema } from './UserUncheckedCreateWithoutGuidesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutGuidesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutGuidesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutGuidesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutGuidesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutGuidesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutGuidesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutGuidesInput>;
export const UserUpsertWithoutGuidesInputObjectZodSchema = makeSchema();
