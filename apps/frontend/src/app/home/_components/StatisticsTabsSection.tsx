import { useClientHandleApiError } from '../../../utils/apiErrorsHandler';
import { useSuspenseQuery } from '@tanstack/react-query';
import { UsersStatistics } from 'shared-types';
import { fetchStatistics } from '../../../utils/guideApiActions';
import { TabsContent } from '../../../components/ui/tabs';
import { DataTable } from '../../../components/custom-ui/DataTable';

export function StatisticsTabsSection() {
    const { clientHandleApiError } = useClientHandleApiError();

    const requestBody: RequestInit = {
        method: 'GET',
    };
    const { data } = useSuspenseQuery<UsersStatistics>({
        queryKey: ['statistics'],
        queryFn: async () => {
            const result = await fetchStatistics({ requestBody });

            if (result.isErr()) {
                clientHandleApiError({
                    error: result.error,
                    redirect: false,
                });
                throw result.error;
            }

            return result.value.data;
        },
    });

    return (
        <>
            <TabsContent value="guides">
                <DataTable data={data.guidesCounts} />
            </TabsContent>
            <TabsContent value="steps">
                <DataTable data={data.stepsCounts} />
            </TabsContent>
        </>
    );
}
