import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { GuideCountOutputTypeCountStepsArgsObjectSchema as GuideCountOutputTypeCountStepsArgsObjectSchema } from './GuideCountOutputTypeCountStepsArgs.schema'

const makeSchema = () => z.object({
  steps: z.union([z.boolean(), z.lazy(() => GuideCountOutputTypeCountStepsArgsObjectSchema)]).optional()
}).strict();
export const GuideCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.GuideCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.GuideCountOutputTypeSelect>;
export const GuideCountOutputTypeSelectObjectZodSchema = makeSchema();
