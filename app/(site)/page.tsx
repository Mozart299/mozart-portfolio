import Link from "next/link";
import { Print } from "@/components/Print";
import { UgandaClock } from "@/components/UgandaClock";
import { WorkCollage } from "@/components/WorkCollage";
import { projects } from "@/lib/projects";

const byId = (id: string) => projects.find((p) => p.id === id) ?? projects[0];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grain bg-forest text-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-10 min-h-[92svh] flex flex-col">
          <div className="flex-1 grid gap-14 lg:grid-cols-[1.15fr_1fr] items-center">
            <div>
              <p className="inline-flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.12em] text-cream/75">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-warm-light motion-safe:animate-ping opacity-70" />
                  <span className="relative w-2 h-2 rounded-full bg-warm-light" />
                </span>
                Available for new projects
              </p>
              <h1 className="mt-7 font-display text-[3.4rem] leading-[0.98] sm:text-7xl lg:text-[5.6rem] tracking-tight">
                Websites &amp; apps people <em className="intro-ink text-warm-light">love</em> to use.
              </h1>
              <p className="mt-7 text-lg sm:text-xl text-cream/75 max-w-xl leading-relaxed">
                I&apos;m Peter Ssendegeya, a software engineer in Uganda. I build websites and apps for businesses,
                schools and charities.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="px-6 py-3.5 rounded-full bg-cream text-forest font-medium hover:bg-white transition-colors"
                >
                  See my projects →
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-full border border-cream/30 font-medium hover:border-cream transition-colors"
                >
                  Start a project
                </Link>
              </div>
            </div>

            <div className="hero-prints relative hidden sm:block h-[420px] lg:h-[480px]">
              <div className="absolute right-[4%] top-0 w-[58%] rotate-[5deg]">
                <Print project={byId("sunrise")} n={4} sizes="300px" priority />
              </div>
              <div className="absolute left-[2%] top-[18%] w-[58%] -rotate-[6deg]">
                <Print project={byId("musiconthefarm")} n={3} sizes="300px" priority />
              </div>
              <div className="absolute right-[14%] bottom-0 w-[60%] rotate-[1.5deg]">
                <Print project={byId("sence")} n={1} sizes="300px" priority />
              </div>
            </div>
          </div>

          <div className="mt-14 pt-5 border-t border-cream/15 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.12em] text-cream/75">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/projects" className="inline-block py-2.5 hover:text-cream">
                <span className="text-mint">01</span> Projects
              </Link>
              <Link href="/services" className="inline-block py-2.5 hover:text-cream">
                <span className="text-mint">02</span> Services
              </Link>
              <Link href="/about" className="inline-block py-2.5 hover:text-cream">
                <span className="text-mint">03</span> About
              </Link>
            </div>
            <UgandaClock />
            <a href="#work" className="inline-block py-2.5 hover:text-cream">
              Scroll ↓
            </a>
          </div>
        </div>
      </section>

      <WorkCollage />
    </>
  );
}
