'use client';

import GuideQuestionsForm from '../../../components/forms/GuideQuestionsForm';
import GuideComponent from './GuideComponent';
import { notFound } from 'next/navigation';
import { JSX, useContext, useEffect, useState } from 'react';
import { GuideStatus } from '@/libs/db/generated/prisma/enums';
import { SocketContext } from '../../../context/SocketContext';
import { SkeletonBasic } from '../../../components/custom-ui/SkeletonBasic';
import { GuideModelWithRelations } from 'shared-types';
import { FormProcessor } from '../../../components/wrappers/FormProcessor';
import { GuideContext } from '../../../context/GuideContext';

export default function GuidePage() {
  const { guide, setGuide } = useContext(GuideContext);
  const socket = useContext(SocketContext);

  socket?.on('guide_update', (data: GuideModelWithRelations) => {
    setGuide({
      ...guide,
      ...data,
    });
  });

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
