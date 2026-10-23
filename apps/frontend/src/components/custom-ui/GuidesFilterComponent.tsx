import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FilterForm } from '@/components/forms/FilterForm';
import { ApplyFiltersButton } from '@/components/custom-ui/ApplyFiltersButton';
import { DialogContextProvider } from '@/context/DialogContext';
import { CreateGuideButton } from '@/components/custom-ui/CreateGuideButton';

export function GuidesFilterComponent() {
  return (
    <Card className="rounded-none shadow-none! flex flex-col justify-between">
      <CardHeader>
        <CardTitle>
          <FilterForm />
        </CardTitle>
        <CardAction className="hidden xl:block">
          {' '}
          <div className="flex flex-row gap-[10px]">
            <ApplyFiltersButton />
            <DialogContextProvider>
              <CreateGuideButton pushToGuideStatus={false} />
            </DialogContextProvider>
          </div>
        </CardAction>
      </CardHeader>
      <CardFooter className="xl:hidden">
        <ApplyFiltersButton />
      </CardFooter>
    </Card>
  );
}
