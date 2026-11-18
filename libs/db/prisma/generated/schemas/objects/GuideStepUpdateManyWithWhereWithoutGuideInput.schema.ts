import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { GuideStepScalarWhereInputObjectSchema as GuideStepScalarWhereInputObjectSchema } from './GuideStepScalarWhereInput.schema';
import { GuideStepUpdateManyMutationInputObjectSchema as GuideStepUpdateManyMutationInputObjectSchema } from './GuideStepUpdateManyMutationInput.schema';
import { GuideStepUncheckedUpdateManyWithoutGuideInputObjectSchema as GuideStepUncheckedUpdateManyWithoutGuideInputObjectSchema } from './GuideStepUncheckedUpdateManyWithoutGuideInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GuideStepScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GuideStepUpdateManyMutationInputObjectSchema), z.lazy(() => GuideStepUncheckedUpdateManyWithoutGuideInputObjectSchema)])
}).strict();
export const GuideStepUpdateManyWithWhereWithoutGuideInputObjectSchema: z.ZodType<Prisma.GuideStepUpdateManyWithWhereWithoutGuideInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepUpdateManyWithWhereWithoutGuideInput>;
export const GuideStepUpdateManyWithWhereWithoutGuideInputObjectZodSchema = makeSchema();
