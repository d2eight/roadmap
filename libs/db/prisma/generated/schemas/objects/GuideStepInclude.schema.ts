import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideArgsObjectSchema as GuideArgsObjectSchema } from './GuideArgs.schema'

const makeSchema = () => z.object({
  guide: z.union([z.boolean(), z.lazy(() => GuideArgsObjectSchema)]).optional()
}).strict();
export const GuideStepIncludeObjectSchema: z.ZodType<Prisma.GuideStepInclude> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepInclude>;
export const GuideStepIncludeObjectZodSchema = makeSchema();
