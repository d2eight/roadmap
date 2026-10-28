import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './GuideWhereUniqueInput.schema';
import { GuideUpdateWithoutUserInputObjectSchema as GuideUpdateWithoutUserInputObjectSchema } from './GuideUpdateWithoutUserInput.schema';
import { GuideUncheckedUpdateWithoutUserInputObjectSchema as GuideUncheckedUpdateWithoutUserInputObjectSchema } from './GuideUncheckedUpdateWithoutUserInput.schema';
import { GuideCreateWithoutUserInputObjectSchema as GuideCreateWithoutUserInputObjectSchema } from './GuideCreateWithoutUserInput.schema';
import { GuideUncheckedCreateWithoutUserInputObjectSchema as GuideUncheckedCreateWithoutUserInputObjectSchema } from './GuideUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GuideWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GuideUpdateWithoutUserInputObjectSchema), z.lazy(() => GuideUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => GuideCreateWithoutUserInputObjectSchema), z.lazy(() => GuideUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const GuideUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.GuideUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideUpsertWithWhereUniqueWithoutUserInput>;
export const GuideUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
