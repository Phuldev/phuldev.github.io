import type { BlogPost } from "@/lib/types"

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Responsive Layouts with Tailwind CSS",
    slug: "building-responsive-layouts-with-tailwind-css",
    excerpt: "Learn how to create responsive web layouts quickly and efficiently using Tailwind CSS utility classes.",
    content: `Tailwind CSS has revolutionized the way developers approach CSS. Instead of writing custom CSS, you can apply pre-defined utility classes directly in your HTML to build complex designs.

    In this article, we'll explore how to create responsive layouts using Tailwind's responsive modifiers. We'll start with a simple layout and progressively enhance it to work across different screen sizes.

    Tailwind uses a mobile-first approach, which means that utility classes without a screen size prefix apply to all screen sizes, while prefixed versions (like md: or lg:) apply only at that breakpoint and above.

    Let's start by creating a simple card component that adapts to different screen sizes. On mobile, the card will take up the full width, but on larger screens, we'll display multiple cards in a row.

    The key to responsive design with Tailwind is using its responsive modifiers like sm:, md:, lg:, and xl:. These modifiers allow you to apply different styles at different breakpoints.

    For example, to create a grid that shows one column on mobile and three columns on desktop, you would use: grid grid-cols-1 md:grid-cols-3.

    This approach allows you to build complex responsive layouts without writing a single line of custom CSS. It's efficient, maintainable, and makes your codebase more consistent.`,
    date: "2023-11-15",
    coverImage: "/placeholder.svg?height=400&width=600",
    tags: ["Tailwind CSS", "Responsive Design", "CSS", "Web Development"],
    readingTime: 5,
  },
  {
    id: "2",
    title: "Understanding React Server Components in Next.js",
    slug: "understanding-react-server-components-in-nextjs",
    excerpt: "Dive into React Server Components and learn how they improve performance in Next.js applications.",
    content: `React Server Components represent a paradigm shift in how we build React applications. They allow components to run on the server, reducing the JavaScript bundle sent to the client and improving performance.

    Next.js has integrated Server Components as a core feature in the App Router. In this article, we'll explore what Server Components are, how they work, and when to use them in your Next.js applications.

    Server Components run on the server and don't require client-side JavaScript. This means they can access server-side resources directly, like databases or file systems, without needing API routes.

    One of the key benefits of Server Components is that they reduce the amount of JavaScript sent to the client. Since they execute on the server, their code doesn't need to be included in the client bundle.

    However, Server Components have limitations. They can't use hooks, can't maintain state, and can't use browser APIs. For interactive components, you'll still need Client Components.

    In Next.js, all components in the App Router are Server Components by default. To make a component a Client Component, you need to add the "use client" directive at the top of the file.

    The best practice is to use Server Components for as much of your UI as possible, and only use Client Components when you need interactivity or browser APIs.

    By understanding when to use Server Components versus Client Components, you can optimize your Next.js application for performance while maintaining the interactivity that users expect.`,
    date: "2023-12-05",
    coverImage: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Next.js", "Server Components", "Performance"],
    readingTime: 7,
  },
  {
    id: "3",
    title: "Implementing Authentication in Next.js Applications",
    slug: "implementing-authentication-in-nextjs-applications",
    excerpt: "A comprehensive guide to adding authentication to your Next.js projects using NextAuth.js.",
    content: `Authentication is a critical aspect of most web applications. In this guide, we'll walk through implementing authentication in a Next.js application using NextAuth.js.

    NextAuth.js is a complete authentication solution for Next.js applications. It supports various authentication providers, including OAuth services like Google and GitHub, as well as email/password authentication.

    We'll start by installing NextAuth.js and configuring it with a few authentication providers. Then, we'll create protected routes that only authenticated users can access.

    One of the advantages of NextAuth.js is its seamless integration with Next.js. It provides hooks and utilities that make it easy to check authentication status and protect routes.

    For example, you can use the useSession hook to check if a user is authenticated in client components, and the getServerSession function to verify authentication in server components or API routes.

    We'll also cover how to customize the sign-in and sign-out pages to match your application's design, as well as how to handle authentication callbacks for more complex scenarios.

    By the end of this guide, you'll have a solid understanding of how to implement authentication in your Next.js applications and provide a secure, user-friendly experience for your users.`,
    date: "2024-01-20",
    coverImage: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Authentication", "NextAuth.js", "Security"],
    readingTime: 10,
  },
]
