import { skills } from "@/lib/skills-data"

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring products to life.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="bg-muted p-4 rounded-lg text-center">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
