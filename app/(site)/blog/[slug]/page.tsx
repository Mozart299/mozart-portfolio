import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

async function getArticle(params: Props["params"]) {
  const { slug } = await params;
  return articles.find((article) => article.slug === slug) ?? notFound();
}

export async function generateMetadata({ params }: Props) {
  const article = await getArticle(params);
  return { title: `${article.title} | Peter Ssendegeya`, description: article.summary };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticle(params);
  return (
    <article>
      <PageHero label={article.project} title={article.title} text={article.summary} />
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 lg:py-20">
        <p className="text-sm text-muted mb-10">Peter Ssendegeya · {article.topic}</p>
        {article.sections.map(({ heading, body }) => (
          <section key={heading} className="mb-10">
            <h2 className="font-display text-4xl mb-3">{heading}</h2>
            <p className="text-lg leading-8">{body}</p>
          </section>
        ))}
        <footer className="flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6 text-accent underline-offset-4">
          <a className="underline" href={article.githubUrl}>View on GitHub</a>
          <Link className="underline" href="/blog">All engineering notes</Link>
        </footer>
      </div>
    </article>
  );
}
