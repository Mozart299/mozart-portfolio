import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, action, path }: { project: Project; action?: string; path?: string }) {
  const featured = Boolean(action);
  const Heading = featured ? "h2" : "h3";
  const href = project.liveUrl && (path ? new URL(path, project.liveUrl).href : project.liveUrl);
  const preview = (
    <Image
      src={project.image}
      alt={`Screenshot of ${project.name}`}
      fill
      sizes={featured ? "(min-width: 1200px) 528px, (min-width: 768px) 46vw, 100vw" : "(min-width: 640px) 210px, 96px"}
      loading={featured ? "eager" : "lazy"}
      className="object-cover object-top"
    />
  );
  const imageClass = featured
    ? "relative block aspect-[16/9] overflow-hidden rounded-lg border border-cream/20"
    : "relative block aspect-[4/3] overflow-hidden rounded-md border border-line";

  return (
    <article className={featured ? "flex flex-col" : "grid grid-cols-[6rem_1fr] sm:grid-cols-[13rem_1fr] gap-4 sm:gap-8 items-start py-6 sm:py-8"}>
      {project.liveUrl ? (
        <a href={project.liveUrl} className={imageClass} aria-label={`Visit ${project.name}`} target="_blank" rel="noopener noreferrer">{preview}</a>
      ) : <div className={imageClass}>{preview}</div>}
      <div className={featured ? "mt-5 flex flex-1 flex-col" : "min-w-0"}>
        <Heading className={`font-display leading-tight ${featured ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"}`}>{project.name}</Heading>
        <p className={`mt-2 max-w-2xl leading-relaxed ${featured ? "text-cream/85" : "text-muted"}`}>{project.summary}</p>
        <div className={`flex flex-wrap items-baseline gap-x-5 gap-y-2 ${featured ? "mt-auto pt-5" : "mt-3"}`}>
          {href && <a href={href} target="_blank" rel="noopener noreferrer" aria-label={action ?? `Visit ${project.name}`} className={`font-medium underline underline-offset-4 ${featured ? "text-mint" : "text-accent"}`}>
            {action ?? "Visit site"} <span aria-hidden>↗</span>
          </a>}
          <details className={`text-sm open:basis-full ${featured ? "text-cream/80" : "text-muted"}`}>
            <summary className="cursor-pointer">Technical details</summary>
            <p className="mt-2 max-w-prose leading-relaxed">{project.description}</p>
            <p className="mt-2">Built with {project.technologies.join(", ")}</p>
          </details>
        </div>
      </div>
    </article>
  );
}
