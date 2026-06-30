import express from 'express';
import {authMiddleware} from "@/apps/backend/src/middlewares/auth";
import {
  createGuideBasic,
  createGuideQuestions
} from "@/apps/backend/src/features/guides/guides.controller";
import {promptValidationMiddleware} from "@/apps/backend/src/middlewares/prompt";

export const guidesRouter = express.Router();

guidesRouter.post('/api/create-guide', authMiddleware, promptValidationMiddleware, createGuideBasic);

guidesRouter.post('/api/create-guide-questions', authMiddleware, promptValidationMiddleware, createGuideQuestions)

