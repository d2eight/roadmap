import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { GuideArgsObjectSchema as GuideArgsObjectSchema } from './GuideArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  guide: z.union([z.boolean(), z.lazy(() => GuideArgsObjectSchema)]).optional(),
  guideId: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const GuideStepSelectObjectSchema: z.ZodType<Prisma.GuideStepSelect> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepSelect>;
export const GuideStepSelectObjectZodSchema = makeSchema();
