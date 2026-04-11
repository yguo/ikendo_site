import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog — iKendo",
  description: "Insights on enterprise conversational AI, voice agents, and the art of building intelligent dialogue systems.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="pt-28 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-kendo font-medium">
            Blog
          </span>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mt-3 mb-4">
            Dispatches from the dojo.
          </h1>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Insights on conversational AI, enterprise voice agents, and the
            discipline of building intelligent dialogue systems.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-sm text-muted-foreground">
              No articles yet. Check back soon.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group border border-border rounded-lg p-6 hover:border-kendo/30 transition-all duration-300 bg-card">
                  <div className="flex items-center gap-3 mb-3 text-[10px] text-muted-foreground">
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
                  </div>

                  <h2 className="text-lg font-medium tracking-tight mb-2 group-hover:text-kendo transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-[10px] font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <span className="text-[11px] text-kendo flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
