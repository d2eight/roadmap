'use client';

import { GuidePageHeader } from '@/components/custom-ui/GuidePageHeader';
import { GuidePageContent } from '@/components/custom-ui/GuidePageContent';
import { FormProcessor } from '@/components/wrappers/FormProcessor';

export default function GuidePage() {
  return (
    <>
      <FormProcessor>
        <GuidePageHeader />
        <GuidePageContent />
      </FormProcessor>
    </>
  );
}
