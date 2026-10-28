import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStepCreateWithoutGuideInputObjectSchema as GuideStepCreateWithoutGuideInputObjectSchema } from './GuideStepCreateWithoutGuideInput.schema';
import { GuideStepUncheckedCreateWithoutGuideInputObjectSchema as GuideStepUncheckedCreateWithoutGuideInputObjectSchema } from './GuideStepUncheckedCreateWithoutGuideInput.schema';
import { GuideStepCreateOrConnectWithoutGuideInputObjectSchema as GuideStepCreateOrConnectWithoutGuideInputObjectSchema } from './GuideStepCreateOrConnectWithoutGuideInput.schema';
import { GuideStepCreateManyGuideInputEnvelopeObjectSchema as GuideStepCreateManyGuideInputEnvelopeObjectSchema } from './GuideStepCreateManyGuideInputEnvelope.schema';
import { GuideStepWhereUniqueInputObjectSchema as GuideStepWhereUniqueInputObjectSchema } from './GuideStepWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GuideStepCreateWithoutGuideInputObjectSchema), z.lazy(() => GuideStepCreateWithoutGuideInputObjectSchema).array(), z.lazy(() => GuideStepUncheckedCreateWithoutGuideInputObjectSchema), z.lazy(() => GuideStepUncheckedCreateWithoutGuideInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GuideStepCreateOrConnectWithoutGuideInputObjectSchema), z.lazy(() => GuideStepCreateOrConnectWithoutGuideInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GuideStepCreateManyGuideInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => GuideStepWhereUniqueInputObjectSchema), z.lazy(() => GuideStepWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GuideStepCreateNestedManyWithoutGuideInputObjectSchema: z.ZodType<Prisma.GuideStepCreateNestedManyWithoutGuideInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepCreateNestedManyWithoutGuideInput>;
export const GuideStepCreateNestedManyWithoutGuideInputObjectZodSchema = makeSchema();
