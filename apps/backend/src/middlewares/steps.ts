import express from 'express';
import { guideStepsSchema } from 'shared-types';
import { z } from 'zod';

export async function stepsValidationMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
  const data = req.body;

  try {
    res.locals.steps = guideStepsSchema.parse(data).steps;
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

