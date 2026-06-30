import verifySession from "@/apps/frontend/src/middlewares/auth";
import {notFound} from "next/navigation";
import {getGuide} from "utils";
import GuideContextParent from "@/apps/frontend/src/app/guides/[id]/GuideContextParent";
import GuidePage from "@/apps/frontend/src/app/guides/[id]/GuidePage";

type PageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function GuideServerPage({params}: PageProps) {

  const session = await verifySession();

  const resolvedParams = await params;

  const guide = await getGuide(session.user.id, resolvedParams.id);

  if(!guide) {
    notFound();
  }

  return <>
    <GuideContextParent guide={guide}>
      <GuidePage />
    </GuideContextParent>
  </>


}
