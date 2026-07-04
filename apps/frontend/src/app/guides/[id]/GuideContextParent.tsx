"use client"

import {GuideModel} from "@/libs/db/generated/prisma/models/Guide";
import {createContext, ReactNode} from "react";

export const GuideContext = createContext<GuideModel>(null!);

export default function GuideContextParent({guide, children}: {guide: GuideModel, children: ReactNode}) {

  return (
    <GuideContext value={guide}>
      {children}
    </GuideContext>
  )
}
