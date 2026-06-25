import { Button } from "@/apps/frontend/src/components/ui/button"

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-24 bg-background text-foreground">
      <h1 className="text-3xl font-extrabold tracking-tight">shadcn/ui Installed!</h1>
      <p className="text-muted-foreground text-sm max-w-md text-center">
        This Next.js app in the NX monorepo is now configured with shadcn/ui and Tailwind CSS v4.
      </p>
      <div className="flex gap-2">
        <Button>Default Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="destructive">Destructive Button</Button>
        <Button variant="outline">Outline Button</Button>
      </div>
    </div>
  )
}
