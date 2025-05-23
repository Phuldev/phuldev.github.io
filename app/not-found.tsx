import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-16 md:py-24">
      <div className="container max-w-md text-center space-y-6">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground">The page you are looking for doesn&apos;t tere exist or has been moved.</p>
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </main>
  )
}
