import { JSX, useContext, useMemo } from 'react';
import { GuideContext } from '@/context/GuideContext';
import { GuideHeader } from '@/components/custom-ui/GuideHeader';
import { GuideQuestionsHeader } from '@/components/custom-ui/GuideQuestionsHeader';
import { GuideHeaderWrapper } from '@/components/custom-ui/GuideHeaderWrapper';
import { GuideLoadingHeader } from '@/components/custom-ui/GuideLoadingHeader';
import { GuideFailedHeader } from '@/components/custom-ui/GuideFailedHeader';

export function GuidePageHeader() {
  const { status } = useContext(GuideContext);

  switch (status) {
    case 'INIT':
    case 'GUIDE_GENERATION':
    case 'QUESTIONS_GENERATION':
      return (
        <GuideHeaderWrapper>
          <GuideLoadingHeader />
        </GuideHeaderWrapper>
      );
      break;
    case 'GUIDE_GENERATED':
      return (
        <GuideHeaderWrapper>
          <GuideHeader />
        </GuideHeaderWrapper>
      );
      break;
    case 'QUESTIONS_GENERATED':
      return (
        <GuideHeaderWrapper>
          <GuideQuestionsHeader />
        </GuideHeaderWrapper>
      );
      break;
    default:
      return (
        <GuideHeaderWrapper>
          <GuideFailedHeader />
        </GuideHeaderWrapper>
      );
      break;
  }
}
