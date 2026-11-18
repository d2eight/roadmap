import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { GuideCreateWithoutUserInputObjectSchema as GuideCreateWithoutUserInputObjectSchema } from './GuideCreateWithoutUserInput.schema';
import { GuideUncheckedCreateWithoutUserInputObjectSchema as GuideUncheckedCreateWithoutUserInputObjectSchema } from './GuideUncheckedCreateWithoutUserInput.schema';
import { GuideCreateOrConnectWithoutUserInputObjectSchema as GuideCreateOrConnectWithoutUserInputObjectSchema } from './GuideCreateOrConnectWithoutUserInput.schema';
import { GuideUpsertWithWhereUniqueWithoutUserInputObjectSchema as GuideUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './GuideUpsertWithWhereUniqueWithoutUserInput.schema';
import { GuideCreateManyUserInputEnvelopeObjectSchema as GuideCreateManyUserInputEnvelopeObjectSchema } from './GuideCreateManyUserInputEnvelope.schema';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './GuideWhereUniqueInput.schema';
import { GuideUpdateWithWhereUniqueWithoutUserInputObjectSchema as GuideUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './GuideUpdateWithWhereUniqueWithoutUserInput.schema';
import { GuideUpdateManyWithWhereWithoutUserInputObjectSchema as GuideUpdateManyWithWhereWithoutUserInputObjectSchema } from './GuideUpdateManyWithWhereWithoutUserInput.schema';
import { GuideScalarWhereInputObjectSchema as GuideScalarWhereInputObjectSchema } from './GuideScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GuideCreateWithoutUserInputObjectSchema), z.lazy(() => GuideCreateWithoutUserInputObjectSchema).array(), z.lazy(() => GuideUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => GuideUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GuideCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => GuideCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GuideUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => GuideUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GuideCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => GuideWhereUniqueInputObjectSchema), z.lazy(() => GuideWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GuideWhereUniqueInputObjectSchema), z.lazy(() => GuideWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GuideWhereUniqueInputObjectSchema), z.lazy(() => GuideWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GuideWhereUniqueInputObjectSchema), z.lazy(() => GuideWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GuideUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => GuideUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GuideUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => GuideUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GuideScalarWhereInputObjectSchema), z.lazy(() => GuideScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GuideUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.GuideUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideUncheckedUpdateManyWithoutUserNestedInput>;
export const GuideUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
