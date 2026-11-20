import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ProjectGrid } from "@/components/ProjectGrid";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = pageMetadata({
  title: "Projects | Peter Ssendegeya",
  description: "Websites and apps built for publishers, schools, universities, charities and businesses. Every one is live to try.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Projects"
        title="Things I've built"
        text="Websites and apps for real clients and real people. Click Visit site to open any of them and try it yourself."
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 lg:pt-20 pb-28 lg:pb-36">
        <ProjectGrid />
      </section>
    </>
  );
}
