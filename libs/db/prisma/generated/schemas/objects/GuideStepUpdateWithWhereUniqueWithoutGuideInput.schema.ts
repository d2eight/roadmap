import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { GuideStepWhereUniqueInputObjectSchema as GuideStepWhereUniqueInputObjectSchema } from './GuideStepWhereUniqueInput.schema';
import { GuideStepUpdateWithoutGuideInputObjectSchema as GuideStepUpdateWithoutGuideInputObjectSchema } from './GuideStepUpdateWithoutGuideInput.schema';
import { GuideStepUncheckedUpdateWithoutGuideInputObjectSchema as GuideStepUncheckedUpdateWithoutGuideInputObjectSchema } from './GuideStepUncheckedUpdateWithoutGuideInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GuideStepWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GuideStepUpdateWithoutGuideInputObjectSchema), z.lazy(() => GuideStepUncheckedUpdateWithoutGuideInputObjectSchema)])
}).strict();
export const GuideStepUpdateWithWhereUniqueWithoutGuideInputObjectSchema: z.ZodType<Prisma.GuideStepUpdateWithWhereUniqueWithoutGuideInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepUpdateWithWhereUniqueWithoutGuideInput>;
export const GuideStepUpdateWithWhereUniqueWithoutGuideInputObjectZodSchema = makeSchema();
