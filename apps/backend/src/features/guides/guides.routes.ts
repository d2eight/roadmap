import express from 'express';
import {authMiddleware} from "@/apps/backend/src/middlewares/auth";
import {
  createGuideAnsweredQuestions,
  createGuideBasic,
  createGuideQuestions
} from "@/apps/backend/src/features/guides/guides.controller";
import {promptValidationMiddleware} from "@/apps/backend/src/middlewares/prompt";
import {guideMiddleware} from "@/apps/backend/src/middlewares/guide";
import {questionsValidationMiddleware} from "@/apps/backend/src/middlewares/promptWithQuestions";

export const guidesRouter = express.Router();

guidesRouter.post('/api/create-guide', authMiddleware, promptValidationMiddleware, createGuideBasic);

guidesRouter.post('/api/create-guide-questions', authMiddleware, promptValidationMiddleware, createGuideQuestions)

guidesRouter.post('/api/create-guide-answered-questions/:guideId', authMiddleware, questionsValidationMiddleware, guideMiddleware, createGuideAnsweredQuestions)

