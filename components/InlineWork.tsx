import Image from "next/image";
import { projects } from "@/lib/projects";

/**
 * An underlined phrase with a tiny screenshot beside it, linking to the live site.
 * On larger screens, hovering shows a bigger preview.
 */
export function InlineWork({ id, children }: { id: string; children: React.ReactNode }) {
  const p = projects.find((x) => x.id === id);
  if (!p) return <>{children}</>;
  return (
    <a
      href={p.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative text-ink underline decoration-ink/25 decoration-1 underline-offset-[6px] hover:decoration-warm"
    >
      {children}
      <span className="relative inline-block align-[-0.12em] ml-[0.3em] w-[1.9em] h-[1.2em] rounded-[3px] overflow-hidden border border-black/10 -rotate-3 transition-transform group-hover:rotate-0">
        <Image src={p.image} alt="" fill sizes="48px" className="object-cover object-left-top" />
      </span>
      <span
        className="hidden md:block pointer-events-none absolute left-1/2 bottom-full z-20 mb-3 w-72 -translate-x-1/2 translate-y-1 opacity-0 transition duration-200 group-hover:opacity-100 group-hover:translate-y-0 bg-card p-2 pb-0 border border-black/5 shadow-[0_22px_45px_-20px_rgba(20,18,12,0.5)]"
        aria-hidden
      >
        <span className="relative block aspect-[4/3] overflow-hidden">
          <Image src={p.image} alt="" fill sizes="288px" className="object-cover object-left-top" />
        </span>
        <span className="block py-2 font-mono text-[11px] uppercase tracking-wider text-muted no-underline">{p.name} ↗</span>
      </span>
    </a>
  );
}
