import {auth} from "auth";
import express from "express";
import {fromNodeHeaders} from "better-auth/node";
import {ApiErrorResponse} from "shared-types";

export async function authMiddleware(req: express.Request, res: express.Response<ApiErrorResponse>, next: express.NextFunction) {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  })
  console.log(session);
  if (!session) {
    return res.status(401).json({
      success: false,
      error: {
        message: "Unauthorized user"
      }
    })
  }

  res.locals.userId = session.user.id;

  next();
}
