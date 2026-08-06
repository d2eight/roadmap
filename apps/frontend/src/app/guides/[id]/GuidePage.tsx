'use client';

import GuideQuestionsForm from '../../../components/forms/GuideQuestionsForm';
import GuideComponent from './GuideComponent';
import { notFound } from 'next/navigation';
import { useContext } from 'react';
import { FormProcessor } from '../../../components/wrappers/FormProcessor';
import { GuideContext } from '../../../context/GuideContext';
import { GuideSkeleton } from '@/components/custom-ui/GuideSkeleton';
import { GuideStatus } from 'database';

export default function GuidePage() {
  const { guide } = useContext(GuideContext);

  const guidePageContent = (status: GuideStatus) => {
    switch (status) {
      case 'INIT':
      case 'QUESTIONS_GENERATION':
      case 'GUIDE_GENERATION':
        return <GuideSkeleton prompt={guide.prompt} />;
      case 'QUESTIONS_GENERATED':
        return (
          <FormProcessor>
            <GuideQuestionsForm />
          </FormProcessor>
        );
      case 'GUIDE_GENERATED':
        return <GuideComponent />;
      default:
        return notFound();
    }
  };

  return (
    <>
      <div>{guidePageContent(guide.status)}</div>
    </>
  );
}
