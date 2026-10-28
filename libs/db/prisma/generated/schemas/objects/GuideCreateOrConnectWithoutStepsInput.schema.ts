import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './GuideWhereUniqueInput.schema';
import { GuideCreateWithoutStepsInputObjectSchema as GuideCreateWithoutStepsInputObjectSchema } from './GuideCreateWithoutStepsInput.schema';
import { GuideUncheckedCreateWithoutStepsInputObjectSchema as GuideUncheckedCreateWithoutStepsInputObjectSchema } from './GuideUncheckedCreateWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GuideWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GuideCreateWithoutStepsInputObjectSchema), z.lazy(() => GuideUncheckedCreateWithoutStepsInputObjectSchema)])
}).strict();
export const GuideCreateOrConnectWithoutStepsInputObjectSchema: z.ZodType<Prisma.GuideCreateOrConnectWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideCreateOrConnectWithoutStepsInput>;
export const GuideCreateOrConnectWithoutStepsInputObjectZodSchema = makeSchema();
