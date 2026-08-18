'use client'

import { FormProcessor } from '@/components/wrappers/FormProcessor';
import GuideQuestionsForm from '@/components/forms/GuideQuestionsForm';

export function GuideQuestions() {

  return (
    <FormProcessor>
      <GuideQuestionsForm />
    </FormProcessor>
  );
}
