import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing about IT infrastructure, cloud, automation, and development.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-32 pb-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-[9px] tracking-[3px] text-cyan uppercase mb-2">
          // Blog
        </div>
        <h1 className="font-rajdhani text-5xl font-bold tracking-[3px] uppercase text-txt mb-3">
          Writing
        </h1>
        <p className="text-[11px] text-muted leading-relaxed mb-14">
          Notes on IT infrastructure, cloud, automation, and the things I&apos;m
          learning.
        </p>

        {posts.length === 0 ? (
          <div className="text-[11px] text-muted border border-border p-10 text-center font-mono">
            <div>
              <span className="text-cyan">$ </span>ls posts/
            </div>
            <div className="mt-2 text-dim">No posts yet — check back soon.</div>
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col md:flex-row md:items-center gap-4 bg-surface border border-border p-5 hover:border-cyan/30 transition-colors group"
              >
                {/* Date */}
                <div className="text-[9px] text-muted tracking-wide shrink-0 md:w-24">
                  {post.date}
                </div>

                {/* Main */}
                <div className="flex-1">
                  <h2 className="font-rajdhani text-xl font-semibold tracking-wide text-txt group-hover:text-cyan transition-colors mb-1">
                    {post.title}
                  </h2>
                  <p className="text-[10px] text-muted leading-relaxed mb-2">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[8px] px-2 py-0.5 border border-border text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Reading time */}
                <div className="text-[9px] text-muted shrink-0">
                  {post.readingTime}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
