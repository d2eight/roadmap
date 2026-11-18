import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { GuideStepCreateWithoutGuideInputObjectSchema as GuideStepCreateWithoutGuideInputObjectSchema } from './GuideStepCreateWithoutGuideInput.schema';
import { GuideStepUncheckedCreateWithoutGuideInputObjectSchema as GuideStepUncheckedCreateWithoutGuideInputObjectSchema } from './GuideStepUncheckedCreateWithoutGuideInput.schema';
import { GuideStepCreateOrConnectWithoutGuideInputObjectSchema as GuideStepCreateOrConnectWithoutGuideInputObjectSchema } from './GuideStepCreateOrConnectWithoutGuideInput.schema';
import { GuideStepUpsertWithWhereUniqueWithoutGuideInputObjectSchema as GuideStepUpsertWithWhereUniqueWithoutGuideInputObjectSchema } from './GuideStepUpsertWithWhereUniqueWithoutGuideInput.schema';
import { GuideStepCreateManyGuideInputEnvelopeObjectSchema as GuideStepCreateManyGuideInputEnvelopeObjectSchema } from './GuideStepCreateManyGuideInputEnvelope.schema';
import { GuideStepWhereUniqueInputObjectSchema as GuideStepWhereUniqueInputObjectSchema } from './GuideStepWhereUniqueInput.schema';
import { GuideStepUpdateWithWhereUniqueWithoutGuideInputObjectSchema as GuideStepUpdateWithWhereUniqueWithoutGuideInputObjectSchema } from './GuideStepUpdateWithWhereUniqueWithoutGuideInput.schema';
import { GuideStepUpdateManyWithWhereWithoutGuideInputObjectSchema as GuideStepUpdateManyWithWhereWithoutGuideInputObjectSchema } from './GuideStepUpdateManyWithWhereWithoutGuideInput.schema';
import { GuideStepScalarWhereInputObjectSchema as GuideStepScalarWhereInputObjectSchema } from './GuideStepScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GuideStepCreateWithoutGuideInputObjectSchema), z.lazy(() => GuideStepCreateWithoutGuideInputObjectSchema).array(), z.lazy(() => GuideStepUncheckedCreateWithoutGuideInputObjectSchema), z.lazy(() => GuideStepUncheckedCreateWithoutGuideInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GuideStepCreateOrConnectWithoutGuideInputObjectSchema), z.lazy(() => GuideStepCreateOrConnectWithoutGuideInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GuideStepUpsertWithWhereUniqueWithoutGuideInputObjectSchema), z.lazy(() => GuideStepUpsertWithWhereUniqueWithoutGuideInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GuideStepCreateManyGuideInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => GuideStepWhereUniqueInputObjectSchema), z.lazy(() => GuideStepWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GuideStepWhereUniqueInputObjectSchema), z.lazy(() => GuideStepWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GuideStepWhereUniqueInputObjectSchema), z.lazy(() => GuideStepWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GuideStepWhereUniqueInputObjectSchema), z.lazy(() => GuideStepWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GuideStepUpdateWithWhereUniqueWithoutGuideInputObjectSchema), z.lazy(() => GuideStepUpdateWithWhereUniqueWithoutGuideInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GuideStepUpdateManyWithWhereWithoutGuideInputObjectSchema), z.lazy(() => GuideStepUpdateManyWithWhereWithoutGuideInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GuideStepScalarWhereInputObjectSchema), z.lazy(() => GuideStepScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GuideStepUpdateManyWithoutGuideNestedInputObjectSchema: z.ZodType<Prisma.GuideStepUpdateManyWithoutGuideNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepUpdateManyWithoutGuideNestedInput>;
export const GuideStepUpdateManyWithoutGuideNestedInputObjectZodSchema = makeSchema();
