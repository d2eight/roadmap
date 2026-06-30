import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './GuideWhereUniqueInput.schema';
import { GuideCreateWithoutQuestionsInputObjectSchema as GuideCreateWithoutQuestionsInputObjectSchema } from './GuideCreateWithoutQuestionsInput.schema';
import { GuideUncheckedCreateWithoutQuestionsInputObjectSchema as GuideUncheckedCreateWithoutQuestionsInputObjectSchema } from './GuideUncheckedCreateWithoutQuestionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GuideWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GuideCreateWithoutQuestionsInputObjectSchema), z.lazy(() => GuideUncheckedCreateWithoutQuestionsInputObjectSchema)])
}).strict();
export const GuideCreateOrConnectWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.GuideCreateOrConnectWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideCreateOrConnectWithoutQuestionsInput>;
export const GuideCreateOrConnectWithoutQuestionsInputObjectZodSchema = makeSchema();
