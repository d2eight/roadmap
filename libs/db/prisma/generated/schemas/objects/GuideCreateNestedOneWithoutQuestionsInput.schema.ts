import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideCreateWithoutQuestionsInputObjectSchema as GuideCreateWithoutQuestionsInputObjectSchema } from './GuideCreateWithoutQuestionsInput.schema';
import { GuideUncheckedCreateWithoutQuestionsInputObjectSchema as GuideUncheckedCreateWithoutQuestionsInputObjectSchema } from './GuideUncheckedCreateWithoutQuestionsInput.schema';
import { GuideCreateOrConnectWithoutQuestionsInputObjectSchema as GuideCreateOrConnectWithoutQuestionsInputObjectSchema } from './GuideCreateOrConnectWithoutQuestionsInput.schema';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './GuideWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GuideCreateWithoutQuestionsInputObjectSchema), z.lazy(() => GuideUncheckedCreateWithoutQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GuideCreateOrConnectWithoutQuestionsInputObjectSchema).optional(),
  connect: z.lazy(() => GuideWhereUniqueInputObjectSchema).optional()
}).strict();
export const GuideCreateNestedOneWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.GuideCreateNestedOneWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideCreateNestedOneWithoutQuestionsInput>;
export const GuideCreateNestedOneWithoutQuestionsInputObjectZodSchema = makeSchema();
