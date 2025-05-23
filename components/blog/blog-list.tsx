import BlogCard from "@/components/blog/blog-card"
import type { BlogPost } from "@/lib/types"

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post?.slug} post={post} />
      ))}
    </div>
  )
}
