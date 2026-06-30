import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './GuideWhereUniqueInput.schema';
import { GuideUpdateWithoutUserInputObjectSchema as GuideUpdateWithoutUserInputObjectSchema } from './GuideUpdateWithoutUserInput.schema';
import { GuideUncheckedUpdateWithoutUserInputObjectSchema as GuideUncheckedUpdateWithoutUserInputObjectSchema } from './GuideUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GuideWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GuideUpdateWithoutUserInputObjectSchema), z.lazy(() => GuideUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const GuideUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.GuideUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideUpdateWithWhereUniqueWithoutUserInput>;
export const GuideUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
