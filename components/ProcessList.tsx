import { steps } from "@/lib/site";

export function ProcessList() {
  return (
    <ol className="border-t border-line">
      {steps.map((s, i) => (
        <li key={s.title} className="light-up grid grid-cols-[48px_1fr] sm:grid-cols-[64px_220px_1fr] gap-x-4 gap-y-2 py-7 border-b border-line">
          <span className="font-mono text-sm text-warm pt-2">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="font-display text-3xl text-ink">{s.title}</h3>
          <p className="col-start-2 sm:col-start-3 text-muted leading-relaxed sm:pt-1.5">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
