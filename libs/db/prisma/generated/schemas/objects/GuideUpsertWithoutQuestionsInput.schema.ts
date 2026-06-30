import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideUpdateWithoutQuestionsInputObjectSchema as GuideUpdateWithoutQuestionsInputObjectSchema } from './GuideUpdateWithoutQuestionsInput.schema';
import { GuideUncheckedUpdateWithoutQuestionsInputObjectSchema as GuideUncheckedUpdateWithoutQuestionsInputObjectSchema } from './GuideUncheckedUpdateWithoutQuestionsInput.schema';
import { GuideCreateWithoutQuestionsInputObjectSchema as GuideCreateWithoutQuestionsInputObjectSchema } from './GuideCreateWithoutQuestionsInput.schema';
import { GuideUncheckedCreateWithoutQuestionsInputObjectSchema as GuideUncheckedCreateWithoutQuestionsInputObjectSchema } from './GuideUncheckedCreateWithoutQuestionsInput.schema';
import { GuideWhereInputObjectSchema as GuideWhereInputObjectSchema } from './GuideWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => GuideUpdateWithoutQuestionsInputObjectSchema), z.lazy(() => GuideUncheckedUpdateWithoutQuestionsInputObjectSchema)]),
  create: z.union([z.lazy(() => GuideCreateWithoutQuestionsInputObjectSchema), z.lazy(() => GuideUncheckedCreateWithoutQuestionsInputObjectSchema)]),
  where: z.lazy(() => GuideWhereInputObjectSchema).optional()
}).strict();
export const GuideUpsertWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.GuideUpsertWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideUpsertWithoutQuestionsInput>;
export const GuideUpsertWithoutQuestionsInputObjectZodSchema = makeSchema();
