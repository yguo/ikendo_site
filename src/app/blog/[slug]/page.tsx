import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not Found — iKendo" };

  return {
    title: `${post.title} — iKendo Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="pt-28 pb-24 bg-background">
      <article className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-2xl md:text-3xl font-light tracking-tight mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-[11px] text-muted-foreground mb-4">
            {post.date && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readingTime}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {post.author}
            </span>
          </div>

          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-[10px] font-normal"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Content */}
        <div
          className="prose-ikendo"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-kendo hover:underline"
          >
            <ArrowLeft className="w-3 h-3" />
            All Articles
          </Link>
        </div>
      </article>
    </section>
  );
}
