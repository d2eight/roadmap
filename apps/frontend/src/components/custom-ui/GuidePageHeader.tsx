import { JSX, useContext, useMemo } from 'react';
import { GuideContext } from '@/context/GuideContext';
import { GuideHeader } from '@/components/custom-ui/GuideHeader';
import { GuideQuestionsHeader } from '@/components/custom-ui/GuideQuestionsHeader';
import { GuideHeaderWrapper } from '@/components/custom-ui/GuideHeaderWrapper';
import { GuideLoadingHeader } from '@/components/custom-ui/GuideLoadingHeader';

export function GuidePageHeader() {
  const { status } = useContext(GuideContext);

  let header: JSX.Element = <></>;

  switch (status) {
    case 'GUIDE_GENERATED':
      header = <GuideHeader />;
      break;
    case 'QUESTIONS_GENERATED':
      header = <GuideQuestionsHeader />;
      break;
    default:
      header = <GuideLoadingHeader />;
      break;
  }

  return <GuideHeaderWrapper>
    {header}
  </GuideHeaderWrapper>
}

