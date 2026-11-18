import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const GuideWhereUniqueInputObjectSchema: z.ZodType<Prisma.GuideWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideWhereUniqueInput>;
export const GuideWhereUniqueInputObjectZodSchema = makeSchema();
