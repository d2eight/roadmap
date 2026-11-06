import { FormProcessor } from '../../../../context/FormProcessor';
import { GuidePageContent } from '../../../../components/custom-ui/GuidePageContent';
import { GuidePageHeader } from '../../../../components/custom-ui/GuidePageHeader';
import { GuidePageFooter } from '../../../../components/custom-ui/GuidePageFooter';
import { GuideContextProvider } from '../../../../context/GuideContext';
import { getGuide } from 'utils';
import { getQueryClient } from '../../../../query/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function GuideSection({userId, guideId}: {userId: string, guideId: string}) {
    const queryClient = getQueryClient();

    await queryClient.fetchQuery({
        queryKey: ['guide', guideId],
        queryFn: () =>
            getGuide({
                userId,
                guideId,
            }),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <GuideContextProvider guideId={guideId}>
                <FormProcessor>
                    <GuidePageHeader />
                    <GuidePageContent />
                    <GuidePageFooter />
                </FormProcessor>
            </GuideContextProvider>
        </HydrationBoundary>
    );
}
