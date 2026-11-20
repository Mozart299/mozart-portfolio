import { articles } from "@/lib/articles";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Engineering note by Peter Ssendegeya";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return renderOgImage({
    label: article ? `${article.project} · ${article.topic}` : "Engineering notes",
    title: article?.title ?? "Engineering notes",
  });
}
