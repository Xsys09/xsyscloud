import Link from "next/link";
import type { Post } from "@/lib/posts";

interface Props {
  posts: Omit<Post, "content">[];
}

export default function BlogPreview({ posts }: Props) {
  return (
    <section id="blog" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-[9px] tracking-[3px] text-cyan uppercase mb-2">
              // 04 — Writing
            </div>
            <h2 className="font-rajdhani text-3xl font-bold tracking-[3px] uppercase text-txt">
              Latest Posts
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:block text-[9px] tracking-[2px] text-cyan uppercase hover:underline underline-offset-4"
          >
            All Posts →
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="text-[11px] text-muted border border-border p-10 text-center font-mono">
            <span className="text-cyan">$ </span>ls posts/ <br />
            <span className="mt-2 block text-dim">
              No posts yet — coming soon...
            </span>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-surface border border-border p-5 flex flex-col gap-3 group hover:border-cyan/30 transition-colors"
              >
                <div className="text-[9px] text-muted tracking-wide">
                  {post.date}
                </div>
                <h3 className="font-rajdhani text-lg font-semibold tracking-wide text-txt group-hover:text-cyan transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-[10px] text-muted leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-muted">
                    {post.readingTime}
                  </span>
                  <span className="text-[9px] text-cyan group-hover:translate-x-1 transition-transform">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-6 md:hidden">
          <Link
            href="/blog"
            className="text-[9px] tracking-[2px] text-cyan uppercase"
          >
            All Posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
