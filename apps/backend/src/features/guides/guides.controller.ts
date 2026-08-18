import express from 'express';
import * as guidesService from './guides.service';
import {
  answeredQuestionsSchemaType,
  ApiResponse,
  GuideModelWithRelations,
  promptSchemaType,
} from 'shared-types';
import { GuideModel } from '@/libs/db/generated/prisma/models/Guide';
import { io } from '../../main';
import { authMiddleware } from '../../middlewares/auth';
import { GuideStepModel } from '@/libs/db/generated/prisma/models/GuideStep';

export async function createGuideBasic(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const promptData: promptSchemaType = res.locals.promptData;

  if (promptData.externalAiQuestionsStatus) {
    return res.status(422).json({
      success: false,
      error: {
        message: 'Invalid data',
      },
    });
  }

  const userId: string = res.locals.userId;

  try {
    const guideId = await guidesService.create(promptData.prompt, userId);

    return res.status(200).json({
      success: true,
      data: guideId,
    });
  } catch (error) {
    console.error('Failed to create guide:', error);

    return res.status(500).json({
      success: false,
      error: {
        message: 'Something went wrong',
      },
    });
  }
}

export async function createGuideQuestions(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const promptData: promptSchemaType = res.locals.promptData;

  if (!promptData.externalAiQuestionsStatus) {
    return res.status(422).json({
      success: false,
      error: {
        message: 'Invalid data',
      },
    });
  }

  const userId: string = res.locals.userId;

  try {
    const guideId = await guidesService.createQuestions(
      promptData.prompt,
      userId,
    );

    return res.status(200).json({
      success: true,
      data: guideId,
    });
  } catch (error) {
    console.error('Failed to create guide:', error);

    return res.status(500).json({
      success: false,
      error: {
        message: 'Something went wrong',
      },
    });
  }
}

export async function createGuideAnsweredQuestions(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const answeredQuestions: answeredQuestionsSchemaType = res.locals.answeredQuestions;
  const userId: string = res.locals.userId;
  const guideId: string = req.params.guideId as string;
  const prompt: string = res.locals.prompt;

  try {
    await guidesService.createWithAnsweredQuestions(
      prompt,
      answeredQuestions,
      guideId,
      userId,
    );

    return res.status(200);
  } catch (error) {
    console.error('Failed to create guide:', error);

    return res.status(500).json({
      success: false,
      error: {
        message: 'Something went wrong',
      },
    });
  }
}

export async function removeGuide(req: express.Request, res: express.Response) {
  const userId: string = res.locals.userId;
  const guideId = req.params.guideId as string;

  try {
    await guidesService.remove(guideId, userId);
    return res.status(200).json({
      success: true,
      data: guideId,
    });
  } catch (error) {
    console.error('Failed to delete guide:', error);

    return res.status(500);
  }
}

export async function updateGuide(req: express.Request, res: express.Response) {
  const userId: string = res.locals.userId;
  const guideId = req.params.guideId as string;
  const steps: GuideStepModel[] = res.locals.steps;

  try {
    await guidesService.update(guideId, userId, steps);

    return res.status(200).json({
      success: true,
      data: steps,
    })
  } catch (error) {
    console.error('Failed to update guide:', error);

    return res.status(500);
  }
}
