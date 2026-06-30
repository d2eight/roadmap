import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateWithoutGuidesInputObjectSchema as UserCreateWithoutGuidesInputObjectSchema } from './UserCreateWithoutGuidesInput.schema';
import { UserUncheckedCreateWithoutGuidesInputObjectSchema as UserUncheckedCreateWithoutGuidesInputObjectSchema } from './UserUncheckedCreateWithoutGuidesInput.schema';
import { UserCreateOrConnectWithoutGuidesInputObjectSchema as UserCreateOrConnectWithoutGuidesInputObjectSchema } from './UserCreateOrConnectWithoutGuidesInput.schema';
import { UserUpsertWithoutGuidesInputObjectSchema as UserUpsertWithoutGuidesInputObjectSchema } from './UserUpsertWithoutGuidesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutGuidesInputObjectSchema as UserUpdateToOneWithWhereWithoutGuidesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutGuidesInput.schema';
import { UserUpdateWithoutGuidesInputObjectSchema as UserUpdateWithoutGuidesInputObjectSchema } from './UserUpdateWithoutGuidesInput.schema';
import { UserUncheckedUpdateWithoutGuidesInputObjectSchema as UserUncheckedUpdateWithoutGuidesInputObjectSchema } from './UserUncheckedUpdateWithoutGuidesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutGuidesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutGuidesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutGuidesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutGuidesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutGuidesInputObjectSchema), z.lazy(() => UserUpdateWithoutGuidesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutGuidesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutGuidesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutGuidesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutGuidesNestedInput>;
export const UserUpdateOneRequiredWithoutGuidesNestedInputObjectZodSchema = makeSchema();
