import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideSelectObjectSchema as GuideSelectObjectSchema } from './GuideSelect.schema';
import { GuideIncludeObjectSchema as GuideIncludeObjectSchema } from './GuideInclude.schema';

const makeSchema = () =>
    z
        .object({
            select: z.lazy(() => GuideSelectObjectSchema).optional(),
            include: z.lazy(() => GuideIncludeObjectSchema).optional(),
        })
        .strict();
export const GuideArgsObjectSchema = makeSchema();
export const GuideArgsObjectZodSchema = makeSchema();
