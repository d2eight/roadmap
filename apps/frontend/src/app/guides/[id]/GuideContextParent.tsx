"use client"

import {GuideModel} from "@/libs/db/generated/prisma/models/Guide";
import {createContext, ReactNode} from "react";
import {GuideWithQuestions} from "shared-types";

export const GuideContext = createContext<GuideWithQuestions>(null!);

export default function GuideContextParent({guide, children}: {guide: GuideWithQuestions, children: ReactNode}) {

  return (
    <GuideContext value={guide}>
      {children}
    </GuideContext>
  )
}
