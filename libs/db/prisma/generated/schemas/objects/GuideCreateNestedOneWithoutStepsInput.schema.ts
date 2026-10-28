import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideCreateWithoutStepsInputObjectSchema as GuideCreateWithoutStepsInputObjectSchema } from './GuideCreateWithoutStepsInput.schema';
import { GuideUncheckedCreateWithoutStepsInputObjectSchema as GuideUncheckedCreateWithoutStepsInputObjectSchema } from './GuideUncheckedCreateWithoutStepsInput.schema';
import { GuideCreateOrConnectWithoutStepsInputObjectSchema as GuideCreateOrConnectWithoutStepsInputObjectSchema } from './GuideCreateOrConnectWithoutStepsInput.schema';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './GuideWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GuideCreateWithoutStepsInputObjectSchema), z.lazy(() => GuideUncheckedCreateWithoutStepsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GuideCreateOrConnectWithoutStepsInputObjectSchema).optional(),
  connect: z.lazy(() => GuideWhereUniqueInputObjectSchema).optional()
}).strict();
export const GuideCreateNestedOneWithoutStepsInputObjectSchema: z.ZodType<Prisma.GuideCreateNestedOneWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideCreateNestedOneWithoutStepsInput>;
export const GuideCreateNestedOneWithoutStepsInputObjectZodSchema = makeSchema();
