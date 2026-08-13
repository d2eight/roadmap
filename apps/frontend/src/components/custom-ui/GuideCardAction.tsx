import { CardAction } from '@/components/ui/card';
import { DeleteGuideButton } from '@/components/custom-ui/DeleteGuideButton';

export function GuideCardAction({mutate}: {mutate: () => void}) {

  return (
    <CardAction>
      <DeleteGuideButton mutate={mutate} />
    </CardAction>
  );
}
