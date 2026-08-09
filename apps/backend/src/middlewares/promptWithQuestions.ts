import express from 'express';
import { questionsSchema, questionsSchemaType } from 'shared-types';
import { z } from 'zod';

export async function questionsValidationMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const answeredQuestions: questionsSchemaType = req.body;

  try {
    res.locals.answeredQuestions = questionsSchema.parse(answeredQuestions);
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
