import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideWhereInputObjectSchema as GuideWhereInputObjectSchema } from './GuideWhereInput.schema';

const makeSchema = () =>
    z
        .object({
            where: z.lazy(() => GuideWhereInputObjectSchema).optional(),
        })
        .strict();
export const UserCountOutputTypeCountGuidesArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountGuidesArgsObjectZodSchema = makeSchema();
