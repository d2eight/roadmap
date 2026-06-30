import express from "express";
import * as guidesService from "./guides.service"
import {ApiResponse, promptSchemaType} from "shared-types";
import {GuideModel} from "@/libs/db/generated/prisma/models/Guide";

export async function createGuideBasic(req: express.Request, res: express.Response<ApiResponse<GuideModel>>, next: express.NextFunction) {
  const promptData: promptSchemaType = res.locals.promptData;
  const userId: string = res.locals.userId;

  try {
    const newGuide = await guidesService.create(promptData, userId);

    return res.status(200).json({
      success: true,
      data: newGuide
    });
  } catch (error) {
    console.error("Failed to create guide:", error);

    return res.status(500).json({
      success: false,
      error: {
        message: "Something went wrong",
      }
    })
  }
}

export async function createGuideQuestions(req: express.Request, res: express.Response<ApiResponse<GuideModel>>, next: express.NextFunction) {
  const promptData: promptSchemaType = res.locals.promptData;
  const userId: string = res.locals.userId;

  try {
    const newGuide = await guidesService.createQuestions(promptData, userId);

    return res.status(200).json({
      success: true,
      data: newGuide
    });
  } catch (error) {
    console.error("Failed to create guide:", error);

    return res.status(500).json({
      success: false,
      error: {
        message: "Something went wrong",
      }
    })
  }
}


