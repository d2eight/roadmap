import * as z from 'zod';
import { GuideStepWhereInputObjectSchema as GuideStepWhereInputObjectSchema } from './GuideStepWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GuideStepWhereInputObjectSchema).optional()
}).strict();
export const GuideCountOutputTypeCountStepsArgsObjectSchema = makeSchema();
export const GuideCountOutputTypeCountStepsArgsObjectZodSchema = makeSchema();
