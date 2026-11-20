import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ProjectGrid } from "@/components/ProjectGrid";

export const metadata: Metadata = pageMetadata({
  title: "Projects | Peter Ssendegeya",
  description: "Explore client websites for university research, book publishing, education and commerce.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <ProjectGrid />;
}
