import { Button } from "@/apps/frontend/src/components/ui/button"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
        <Button>Sign Up with Email</Button>
      </div>
    </div>
  )
}
