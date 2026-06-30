import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideCreateWithoutQuestionsInputObjectSchema as GuideCreateWithoutQuestionsInputObjectSchema } from './GuideCreateWithoutQuestionsInput.schema';
import { GuideUncheckedCreateWithoutQuestionsInputObjectSchema as GuideUncheckedCreateWithoutQuestionsInputObjectSchema } from './GuideUncheckedCreateWithoutQuestionsInput.schema';
import { GuideCreateOrConnectWithoutQuestionsInputObjectSchema as GuideCreateOrConnectWithoutQuestionsInputObjectSchema } from './GuideCreateOrConnectWithoutQuestionsInput.schema';
import { GuideUpsertWithoutQuestionsInputObjectSchema as GuideUpsertWithoutQuestionsInputObjectSchema } from './GuideUpsertWithoutQuestionsInput.schema';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './GuideWhereUniqueInput.schema';
import { GuideUpdateToOneWithWhereWithoutQuestionsInputObjectSchema as GuideUpdateToOneWithWhereWithoutQuestionsInputObjectSchema } from './GuideUpdateToOneWithWhereWithoutQuestionsInput.schema';
import { GuideUpdateWithoutQuestionsInputObjectSchema as GuideUpdateWithoutQuestionsInputObjectSchema } from './GuideUpdateWithoutQuestionsInput.schema';
import { GuideUncheckedUpdateWithoutQuestionsInputObjectSchema as GuideUncheckedUpdateWithoutQuestionsInputObjectSchema } from './GuideUncheckedUpdateWithoutQuestionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GuideCreateWithoutQuestionsInputObjectSchema), z.lazy(() => GuideUncheckedCreateWithoutQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GuideCreateOrConnectWithoutQuestionsInputObjectSchema).optional(),
  upsert: z.lazy(() => GuideUpsertWithoutQuestionsInputObjectSchema).optional(),
  connect: z.lazy(() => GuideWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => GuideUpdateToOneWithWhereWithoutQuestionsInputObjectSchema), z.lazy(() => GuideUpdateWithoutQuestionsInputObjectSchema), z.lazy(() => GuideUncheckedUpdateWithoutQuestionsInputObjectSchema)]).optional()
}).strict();
export const GuideUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema: z.ZodType<Prisma.GuideUpdateOneRequiredWithoutQuestionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideUpdateOneRequiredWithoutQuestionsNestedInput>;
export const GuideUpdateOneRequiredWithoutQuestionsNestedInputObjectZodSchema = makeSchema();
