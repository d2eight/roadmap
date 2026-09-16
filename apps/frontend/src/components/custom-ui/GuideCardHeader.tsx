import { CardHeader } from '@/components/ui/card';
import { GuideCardTitle } from '@/components/custom-ui/GuideCardTitle';
import { GuideCardDescription } from '@/components/custom-ui/GuideCardDescription';
import { GuideCardAction } from '@/components/custom-ui/GuideCardAction';

export function GuideCardHeader() {
  return (
    <CardHeader>
      <GuideCardTitle />
      <GuideCardDescription />
      <GuideCardAction />
    </CardHeader>
  );
}
