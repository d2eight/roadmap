import { z } from 'zod';
import {
  GuideProgressStatusSchema,
  GuideStepModelSchema,
} from 'database/schemas';

const passwordSchema = z
  .string()
  .min(8, { message: 'Password must be at least 8 characters' })
  .regex(/[a-z]/, {
    message: 'Password must contain at least one lowercase letter',
  })
  .regex(/[A-Z]/, {
    message: 'Password must contain at least one uppercase letter',
  })
  .regex(/\d/, { message: 'Password must contain at least one number' })
  .regex(/[!@#$%^&*(),.?":{}|<>]/, {
    message: 'Password must contain at least one special character',
  });

export const userSignUpSchema = z
  .object({
    name: z.string().min(5, { message: 'Name must be at least 5 characters' }),
    email: z.email(),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must be similar',
    path: ['confirmPassword'],
  });

export type userSignUpSchemaType = z.infer<typeof userSignUpSchema>;

export const userSignInSchema = z.object({
  email: z.email(),
  password: passwordSchema,
});

export type userSignInSchemaType = z.infer<typeof userSignInSchema>;

export const promptSchema = z.object({
  prompt: z
    .string()
    .min(5, { message: 'Prompt must have at least 5 characters' })
    .max(1500, { message: 'Prompt must have no more than 1500 letters' }),
  externalAiQuestionsStatus: z.boolean(),
});

export type promptSchemaType = z.infer<typeof promptSchema>;

export const aiGuideGenerationSchema = z.object({
  title: z
    .string()
    .min(5)
    .describe(
      'A short, concise title for the guide. It should name the topic of the guide in a few words. Do not use a full sentence and do not repeat the description.',
    ),
  description: z
    .string()
    .min(100)
    .max(1500)
    .describe(
      'A detailed overview of the entire guide. Explain what the guide is about, its main goal, and what knowledge and skills the user will gain. It must provide substantially more information than the title and must not simply repeat or paraphrase the title.',
    ),
  steps: z
    .array(
      z.object({
        title: z
          .string()
          .min(5)
          .describe('A short, concise name for this step.'),
        description: z
          .string()
          .min(50)
          .describe(
            'A detailed explanation of what the user will learn or accomplish in this step. Do not simply repeat the step title.',
          ),
      }),
    )
    .max(30),
});

export type aiGuideGenerationSchemaType = z.infer<
  typeof aiGuideGenerationSchema
>;

export const aiQuestionABCD = z.object({
  question: z.string().min(20),
  options: z.array(z.string().min(10)).length(4),
});

export const aiQuestionRange = z.object({
  question: z.string().min(10),
  start: z.literal(1),
  end: z.literal(100),
});

export const aiQuestionCheckbox = z.object({
  question: z.string().min(10),
  options: z.array(z.string().min(10)).min(5).max(8),
});

export const aiQuestionText = z.object({
  question: z.string().min(20),
});

export const aiQuestionsSchema = z.object({
  aiQuestionABCD: aiQuestionABCD,
  aiQuestionRange: aiQuestionRange,
  aiQuestionCheckbox: aiQuestionCheckbox,
  aiQuestionText: aiQuestionText,
});

export type aiQuestionsSchemaType = z.infer<typeof aiQuestionsSchema>;

export const questionABCDSchema = aiQuestionABCD.extend({
  answer: z.string().min(10),
});

export const questionRange = aiQuestionRange.extend({
  answer: z.number().min(1).max(100),
});

export const questionCheckbox = aiQuestionCheckbox.extend({
  answer: z.array(z.string().min(10)).min(1).max(8),
});

export const questionText = aiQuestionText.extend({
  answer: z.string().min(10),
});

export const answeredQuestionsSchema = z.object({
  questionABCD: questionABCDSchema,
  questionRange: questionRange,
  questionCheckbox: questionCheckbox,
  questionText: questionText,
});

export type answeredQuestionsSchemaType = z.infer<
  typeof answeredQuestionsSchema
>;

export const guideQuestionsSchema = z.object({
  questionABCD: z
    .string()
    .min(1, 'Expected one option to be chosen, but got none'),
  questionRange: z.number().min(1).max(100),
  questionCheckbox: z
    .array(z.string())
    .min(1, 'Expected to get at least one option')
    .max(8),
  questionText: z.string().min(10).max(1500),
});

export type guideQuestionsSchemaType = z.infer<typeof guideQuestionsSchema>;

export const guideStepsSchema = z.object({
  steps: z.array(
    GuideStepModelSchema.omit({
      guide: true,
      createdAt: true,
      updatedAt: true,
    }),
  ),
});

export type guideStepsSchemaType = z.infer<typeof guideStepsSchema>;

export const filterSchema = z.object({
  sortBy: z.enum(['createdAt', 'updatedAt']),
  orderBy: z.enum(['desc', 'asc']),
  progressStatus: z.array(GuideProgressStatusSchema),
});

export type filterSchemaType = z.infer<typeof filterSchema>;
