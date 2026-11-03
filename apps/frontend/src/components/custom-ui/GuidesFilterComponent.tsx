import { Card, CardAction, CardFooter, CardHeader } from '../ui/card';
import { FilterForm } from '../forms/FilterForm';
import { ApplyFiltersButton } from './ApplyFiltersButton';
import { CreateGuideButton } from './CreateGuideButton';

export function GuidesFilterComponent() {
    return (
        <Card className="rounded-none shadow-none! flex flex-col justify-between">
            <CardHeader>
                <FilterForm />
                <CardAction className="hidden xl:block">
                    <div className="flex flex-row gap-2.5">
                        <ApplyFiltersButton />
                        <CreateGuideButton pushToGuideStatus={false} />
                    </div>
                </CardAction>
            </CardHeader>
            <CardFooter className="xl:hidden">
                <ApplyFiltersButton />
            </CardFooter>
        </Card>
    );
}
