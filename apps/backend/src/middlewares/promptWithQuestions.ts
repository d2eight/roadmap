import express from 'express';
import {
  answeredQuestionsSchema,
  answeredQuestionsSchemaType,
} from 'shared-types';
import { z } from 'zod';

export async function questionsValidationMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const answeredQuestions: answeredQuestionsSchemaType = req.body;

  try {
    res.locals.answeredQuestions = answeredQuestionsSchema.parse(answeredQuestions);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(422).json({
        success: false,
        error: {
          message: 'Invalid questions data',
          issues: error.issues,
        },
      });
    }
    return res.status(500).json({
      success: false,
      error: {
        message: 'Something went wrong',
      },
    });
  }
}
