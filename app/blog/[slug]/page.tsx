import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/sanity";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  content?: Array<{
    _type: string;
    _key: string;
    children?: Array<{
      _type: string;
      text: string;
    }>;
  }>;
  publishedAt: string;
  category?: string;
}

// Placeholder post for demo
const placeholderPost: BlogPost = {
  _id: "demo",
  title: "Getting Started: A Guide to Success",
  slug: { current: "getting-started" },
  excerpt: "Learn the fundamental principles that will set you on the path to achieving your goals.",
  content: [
    {
      _type: "block",
      _key: "1",
      children: [
        {
          _type: "span",
          text: "Success doesn't happen overnight. It's the result of consistent effort, strategic planning, and a willingness to learn from both successes and failures.",
        },
      ],
    },
    {
      _type: "block",
      _key: "2",
      children: [
        {
          _type: "span",
          text: "In this guide, we'll explore the fundamental principles that can help you achieve your goals and build a foundation for long-term success.",
        },
      ],
    },
  ],
  publishedAt: new Date().toISOString(),
  category: "Guides",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  let post: BlogPost | null = null;
  try {
    post = await getBlogPost(slug);
  } catch (error) {
    console.error("Error fetching blog post:", error);
  }

  if (!post && slug !== "getting-started") {
    return {
      title: "Post Not Found",
    };
  }

  const displayPost = post || placeholderPost;

  return {
    title: displayPost.title,
    description: displayPost.excerpt,
  };
}

export async function generateStaticParams() {
  let posts: BlogPost[] = [];
  try {
    posts = await getBlogPosts();
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Simple portable text renderer
function renderContent(content: BlogPost["content"]) {
  if (!content) return null;

  return content.map((block) => {
    if (block._type === "block" && block.children) {
      const text = block.children.map((child) => child.text).join("");
      return (
        <p key={block._key} className="mb-4">
          {text}
        </p>
      );
    }
    return null;
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post: BlogPost | null = null;

  try {
    post = await getBlogPost(slug);
  } catch (error) {
    console.error("Error fetching blog post:", error);
  }

  // Use placeholder for demo slugs
  if (!post) {
    if (slug === "getting-started" || slug === "productivity-tips" || slug === "strategic-planning") {
      post = { ...placeholderPost, slug: { current: slug } };
    } else {
      notFound();
    }
  }

  return (
    <>
      {/* Article Header */}
      <section className="bg-white py-16 dark:bg-zinc-950 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Blog
          </Link>

          <div className="mt-8">
            {post.category && (
              <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                {post.category}
              </span>
            )}
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              {post.title}
            </h1>
            <time
              dateTime={post.publishedAt}
              className="mt-4 block text-sm text-zinc-500 dark:text-zinc-500"
            >
              {formatDate(post.publishedAt)}
            </time>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-zinc-50 py-16 dark:bg-zinc-900 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <article className="prose prose-zinc dark:prose-invert max-w-none">
            {post.content ? (
              renderContent(post.content)
            ) : post.excerpt ? (
              <p>{post.excerpt}</p>
            ) : (
              <p className="text-zinc-600 dark:text-zinc-400">
                Content coming soon. Check back later for the full article.
              </p>
            )}
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Want to learn more?
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Get in touch to discuss how I can help with your project.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
