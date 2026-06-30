import {redirect} from "next/navigation";
import {auth} from "auth";
import {headers} from "next/headers";
import {Session, User} from "better-auth";
import verifySession from "@/apps/frontend/src/middlewares/auth";
import {PromptForm} from "@/apps/frontend/src/components/forms/promptForm";

export default async function PromptingPage() {

  await verifySession();

  return <>
    <PromptForm />
  </>

}
