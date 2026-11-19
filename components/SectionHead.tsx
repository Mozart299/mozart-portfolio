/** Editorial section heading: a small bracketed label on the left, the title and intro on the right. */
export function Label({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`font-mono text-[13px] uppercase tracking-[0.12em] ${dark ? "text-cream/75" : "text-muted"}`}>
      <span className={dark ? "text-warm-light" : "text-warm"}>(</span> {children}{" "}
      <span className={dark ? "text-warm-light" : "text-warm"}>)</span>
    </p>
  );
}

export function SectionHead({
  label,
  title,
  text,
  dark,
  as: Tag = "h2",
  children,
}: {
  label: string;
  title: string;
  text?: string;
  dark?: boolean;
  as?: "h1" | "h2";
  children?: React.ReactNode;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-[220px_1fr] md:gap-10">
      <div className="md:pt-4">
        <Label dark={dark}>{label}</Label>
      </div>
      <div className="max-w-3xl">
        <Tag className="font-display text-5xl sm:text-6xl leading-[1.02]">{title}</Tag>
        {text && <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-cream/80" : "text-muted"}`}>{text}</p>}
        {children}
      </div>
    </div>
  );
}
