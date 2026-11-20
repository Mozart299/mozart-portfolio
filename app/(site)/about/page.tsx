import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { InlineWork } from "@/components/InlineWork";
import { PageHero } from "@/components/PageHero";
import { about, certifications, name } from "@/lib/projects";
import { photo } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About | Peter Ssendegeya",
  description: "Software engineer in Uganda building websites and apps for businesses, schools and charities.",
  path: "/about",
});

const skills =
  about
    .split("Skills:")[1]
    ?.trim()
    .split("\n")
    .map((l) => l.replace(/^- /, "")) ?? [];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Hi, I'm Peter."
        text="A software engineer in Uganda who builds websites and apps for businesses, schools and charities."
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 grid gap-14 lg:grid-cols-[1fr_1.3fr]">
        <div
          className={`grain relative aspect-[4/5] max-w-sm w-full rounded-[2rem] overflow-hidden bg-accent ${photo ? "" : "hidden lg:block"}`}
        >
          {photo ? (
            <Image
              src={photo}
              alt={name}
              fill
              sizes="(min-width: 1024px) 380px, 90vw"
              className="object-cover"
              priority
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center font-display text-[9rem] text-cream/90"
              aria-hidden
            >
              PS
            </div>
          )}
        </div>

        <div>
          <div className="space-y-5 text-lg text-muted leading-relaxed">
            <p>
              I&apos;m {name}, a software engineer based in Uganda. I enjoy taking a messy, real-world problem and
              turning it into something simple that people actually want to use.
            </p>
            <p>
              I&apos;ve built websites for <InlineWork id="sence">a university energy research centre</InlineWork>,{" "}
              <InlineWork id="nambi-notes">a publishing house</InlineWork>,{" "}
              <InlineWork id="musiconthefarm">a music school</InlineWork>,{" "}
              <InlineWork id="sunrise">a university partnership</InlineWork>,{" "}
              <InlineWork id="radiant-smile-foundation">a charity</InlineWork> and{" "}
              <InlineWork id="jk-gold-souk">an online shop for gold bars and coins</InlineWork>.
            </p>
            <p>
              I was previously a Mobile App Engineer at AirQo, building their mobile app that shows live air quality
              across African cities and shipping it to people&apos;s phones through the app stores.
            </p>
            <p>
              I care about the details that make a site easy to use: fast pages, clear words, and something that works
              just as well on a phone as on a computer.
            </p>
            <p>I speak English and some German, and I&apos;m happy to work with clients anywhere in the world.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-28 lg:pb-36 grid gap-6 lg:grid-cols-2">
        <ul className="rounded-2xl bg-card border border-line divide-y divide-line h-fit">
          {[
            ["Based in", "Uganda, working worldwide"],
            ["Languages", "English, German (B1/B2)"],
            ["Builds for", "Web, Android & iPhone"],
            ["Previously", "Mobile App Engineer, AirQo"],
            ["Certified in", "Google Cloud & cloud security"],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between gap-4 px-6 py-4">
              <span className="text-muted">{k}</span>
              <span className="text-ink text-right font-medium">{v}</span>
            </li>
          ))}
        </ul>
        <details className="group rounded-2xl bg-card border border-line px-6 py-5 h-fit">
          <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-ink">
            Technical skills (for recruiters &amp; developers)
            <span className="text-muted transition-transform group-open:rotate-45 text-xl leading-none" aria-hidden>
              +
            </span>
          </summary>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <ul className="mt-4 space-y-1 text-sm text-muted">
            {certifications.map((c) => (
              <li key={c.title}>
                {c.title} ({c.issuer}){" "}
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-2"
                >
                  credential
                </a>
              </li>
            ))}
          </ul>
        </details>
      </section>
    </>
  );
}
