import { auth } from 'auth';
import express from 'express';
import { fromNodeHeaders } from 'better-auth/node';
import { ApiResponse } from 'shared-types';

export async function authMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    return res.status(401).json({
      success: false,
      error: {
        message: 'Unauthorized user, please sign in',
      },
    });
  }

  res.locals.userId = session.user.id;

  next();
}
