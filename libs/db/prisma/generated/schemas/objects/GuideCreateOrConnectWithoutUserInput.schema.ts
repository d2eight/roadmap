import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './GuideWhereUniqueInput.schema';
import { GuideCreateWithoutUserInputObjectSchema as GuideCreateWithoutUserInputObjectSchema } from './GuideCreateWithoutUserInput.schema';
import { GuideUncheckedCreateWithoutUserInputObjectSchema as GuideUncheckedCreateWithoutUserInputObjectSchema } from './GuideUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GuideWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GuideCreateWithoutUserInputObjectSchema), z.lazy(() => GuideUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const GuideCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.GuideCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideCreateOrConnectWithoutUserInput>;
export const GuideCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
