import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { GuideStepFindManySchema as GuideStepFindManySchema } from '../findManyGuideStep.schema';
import { GuideCountOutputTypeArgsObjectSchema as GuideCountOutputTypeArgsObjectSchema } from './GuideCountOutputTypeArgs.schema';

const makeSchema = () =>
    z
        .object({
            id: z.boolean().optional(),
            prompt: z.boolean().optional(),
            externalAiQuestionsStatus: z.boolean().optional(),
            user: z
                .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
                .optional(),
            userId: z.boolean().optional(),
            title: z.boolean().optional(),
            description: z.boolean().optional(),
            steps: z
                .union([z.boolean(), z.lazy(() => GuideStepFindManySchema)])
                .optional(),
            questions: z.boolean().optional(),
            answeredQuestions: z.boolean().optional(),
            status: z.boolean().optional(),
            progressStatus: z.boolean().optional(),
            createdAt: z.boolean().optional(),
            updatedAt: z.boolean().optional(),
            _count: z
                .union([
                    z.boolean(),
                    z.lazy(() => GuideCountOutputTypeArgsObjectSchema),
                ])
                .optional(),
        })
        .strict();
export const GuideSelectObjectSchema: z.ZodType<Prisma.GuideSelect> =
    makeSchema() as unknown as z.ZodType<Prisma.GuideSelect>;
export const GuideSelectObjectZodSchema = makeSchema();
