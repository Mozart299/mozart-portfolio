import { SectionHead } from "./SectionHead";

/** Deep green heading band that opens every inner page. */
export function PageHero({ label, title, text }: { label: string; title: string; text?: string }) {
  return (
    <section className="grain bg-forest text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-36 sm:pt-44 lg:pt-52 pb-16 sm:pb-20 lg:pb-28">
        <SectionHead as="h1" dark label={label} title={title} text={text} />
      </div>
    </section>
  );
}
