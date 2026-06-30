import {GuideContext} from "@/apps/frontend/src/app/guides/[id]/GuideContextParent";
import {useContext} from "react";
import {Controller, useForm} from "react-hook-form";
import {GuideWithQuestions, questionsSchema, questionsSchemaType} from "shared-types";
import {zodResolver} from "@hookform/resolvers/zod";

export default function GuideQuestionsForm() {
  const guide: GuideWithQuestions = useContext(GuideContext);

  const form = useForm<questionsSchemaType>({
    resolver: zodResolver(questionsSchema),
    defaultValues: {
      AiQuestionABCD: {
        answer: "A",
        customAnswer: ""
      },
      AiQuestion: "",
      AiQuestionRange: 0,
      AiQuestionCheckbox: []
    }
  });
  

  return <>
    <form id="guide-questions">
      <Controller control={form.control} name="AiQuestionABCD" render={({field, fieldState}) => {
        return <></>
      }}/>
    </form>
  </>
}