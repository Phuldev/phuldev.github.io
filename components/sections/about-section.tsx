import { aboutData } from "@/lib/about-data"

export default function AboutSection() {
  return (
    <section id="about" className="bg-muted py-16 md:py-24">
      <div className="container space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate full-stack developer with a focus on creating intuitive and performant web applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {aboutData.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="bg-background p-4 rounded-lg">
                <h3 className="font-bold text-xl">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
