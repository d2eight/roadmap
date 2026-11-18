import * as z from 'zod';
import { GuideStepSelectObjectSchema as GuideStepSelectObjectSchema } from './GuideStepSelect.schema';
import { GuideStepIncludeObjectSchema as GuideStepIncludeObjectSchema } from './GuideStepInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GuideStepSelectObjectSchema).optional(),
  include: z.lazy(() => GuideStepIncludeObjectSchema).optional()
}).strict();
export const GuideStepArgsObjectSchema = makeSchema();
export const GuideStepArgsObjectZodSchema = makeSchema();
