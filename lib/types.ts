export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
  github?: string
  demo: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  coverImage: string
  tags: string[]
  readingTime: number
}
