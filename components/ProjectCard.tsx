import { BrowserFrame } from "./BrowserFrame";
import { Icon } from "./Icon";
import { btn } from "@/lib/site";
import type { Project } from "@/lib/projects";

/** Card used in the projects grid */
export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl bg-card border border-line overflow-hidden hover:shadow-[0_20px_50px_-24px_rgba(23,20,15,0.35)] transition-shadow">
      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="block group p-3 pb-0" aria-label={`Visit the ${p.name} website`}>
        <BrowserFrame
          src={p.image}
          alt={`Screenshot of ${p.name}`}
          url={p.liveUrl}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="shadow-none transition-transform duration-500 group-hover:-translate-y-1"
        />
      </a>
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <p className="text-xs uppercase tracking-[0.14em] text-muted">
          {p.category}
          {p.client && <> · Built for {p.client}</>}
        </p>
        <h3 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">{p.name}</h3>
        <p className="mt-3 text-muted leading-relaxed">{p.summary}</p>
        <Highlights items={p.highlights} />
        <div className="mt-auto pt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className={btn.primary}>
              Visit site <span aria-hidden>↗</span>
            </a>
          )}
          <details className="text-sm text-muted w-full sm:w-auto">
            <summary className="cursor-pointer hover:text-ink">Technical details</summary>
            <p className="mt-3 leading-relaxed">{p.description}</p>
            <p className="mt-2 text-xs">Built with {p.technologies.join(", ")}</p>
          </details>
        </div>
      </div>
    </article>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3 text-[15px]">
      {items.map((h) => (
        <li key={h} className="flex gap-3 text-ink">
          <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-accent-soft text-accent flex items-center justify-center">
            <Icon name="check" className="w-3.5 h-3.5" />
          </span>
          {h}
        </li>
      ))}
    </ul>
  );
}
