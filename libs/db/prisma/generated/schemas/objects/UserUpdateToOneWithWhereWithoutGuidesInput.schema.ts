import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutGuidesInputObjectSchema as UserUpdateWithoutGuidesInputObjectSchema } from './UserUpdateWithoutGuidesInput.schema';
import { UserUncheckedUpdateWithoutGuidesInputObjectSchema as UserUncheckedUpdateWithoutGuidesInputObjectSchema } from './UserUncheckedUpdateWithoutGuidesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutGuidesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutGuidesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutGuidesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutGuidesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutGuidesInput>;
export const UserUpdateToOneWithWhereWithoutGuidesInputObjectZodSchema = makeSchema();
