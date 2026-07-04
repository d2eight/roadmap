import express from "express";
import {prisma} from "database";

export async function guideMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
  const userId: string = res.locals.userId;
  const guideId = req.params.guideId as string;

  try {
    const guide = await prisma.guide.findUnique({
      where: {
        id: guideId,
        userId: userId
      }
    })
    res.locals.prompt = guide.prompt;
    next();
  } catch (error) {
    return res.status(404).json({
      success: false,
      error: {
        message: "Such guide does not exist"
      }
    })
  }
}
