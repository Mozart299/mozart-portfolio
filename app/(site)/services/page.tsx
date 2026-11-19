import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Label, SectionHead } from "@/components/SectionHead";
import { projects } from "@/lib/projects";
import { ProcessList } from "@/components/ProcessList";
import { faqs, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | Peter Ssendegeya",
  description: "Websites, web and mobile apps, online payments and automation for businesses, schools and charities.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="How I can help"
        text="You don't need to know anything technical. Tell me what you want to achieve and I'll handle the rest, from the first idea to launch day."
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 space-y-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="reveal grid gap-8 md:grid-cols-[1fr_1fr] rounded-2xl bg-card border border-line p-8 sm:p-10"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-accent-soft text-accent flex items-center justify-center">
                <Icon name={s.icon} />
              </div>
              <h2 className="mt-6 font-display text-4xl text-ink">{s.title}</h2>
              <p className="mt-3 text-lg text-muted leading-relaxed">{s.text}</p>
            </div>
            <div className="md:border-l md:border-line md:pl-8">
              <Label>What you get</Label>
              <ul className="mt-4 space-y-3">
                {s.includes.map((i) => (
                  <li key={i} className="flex gap-3 text-ink">
                    <Icon name="check" className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                    {i}
                  </li>
                ))}
              </ul>
              {s.examples.length > 0 && (
                <>
                  <div className="mt-8">
                    <Label>Examples</Label>
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.examples.map((id) => {
                      const p = projects.find((x) => x.id === id);
                      if (!p) return null;
                      return (
                        <li key={id}>
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-3 py-1.5 rounded-full border border-line text-sm text-ink hover:border-ink"
                          >
                            {p.name} ↗
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24 lg:py-32">
        <SectionHead
          label="How we'd work"
          title="Simple from start to finish"
          text="A clear process from the first chat to launch day."
        />
        <div className="mt-14 md:pl-[260px]">
          <ProcessList />
        </div>
      </section>

      <section className="border-t border-line bg-paper-alt/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 lg:py-32">
          <SectionHead label="Questions" title="Common questions" />
          <div className="mt-10 md:ml-[260px] max-w-3xl divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex justify-between items-center gap-6 cursor-pointer list-none text-lg font-medium text-ink">
                  {f.q}
                  <span
                    className="text-2xl leading-none text-muted transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-muted leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
