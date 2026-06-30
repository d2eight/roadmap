import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { GuideStepFindManySchema as GuideStepFindManySchema } from '../findManyGuideStep.schema';
import { AiQuestionsArgsObjectSchema as AiQuestionsArgsObjectSchema } from './AiQuestionsArgs.schema';
import { GuideCountOutputTypeArgsObjectSchema as GuideCountOutputTypeArgsObjectSchema } from './GuideCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  steps: z.union([z.boolean(), z.lazy(() => GuideStepFindManySchema)]).optional(),
  questions: z.union([z.boolean(), z.lazy(() => AiQuestionsArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => GuideCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const GuideIncludeObjectSchema: z.ZodType<Prisma.GuideInclude> = makeSchema() as unknown as z.ZodType<Prisma.GuideInclude>;
export const GuideIncludeObjectZodSchema = makeSchema();
