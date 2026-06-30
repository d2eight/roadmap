import {headers} from "next/headers";
import {auth} from "auth";
import {redirect} from "next/navigation";
import {BetterAuthSession} from "shared-types";

export default async function verifySession() {
  const headersData = await headers();

  const session: BetterAuthSession = await auth.api.getSession({
    headers: headersData
  });

  if (!session) {
    redirect('/auth/sign-up/')
  }

  return session;
}

