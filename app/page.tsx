import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import SkillsSection from "@/components/sections/skills-section"
import ProjectsSection from "@/components/sections/projects-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
