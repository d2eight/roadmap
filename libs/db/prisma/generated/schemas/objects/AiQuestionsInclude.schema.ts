import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideArgsObjectSchema as GuideArgsObjectSchema } from './GuideArgs.schema';
import { AiQuestionABCDArgsObjectSchema as AiQuestionABCDArgsObjectSchema } from './AiQuestionABCDArgs.schema';
import { AiQuestionRangeArgsObjectSchema as AiQuestionRangeArgsObjectSchema } from './AiQuestionRangeArgs.schema';
import { AiQuestionArgsObjectSchema as AiQuestionArgsObjectSchema } from './AiQuestionArgs.schema';
import { AiQuestionCheckboxArgsObjectSchema as AiQuestionCheckboxArgsObjectSchema } from './AiQuestionCheckboxArgs.schema'

const makeSchema = () => z.object({
  guide: z.union([z.boolean(), z.lazy(() => GuideArgsObjectSchema)]).optional(),
  AiQuestionABCD: z.union([z.boolean(), z.lazy(() => AiQuestionABCDArgsObjectSchema)]).optional(),
  AiQuestionRange: z.union([z.boolean(), z.lazy(() => AiQuestionRangeArgsObjectSchema)]).optional(),
  AiQuestion: z.union([z.boolean(), z.lazy(() => AiQuestionArgsObjectSchema)]).optional(),
  AiQuestionCheckbox: z.union([z.boolean(), z.lazy(() => AiQuestionCheckboxArgsObjectSchema)]).optional()
}).strict();
export const AiQuestionsIncludeObjectSchema: z.ZodType<Prisma.AiQuestionsInclude> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsInclude>;
export const AiQuestionsIncludeObjectZodSchema = makeSchema();
