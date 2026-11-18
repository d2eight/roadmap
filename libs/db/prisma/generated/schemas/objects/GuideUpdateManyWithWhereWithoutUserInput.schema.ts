import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { GuideScalarWhereInputObjectSchema as GuideScalarWhereInputObjectSchema } from './GuideScalarWhereInput.schema';
import { GuideUpdateManyMutationInputObjectSchema as GuideUpdateManyMutationInputObjectSchema } from './GuideUpdateManyMutationInput.schema';
import { GuideUncheckedUpdateManyWithoutUserInputObjectSchema as GuideUncheckedUpdateManyWithoutUserInputObjectSchema } from './GuideUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GuideScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GuideUpdateManyMutationInputObjectSchema), z.lazy(() => GuideUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const GuideUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.GuideUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideUpdateManyWithWhereWithoutUserInput>;
export const GuideUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
