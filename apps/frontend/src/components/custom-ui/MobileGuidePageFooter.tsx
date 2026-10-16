import { UpdateProgressButton } from '@/components/custom-ui/UpdateProgressButton';

export function MobileGuidePageFooter() {
  return (
    <div className="fixed bottom-[calc(16px+env(safe-area-inset-bottom))] left-5 right-5 block xl:hidden">
      <UpdateProgressButton className="w-full h-12.5">
        Update
      </UpdateProgressButton>
    </div>
  );
}
