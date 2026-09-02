import express from 'express';
import * as guidesService from './guides.service';
import {
  answeredQuestionsSchemaType,
  paramsSchemaType,
  promptSchemaType,
} from 'shared-types';
import { GuideStepModel } from '@/libs/db/generated/prisma/models/GuideStep';
import { getGuides } from 'utils';

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
  const answeredQuestions: answeredQuestionsSchemaType =
    res.locals.answeredQuestions;
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
  const params: paramsSchemaType = res.locals.params;
  try {
    await guidesService.remove(guideId, userId);

    const response = res.status(200);

    const jsonResponse = {
      success: true,
      data: guideId,
    };

    if (params) {
      const guides = await getGuides({
        pageSize: 1,
        userId: userId,
        params: params,
      });
      jsonResponse['guides'] = guides;
    }

    response.json(jsonResponse);

    return response;
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
    });
  } catch (error) {
    console.error('Failed to update guide:', error);

    return res.status(500);
  }
}
