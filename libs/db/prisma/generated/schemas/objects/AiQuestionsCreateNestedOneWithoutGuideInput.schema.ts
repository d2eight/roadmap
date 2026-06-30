import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsCreateWithoutGuideInputObjectSchema as AiQuestionsCreateWithoutGuideInputObjectSchema } from './AiQuestionsCreateWithoutGuideInput.schema';
import { AiQuestionsUncheckedCreateWithoutGuideInputObjectSchema as AiQuestionsUncheckedCreateWithoutGuideInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutGuideInput.schema';
import { AiQuestionsCreateOrConnectWithoutGuideInputObjectSchema as AiQuestionsCreateOrConnectWithoutGuideInputObjectSchema } from './AiQuestionsCreateOrConnectWithoutGuideInput.schema';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './AiQuestionsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutGuideInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutGuideInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionsCreateOrConnectWithoutGuideInputObjectSchema).optional(),
  connect: z.lazy(() => AiQuestionsWhereUniqueInputObjectSchema).optional()
}).strict();
export const AiQuestionsCreateNestedOneWithoutGuideInputObjectSchema: z.ZodType<Prisma.AiQuestionsCreateNestedOneWithoutGuideInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsCreateNestedOneWithoutGuideInput>;
export const AiQuestionsCreateNestedOneWithoutGuideInputObjectZodSchema = makeSchema();
