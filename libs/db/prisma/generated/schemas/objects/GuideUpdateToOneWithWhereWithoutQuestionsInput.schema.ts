import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideWhereInputObjectSchema as GuideWhereInputObjectSchema } from './GuideWhereInput.schema';
import { GuideUpdateWithoutQuestionsInputObjectSchema as GuideUpdateWithoutQuestionsInputObjectSchema } from './GuideUpdateWithoutQuestionsInput.schema';
import { GuideUncheckedUpdateWithoutQuestionsInputObjectSchema as GuideUncheckedUpdateWithoutQuestionsInputObjectSchema } from './GuideUncheckedUpdateWithoutQuestionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GuideWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => GuideUpdateWithoutQuestionsInputObjectSchema), z.lazy(() => GuideUncheckedUpdateWithoutQuestionsInputObjectSchema)])
}).strict();
export const GuideUpdateToOneWithWhereWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.GuideUpdateToOneWithWhereWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideUpdateToOneWithWhereWithoutQuestionsInput>;
export const GuideUpdateToOneWithWhereWithoutQuestionsInputObjectZodSchema = makeSchema();
