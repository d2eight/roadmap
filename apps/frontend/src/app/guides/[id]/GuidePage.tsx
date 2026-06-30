"use client"

import {GuideModel} from "@/libs/db/generated/prisma/models/Guide";
import GuideQuestionsForm from "@/apps/frontend/src/components/forms/GuideQuestionsForm";
import GuideComponent from "@/apps/frontend/src/app/guides/[id]/GuideComponent";
import {notFound} from "next/navigation";
import {GuideContext} from "@/apps/frontend/src/app/guides/[id]/GuideContextParent";
import {useContext} from "react";

export default function GuidePage() {
  const guide = useContext(GuideContext);

  switch (guide?.status) {
    case "INIT":
    case "QUESTIONS_GENERATION":
    case "GUIDE_GENERATION":
      return <h1>Loading...</h1>
    case "QUESTIONS_GENERATED":
      return <GuideQuestionsForm />
    case "GUIDE_GENERATED":
      return <GuideComponent />
    default:
      return notFound();
  }

  return <></>
}

