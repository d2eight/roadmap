import { GuideModel } from '@/libs/db/generated/prisma/models/Guide';
import { GuideCard } from './GuideCard';

export function Guides({ guides }: { guides: GuideModel[] }) {
  return (
    <div className="grid grid-cols-3">
      {guides.map((guide: GuideModel) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
    </div>
  );
}
