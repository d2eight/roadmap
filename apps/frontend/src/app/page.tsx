import { Button } from "@/apps/frontend/src/components/ui/button"
import Link from "next/link";

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-24 bg-background text-foreground">
      <h1>Go to the app!</h1>
      <Button>
        <Link href="/auth/sign-up">Sign Up</Link>
      </Button>
    </div>
  )
}
