import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, tips, and stories to help you on your journey.",
};

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  category?: string;
}

// Placeholder posts when Sanity has no content
const placeholderPosts = [
  {
    _id: "1",
    title: "Getting Started: A Guide to Success",
    slug: { current: "getting-started" },
    excerpt: "Learn the fundamental principles that will set you on the path to achieving your goals.",
    publishedAt: new Date().toISOString(),
    category: "Guides",
  },
  {
    _id: "2",
    title: "5 Tips for Better Productivity",
    slug: { current: "productivity-tips" },
    excerpt: "Discover practical strategies to maximize your efficiency and get more done.",
    publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    category: "Tips",
  },
  {
    _id: "3",
    title: "The Power of Strategic Planning",
    slug: { current: "strategic-planning" },
    excerpt: "Why having a clear strategy is essential for long-term success in any endeavor.",
    publishedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    category: "Strategy",
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  let posts: BlogPost[] = [];

  try {
    posts = await getBlogPosts();
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }

  // Use placeholder if no posts in Sanity
  const displayPosts = posts.length > 0 ? posts : placeholderPosts;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-24 dark:bg-zinc-950 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Insights, tips, and stories to inspire and guide you.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-zinc-50 py-24 dark:bg-zinc-900 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {displayPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {displayPosts.map((post) => (
                <article
                  key={post._id}
                  className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700"
                >
                  {post.category && (
                    <span className="mb-2 inline-flex w-fit items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200">
                      {post.category}
                    </span>
                  )}
                  <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt && (
                    <p className="mt-3 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="mt-4 flex items-center justify-between">
                    <time
                      dateTime={post.publishedAt}
                      className="text-xs text-zinc-500 dark:text-zinc-500"
                    >
                      {formatDate(post.publishedAt)}
                    </time>
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="text-sm font-medium text-zinc-900 hover:underline dark:text-white"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-zinc-600 dark:text-zinc-400">
                No blog posts yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
