import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { socialLinks } from "@/lib/nav-data"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="container py-24 md:py-32 space-y-8">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <Badge className="px-3 py-1 text-sm">Available for work</Badge>
            <h1 className="text-4xl md:text-6xl font-bold">Full Stack Developer</h1>
            <p className="text-xl text-muted-foreground">
              I build exceptional and accessible digital experiences for the web.
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" /> Resume
              </Link>
            </Button>
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
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-background bg-muted">
            <video
              src="/image/avatar.mp4"
              width={520}
              height={520}
              className="object-cover rounded-full"
              autoPlay
              loop
              muted
              playsInline
            />

          </div>
        </div>
      </div>
    </section>
  )
}
