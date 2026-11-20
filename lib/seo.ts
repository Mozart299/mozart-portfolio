import type { Metadata } from "next";

export const siteName = "Peter Ssendegeya";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
);

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const images = [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Peter Ssendegeya, software engineer" }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName, locale: "en_UG", type, ...(type === "website" && { images }) },
    twitter: { card: "summary_large_image", title, description, ...(type === "website" && { images }) },
  };
}
