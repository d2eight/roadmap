import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsSelectObjectSchema as AiQuestionsSelectObjectSchema } from './AiQuestionsSelect.schema';
import { AiQuestionsIncludeObjectSchema as AiQuestionsIncludeObjectSchema } from './AiQuestionsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AiQuestionsSelectObjectSchema).optional(),
  include: z.lazy(() => AiQuestionsIncludeObjectSchema).optional()
}).strict();
export const AiQuestionsArgsObjectSchema = makeSchema();
export const AiQuestionsArgsObjectZodSchema = makeSchema();
