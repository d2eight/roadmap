'use client';

import GuideQuestionsForm from '../../../components/forms/GuideQuestionsForm';
import GuideComponent from './GuideComponent';
import { notFound } from 'next/navigation';
import { useContext } from 'react';
import { SkeletonBasic } from '../../../components/custom-ui/SkeletonBasic';
import { FormProcessor } from '../../../components/wrappers/FormProcessor';
import { GuideContext } from '../../../context/GuideContext';
import { GuideStatus } from '../../../../../../libs/db/generated/prisma/enums';

export default function GuidePage() {
  const { guide } = useContext(GuideContext);

  const guidePageContent = (status: GuideStatus) => {
    switch (status) {
      case 'INIT':
      case 'QUESTIONS_GENERATION':
      case 'GUIDE_GENERATION':
        return <SkeletonBasic />;
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
      <h1>{guide.prompt}</h1>
      <div>{guidePageContent(guide.status)}</div>
    </>
  );
}
