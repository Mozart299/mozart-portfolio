import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { InlineWork } from "@/components/InlineWork";
import { Print } from "@/components/Print";
import { ProcessList } from "@/components/ProcessList";
import { Label, SectionHead } from "@/components/SectionHead";
import { UgandaClock } from "@/components/UgandaClock";
import { WorkCollage } from "@/components/WorkCollage";
import { projects } from "@/lib/projects";
import { photo, services } from "@/lib/site";

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

            {photo ? (
              <div className="relative hidden sm:block justify-self-center w-full max-w-sm rotate-2 bg-card p-3 pb-12 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.6)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={photo} alt="Peter Ssendegeya" fill sizes="384px" priority className="object-cover" />
                </div>
                <p className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-wider text-muted">
                  Peter Ssendegeya · Uganda
                </p>
              </div>
            ) : (
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
            )}
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
            <a href="#hello" className="inline-block py-2.5 hover:text-cream">
              Scroll ↓
            </a>
          </div>
        </div>
      </section>

      {/* Intro with inline screenshots */}
      <section
        id="hello"
        className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 pt-28 lg:pt-40 pb-10 space-y-16 lg:space-y-24"
      >
        <div className="grid gap-5 md:grid-cols-[220px_1fr] md:gap-10">
          <div className="md:pt-3">
            <Label>Hello</Label>
          </div>
          <p className="max-w-3xl text-2xl sm:text-[2rem] leading-[1.45] text-ink/85">
            I&apos;m Peter. I&apos;ve built websites for{" "}
            <InlineWork id="sence">a university energy research centre</InlineWork>,{" "}
            <InlineWork id="nambi-notes">a publishing house</InlineWork>,{" "}
            <InlineWork id="musiconthefarm">a music and arts school</InlineWork>,{" "}
            <InlineWork id="radiant-smile-foundation">a charity</InlineWork> and{" "}
            <InlineWork id="jk-gold-souk">an online shop for gold bars and coins</InlineWork>.
          </p>
          <p className="md:col-start-2 -mt-1 flex items-baseline gap-3">
            <span className="h-px w-8 bg-warm self-center" aria-hidden />
            <span className="font-display italic text-3xl text-accent">Peter</span>
            <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-muted">Ssendegeya · Uganda</span>
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-[220px_1fr] md:gap-10">
          <div className="md:pt-2">
            <Label>What I do</Label>
          </div>
          <div className="max-w-3xl">
            <p className="text-xl leading-relaxed text-muted">
              I help you get online with a website or app that is simple, fast and easy to look after. You don&apos;t
              need to know anything technical. Tell me what you want to achieve and I&apos;ll handle the rest.
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-muted">
              Tap the underlined words to visit the real sites
            </p>
          </div>
        </div>
      </section>

      <WorkCollage />

      {/* Services */}
      <section className="grain bg-forest text-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 lg:py-36">
          <SectionHead dark label="Services" title="How I can help" />
          <ul className="mt-14 border-t border-cream/15">
            {services.map((s, i) => (
              <li
                key={s.title}
                className="reveal grid gap-x-10 gap-y-3 py-8 border-b border-cream/15 md:grid-cols-[220px_1fr_1.3fr] items-start"
              >
                <span className="flex items-center gap-3 font-mono text-sm text-warm-light">
                  {String(i + 1).padStart(2, "0")}
                  <span className="text-mint">
                    <Icon name={s.icon} className="w-5 h-5" />
                  </span>
                </span>
                <h3 className="font-display text-3xl sm:text-4xl">{s.title}</h3>
                <p className="text-cream/80 leading-relaxed md:pt-1.5">{s.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 md:pl-[260px]">
            <Link href="/services" className="text-mint font-medium underline underline-offset-4 hover:text-cream">
              What&apos;s included, and common questions →
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-paper-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-32 lg:pt-36 lg:pb-44">
          <SectionHead
            label="How we'd work"
            title="Simple from start to finish"
            text="Whether you're a one-person business or a whole team, the process stays the same."
          />
          <div className="mt-14 md:pl-[260px]">
            <ProcessList />
          </div>
        </div>
      </section>
    </>
  );
}
