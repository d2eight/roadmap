import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './AiQuestionsWhereInput.schema';
import { AiQuestionsUpdateWithoutGuideInputObjectSchema as AiQuestionsUpdateWithoutGuideInputObjectSchema } from './AiQuestionsUpdateWithoutGuideInput.schema';
import { AiQuestionsUncheckedUpdateWithoutGuideInputObjectSchema as AiQuestionsUncheckedUpdateWithoutGuideInputObjectSchema } from './AiQuestionsUncheckedUpdateWithoutGuideInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AiQuestionsUpdateWithoutGuideInputObjectSchema), z.lazy(() => AiQuestionsUncheckedUpdateWithoutGuideInputObjectSchema)])
}).strict();
export const AiQuestionsUpdateToOneWithWhereWithoutGuideInputObjectSchema: z.ZodType<Prisma.AiQuestionsUpdateToOneWithWhereWithoutGuideInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUpdateToOneWithWhereWithoutGuideInput>;
export const AiQuestionsUpdateToOneWithWhereWithoutGuideInputObjectZodSchema = makeSchema();
