import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { GuideCreateWithoutStepsInputObjectSchema as GuideCreateWithoutStepsInputObjectSchema } from './GuideCreateWithoutStepsInput.schema';
import { GuideUncheckedCreateWithoutStepsInputObjectSchema as GuideUncheckedCreateWithoutStepsInputObjectSchema } from './GuideUncheckedCreateWithoutStepsInput.schema';
import { GuideCreateOrConnectWithoutStepsInputObjectSchema as GuideCreateOrConnectWithoutStepsInputObjectSchema } from './GuideCreateOrConnectWithoutStepsInput.schema';
import { GuideUpsertWithoutStepsInputObjectSchema as GuideUpsertWithoutStepsInputObjectSchema } from './GuideUpsertWithoutStepsInput.schema';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './GuideWhereUniqueInput.schema';
import { GuideUpdateToOneWithWhereWithoutStepsInputObjectSchema as GuideUpdateToOneWithWhereWithoutStepsInputObjectSchema } from './GuideUpdateToOneWithWhereWithoutStepsInput.schema';
import { GuideUpdateWithoutStepsInputObjectSchema as GuideUpdateWithoutStepsInputObjectSchema } from './GuideUpdateWithoutStepsInput.schema';
import { GuideUncheckedUpdateWithoutStepsInputObjectSchema as GuideUncheckedUpdateWithoutStepsInputObjectSchema } from './GuideUncheckedUpdateWithoutStepsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GuideCreateWithoutStepsInputObjectSchema), z.lazy(() => GuideUncheckedCreateWithoutStepsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GuideCreateOrConnectWithoutStepsInputObjectSchema).optional(),
  upsert: z.lazy(() => GuideUpsertWithoutStepsInputObjectSchema).optional(),
  connect: z.lazy(() => GuideWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => GuideUpdateToOneWithWhereWithoutStepsInputObjectSchema), z.lazy(() => GuideUpdateWithoutStepsInputObjectSchema), z.lazy(() => GuideUncheckedUpdateWithoutStepsInputObjectSchema)]).optional()
}).strict();
export const GuideUpdateOneRequiredWithoutStepsNestedInputObjectSchema: z.ZodType<Prisma.GuideUpdateOneRequiredWithoutStepsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideUpdateOneRequiredWithoutStepsNestedInput>;
export const GuideUpdateOneRequiredWithoutStepsNestedInputObjectZodSchema = makeSchema();
