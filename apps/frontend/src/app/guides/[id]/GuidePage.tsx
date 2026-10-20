'use client';

import { GuidePageHeader } from '@/components/custom-ui/GuidePageHeader';
import { GuidePageContent } from '@/components/custom-ui/GuidePageContent';
import { FormProcessor } from '@/components/wrappers/FormProcessor';
import { GuideNotFound } from '@/components/custom-ui/GuideNotFound';
import { useContext } from 'react';
import { GuideContext } from '@/context/GuideContext';
import { GuidePageFooter } from '@/components/custom-ui/GuidePageFooter';

export default function GuidePage() {
  return (
    <FormProcessor>
      <GuidePageHeader />
      <GuidePageContent />
      <GuidePageFooter />
    </FormProcessor>
  );
}
