import { useContext } from 'react';
import { GuideContext } from '@/context/GuideContext';
import { GuideSkeleton } from '@/components/custom-ui/GuideSkeleton';
import { FormProcessor } from '@/components/wrappers/FormProcessor';
import GuideQuestionsForm from '@/components/forms/GuideQuestionsForm';
import Guide from '@/components/custom-ui/Guide';
import { notFound } from 'next/navigation';
import { GuideQuestions } from '@/components/custom-ui/GuideQuestions';

export function GuidePageContent() {
  const { guide, status } = useContext(GuideContext);

  switch (status) {
    case 'INIT':
    case 'QUESTIONS_GENERATION':
    case 'GUIDE_GENERATION':
      return <GuideSkeleton prompt={guide.prompt} />;
    case 'QUESTIONS_GENERATED':
      return <GuideQuestions />;
    case 'GUIDE_GENERATED':
      return <Guide />;
    default:
      return notFound();
  }
}
