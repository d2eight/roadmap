import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsUpdateWithoutGuideInputObjectSchema as AiQuestionsUpdateWithoutGuideInputObjectSchema } from './AiQuestionsUpdateWithoutGuideInput.schema';
import { AiQuestionsUncheckedUpdateWithoutGuideInputObjectSchema as AiQuestionsUncheckedUpdateWithoutGuideInputObjectSchema } from './AiQuestionsUncheckedUpdateWithoutGuideInput.schema';
import { AiQuestionsCreateWithoutGuideInputObjectSchema as AiQuestionsCreateWithoutGuideInputObjectSchema } from './AiQuestionsCreateWithoutGuideInput.schema';
import { AiQuestionsUncheckedCreateWithoutGuideInputObjectSchema as AiQuestionsUncheckedCreateWithoutGuideInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutGuideInput.schema';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './AiQuestionsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AiQuestionsUpdateWithoutGuideInputObjectSchema), z.lazy(() => AiQuestionsUncheckedUpdateWithoutGuideInputObjectSchema)]),
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutGuideInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutGuideInputObjectSchema)]),
  where: z.lazy(() => AiQuestionsWhereInputObjectSchema).optional()
}).strict();
export const AiQuestionsUpsertWithoutGuideInputObjectSchema: z.ZodType<Prisma.AiQuestionsUpsertWithoutGuideInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUpsertWithoutGuideInput>;
export const AiQuestionsUpsertWithoutGuideInputObjectZodSchema = makeSchema();
