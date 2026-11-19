import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/lib/articles";

export const metadata = {
  title: "Engineering notes | Peter Ssendegeya",
  description: "Technical case studies from Peter Ssendegeya’s software projects, with worked examples and links to the code.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero label="Technical blog" title="Engineering notes" text="A closer look at the decisions inside my software projects, with examples you can trace back to the code." />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        {articles.map((article) => (
          <article key={article.slug} className="border-t border-line py-9 grid gap-3 md:grid-cols-[220px_1fr] md:gap-10">
            <div className="text-sm font-mono text-accent md:pt-2">{article.topic}</div>
            <div className="max-w-2xl">
              <p className="text-sm text-muted mb-2">{article.project}</p>
              <h2 className="font-display text-4xl leading-tight">
                <Link className="hover:underline decoration-1 underline-offset-4" href={`/blog/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="mt-3 text-muted leading-relaxed">{article.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
