import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './AiQuestionsWhereUniqueInput.schema';
import { AiQuestionsCreateWithoutGuideInputObjectSchema as AiQuestionsCreateWithoutGuideInputObjectSchema } from './AiQuestionsCreateWithoutGuideInput.schema';
import { AiQuestionsUncheckedCreateWithoutGuideInputObjectSchema as AiQuestionsUncheckedCreateWithoutGuideInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutGuideInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiQuestionsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutGuideInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutGuideInputObjectSchema)])
}).strict();
export const AiQuestionsCreateOrConnectWithoutGuideInputObjectSchema: z.ZodType<Prisma.AiQuestionsCreateOrConnectWithoutGuideInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsCreateOrConnectWithoutGuideInput>;
export const AiQuestionsCreateOrConnectWithoutGuideInputObjectZodSchema = makeSchema();
