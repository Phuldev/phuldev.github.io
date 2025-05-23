"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import ThemeToggle from "@/components/theme/theme-toggle"
import { navLinks } from "@/lib/nav-data"

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-bold text-xl">
          <Link href="/">Phuldev Mandal</Link>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={isHomePage ? link.href : `/${link.href}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild>
            <Link href={isHomePage ? "#contact" : "/#contact"}>Hire Me</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
