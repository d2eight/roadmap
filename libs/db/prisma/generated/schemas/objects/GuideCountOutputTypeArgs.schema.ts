import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideCountOutputTypeSelectObjectSchema as GuideCountOutputTypeSelectObjectSchema } from './GuideCountOutputTypeSelect.schema';

const makeSchema = () =>
    z
        .object({
            select: z
                .lazy(() => GuideCountOutputTypeSelectObjectSchema)
                .optional(),
        })
        .strict();
export const GuideCountOutputTypeArgsObjectSchema = makeSchema();
export const GuideCountOutputTypeArgsObjectZodSchema = makeSchema();
