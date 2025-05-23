import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/types"

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-video relative">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4 space-y-3">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div>
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            <h3 className="text-xl font-bold">{post.title}</h3>
          </Link>
          <p className="text-muted-foreground mt-2">{post.excerpt}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
      </CardContent>
    </Card>
  )
}
