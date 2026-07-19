import { prisma } from 'database';
import { getUserIdFromHeaders } from '../../utils/getUserId';
import { Guides } from '../../components/custom-ui/Guides';

export default async function DashboardServerPage() {
  const userId = await getUserIdFromHeaders();

  const guides = await prisma.guide.findMany({
    where: {
      userId: userId,
    },
    include: {
      steps: true,
    },
  });

  return (
    <>
      <Guides guides={guides} />
    </>
  );
}
