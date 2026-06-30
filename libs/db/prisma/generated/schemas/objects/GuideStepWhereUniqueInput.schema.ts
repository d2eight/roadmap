import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const GuideStepWhereUniqueInputObjectSchema: z.ZodType<Prisma.GuideStepWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepWhereUniqueInput>;
export const GuideStepWhereUniqueInputObjectZodSchema = makeSchema();
