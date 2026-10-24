'use client';

import { GuidePageHeader } from '@/components/custom-ui/GuidePageHeader';
import { GuidePageContent } from '@/components/custom-ui/GuidePageContent';
import { FormProcessor } from '@/context/FormProcessor';
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
