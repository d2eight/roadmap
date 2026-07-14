'use client';

import { GuideModel } from '@/libs/db/generated/prisma/models/Guide';
import GuideQuestionsForm from '@/apps/frontend/src/components/forms/GuideQuestionsForm';
import GuideComponent from '@/apps/frontend/src/app/guides/[id]/GuideComponent';
import { notFound } from 'next/navigation';
import { GuideContext } from './GuideContextParent';
import { JSX, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Socket } from 'node:net';
import { GuideStatus } from '@/libs/db/generated/prisma/enums';
import { AuthContext } from '../../../context/AuthContext';
import { SocketContext } from '../../../context/SocketContext';
import { SkeletonBasic } from '../../../components/custom-ui/SkeletonBasic';
import { GuideModelWithRelations } from 'shared-types';

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
        return <GuideQuestionsForm />;
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
