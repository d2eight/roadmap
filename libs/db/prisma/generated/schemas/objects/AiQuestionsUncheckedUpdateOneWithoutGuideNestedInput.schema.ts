import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionsCreateWithoutGuideInputObjectSchema as AiQuestionsCreateWithoutGuideInputObjectSchema } from './AiQuestionsCreateWithoutGuideInput.schema';
import { AiQuestionsUncheckedCreateWithoutGuideInputObjectSchema as AiQuestionsUncheckedCreateWithoutGuideInputObjectSchema } from './AiQuestionsUncheckedCreateWithoutGuideInput.schema';
import { AiQuestionsCreateOrConnectWithoutGuideInputObjectSchema as AiQuestionsCreateOrConnectWithoutGuideInputObjectSchema } from './AiQuestionsCreateOrConnectWithoutGuideInput.schema';
import { AiQuestionsUpsertWithoutGuideInputObjectSchema as AiQuestionsUpsertWithoutGuideInputObjectSchema } from './AiQuestionsUpsertWithoutGuideInput.schema';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './AiQuestionsWhereInput.schema';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './AiQuestionsWhereUniqueInput.schema';
import { AiQuestionsUpdateToOneWithWhereWithoutGuideInputObjectSchema as AiQuestionsUpdateToOneWithWhereWithoutGuideInputObjectSchema } from './AiQuestionsUpdateToOneWithWhereWithoutGuideInput.schema';
import { AiQuestionsUpdateWithoutGuideInputObjectSchema as AiQuestionsUpdateWithoutGuideInputObjectSchema } from './AiQuestionsUpdateWithoutGuideInput.schema';
import { AiQuestionsUncheckedUpdateWithoutGuideInputObjectSchema as AiQuestionsUncheckedUpdateWithoutGuideInputObjectSchema } from './AiQuestionsUncheckedUpdateWithoutGuideInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiQuestionsCreateWithoutGuideInputObjectSchema), z.lazy(() => AiQuestionsUncheckedCreateWithoutGuideInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AiQuestionsCreateOrConnectWithoutGuideInputObjectSchema).optional(),
  upsert: z.lazy(() => AiQuestionsUpsertWithoutGuideInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AiQuestionsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AiQuestionsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AiQuestionsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AiQuestionsUpdateToOneWithWhereWithoutGuideInputObjectSchema), z.lazy(() => AiQuestionsUpdateWithoutGuideInputObjectSchema), z.lazy(() => AiQuestionsUncheckedUpdateWithoutGuideInputObjectSchema)]).optional()
}).strict();
export const AiQuestionsUncheckedUpdateOneWithoutGuideNestedInputObjectSchema: z.ZodType<Prisma.AiQuestionsUncheckedUpdateOneWithoutGuideNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUncheckedUpdateOneWithoutGuideNestedInput>;
export const AiQuestionsUncheckedUpdateOneWithoutGuideNestedInputObjectZodSchema = makeSchema();
