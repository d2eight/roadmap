import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { UserCreateWithoutGuidesInputObjectSchema as UserCreateWithoutGuidesInputObjectSchema } from './UserCreateWithoutGuidesInput.schema';
import { UserUncheckedCreateWithoutGuidesInputObjectSchema as UserUncheckedCreateWithoutGuidesInputObjectSchema } from './UserUncheckedCreateWithoutGuidesInput.schema';
import { UserCreateOrConnectWithoutGuidesInputObjectSchema as UserCreateOrConnectWithoutGuidesInputObjectSchema } from './UserCreateOrConnectWithoutGuidesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutGuidesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutGuidesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutGuidesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutGuidesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutGuidesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutGuidesInput>;
export const UserCreateNestedOneWithoutGuidesInputObjectZodSchema = makeSchema();
