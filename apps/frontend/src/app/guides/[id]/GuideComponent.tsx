import {useContext} from "react";
import {GuideContext} from "@/apps/frontend/src/app/guides/[id]/GuideContextParent";

export default function GuideComponent() {
  const guide = useContext(GuideContext);
  console.log(guide);

  return <></>
}