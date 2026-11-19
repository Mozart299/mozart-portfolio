import Image from "next/image";

export function BrowserFrame({
  src,
  alt,
  url,
  sizes,
  priority,
  className = "",
}: {
  src: string;
  alt: string;
  url?: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const host = url?.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  return (
    <div className={`rounded-xl bg-card border border-line shadow-[0_24px_60px_-20px_rgba(23,20,15,0.35)] overflow-hidden ${className}`}>
      <div className="flex items-center gap-3 px-3 h-8 border-b border-line bg-paper-alt/60">
        <div className="flex gap-1.5" aria-hidden>
          <span className="w-2.5 h-2.5 rounded-full bg-[#e5a59a]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#e8cf8f]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#a9cfa4]" />
        </div>
        {host && (
          <span className="flex-1 truncate text-[11px] text-muted bg-card/80 rounded px-2 py-0.5 text-center">{host}</span>
        )}
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-left-top" />
      </div>
    </div>
  );
}
