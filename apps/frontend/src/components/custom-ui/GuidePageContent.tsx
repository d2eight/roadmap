import { useContext } from 'react';
import { GuideContext } from '@/context/GuideContext';
import { GuideSkeleton } from '@/components/custom-ui/GuideSkeleton';
import { notFound } from 'next/navigation';
import { GuideQuestions } from '@/components/custom-ui/GuideQuestions';
import { GuideForm } from '@/components/forms/GuideForm';

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
      return <GuideForm />;
    default:
      return notFound();
  }
}
