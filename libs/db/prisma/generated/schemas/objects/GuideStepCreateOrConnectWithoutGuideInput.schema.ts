import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStepWhereUniqueInputObjectSchema as GuideStepWhereUniqueInputObjectSchema } from './GuideStepWhereUniqueInput.schema';
import { GuideStepCreateWithoutGuideInputObjectSchema as GuideStepCreateWithoutGuideInputObjectSchema } from './GuideStepCreateWithoutGuideInput.schema';
import { GuideStepUncheckedCreateWithoutGuideInputObjectSchema as GuideStepUncheckedCreateWithoutGuideInputObjectSchema } from './GuideStepUncheckedCreateWithoutGuideInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GuideStepWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GuideStepCreateWithoutGuideInputObjectSchema), z.lazy(() => GuideStepUncheckedCreateWithoutGuideInputObjectSchema)])
}).strict();
export const GuideStepCreateOrConnectWithoutGuideInputObjectSchema: z.ZodType<Prisma.GuideStepCreateOrConnectWithoutGuideInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepCreateOrConnectWithoutGuideInput>;
export const GuideStepCreateOrConnectWithoutGuideInputObjectZodSchema = makeSchema();
