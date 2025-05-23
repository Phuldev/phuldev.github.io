import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { socialLinks } from "@/lib/nav-data"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Phuldev Mandal. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                {link.icon === "Github" && <Github className="h-5 w-5" />}
                {link.icon === "Linkedin" && <Linkedin className="h-5 w-5" />}
                {link.icon === "Mail" && <Mail className="h-5 w-5" />}
                <span className="sr-only">{link.label}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
