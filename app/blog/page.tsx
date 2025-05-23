import type { Metadata } from "next"
import BlogList from "@/components/blog/blog-list"
import { blogPosts } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog | DevPortfolio",
  description: "Technical articles and insights on web development and programming.",
}

export default function BlogPage() {
  return (
    <main className="flex-1">
      <section className="container py-16 md:py-24 space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical articles, tutorials, and insights on web development and programming.
          </p>
        </div>
        <BlogList posts={blogPosts} />
      </section>
    </main>
  )
}
