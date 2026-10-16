'use client';

import { GuidePageHeader } from '@/components/custom-ui/GuidePageHeader';
import { GuidePageContent } from '@/components/custom-ui/GuidePageContent';
import { FormProcessor } from '@/components/wrappers/FormProcessor';
import { GuideNotFound } from '@/components/custom-ui/GuideNotFound';
import { useContext } from 'react';
import { GuideContext } from '@/context/GuideContext';
import { MobileGuidePageFooter } from '@/components/custom-ui/MobileGuidePageFooter';

export default function GuidePage() {
  const guideContext = useContext(GuideContext);

  return (
    <>
      {guideContext ? (
        <FormProcessor>
          <GuidePageHeader />
          <GuidePageContent />
          <MobileGuidePageFooter />
        </FormProcessor>
      ) : (
        <GuideNotFound />
      )}
    </>
  );
}
