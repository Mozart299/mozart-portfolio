import Image from "next/image";
import type { Project } from "@/lib/projects";

/** A project screenshot styled as a photo print with a caption, linking to the live site. */
export function Print({
  project: p,
  n,
  sizes,
  priority,
  className = "",
}: {
  project: Project;
  n: number;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <a
      href={p.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit the ${p.name} website`}
      className={`group block bg-card p-2 sm:p-2.5 pb-0 border border-black/5 shadow-[0_22px_45px_-20px_rgba(20,18,12,0.5)] transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_30px_60px_-20px_rgba(20,18,12,0.55)] ${className}`}
    >
      <span className="relative block aspect-[4/3] overflow-hidden bg-paper-alt">
        <Image
          src={p.image}
          alt={`Screenshot of ${p.name}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-left-top"
        />
      </span>
      <span className="block px-0.5 pt-2 pb-2.5">
        <span className="flex items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-wider text-muted">
          <span>No. {String(n).padStart(2, "0")}</span>
          <span className="group-hover:text-warm">Visit site ↗</span>
        </span>
        <span className="mt-1 block text-[13px] sm:text-sm font-medium leading-snug text-ink">{p.name}</span>
      </span>
    </a>
  );
}
