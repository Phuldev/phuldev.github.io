import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blog-data"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found | DevPortfolio",
    }
  }

  return {
    title: `${post.title} | DevPortfolio Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="flex-1">
      <article className="container py-16 max-w-3xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
          </Link>
        </Button>

        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  )
}
