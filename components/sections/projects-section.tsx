"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { projects } from "@/lib/project-data"

export default function ProjectsSection() {
  // Sort projects by latest (assuming latest are at the end)
  const sortedProjects = [...projects].reverse()

  const [visibleCount, setVisibleCount] = useState(3)
  const visibleProjects = sortedProjects.slice(0, visibleCount)

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3)
  }

  return (
    <section id="projects" className="bg-muted py-16 md:py-24">
      <div className="container space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and personal projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github}>
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More button if there are more projects to show */}
        {visibleCount < sortedProjects.length && (
          <div className="text-center">
            <Button variant="outline" onClick={handleViewMore}>
              View More
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
