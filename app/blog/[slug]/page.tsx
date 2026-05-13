import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen pt-32 pb-28">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="text-[9px] tracking-[2px] text-muted hover:text-cyan uppercase mb-10 inline-block transition-colors"
        >
          ← Back to Blog
        </Link>

        {/* Post header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 text-[9px] text-muted tracking-wide mb-4">
            <span>{post.date}</span>
            <span className="text-border">·</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="font-rajdhani text-4xl md:text-5xl font-bold tracking-widest uppercase text-txt leading-tight mb-4">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-[11px] text-muted leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[8px] px-2 py-0.5 border border-cyan/25 text-cyan bg-cyan/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-10" />

        {/* MDX content */}
        <article className="prose-xsys">
          <MDXRemote source={post.content} />
        </article>

        {/* Footer */}
        <div className="border-t border-border mt-16 pt-8">
          <Link
            href="/blog"
            className="text-[9px] tracking-[2px] text-muted hover:text-cyan uppercase transition-colors"
          >
            ← All Posts
          </Link>
        </div>
      </div>
    </div>
  );
}
