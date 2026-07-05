import { z } from 'zod';

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
  title: z.string().min(5),
  description: z.string().min(15),
  steps: z
    .array(
      z.object({
        title: z.string().min(5),
        description: z.string().min(15),
      }),
    )
    .max(30),
});

export type aiGuideGenerationSchemaType = z.infer<
  typeof aiGuideGenerationSchema
>;

export const aiQuestionABCDSchema = z.object({
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
  aiQuestionABCDSchema: aiQuestionABCDSchema,
  aiQuestionRange: aiQuestionRange,
  aiQuestionCheckbox: aiQuestionCheckbox,
  aiQuestionText: aiQuestionText,
});

export type aiQuestionsSchemaType = z.infer<typeof aiQuestionsSchema>;

export const questionABCDSchema = aiQuestionABCDSchema.extend({
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

export const questionsSchema = z.object({
  questionABCD: questionABCDSchema,
  questionRange: questionRange,
  questionCheckbox: questionCheckbox,
  questionText: questionText,
});

export type questionsSchemaType = z.infer<typeof questionsSchema>;
