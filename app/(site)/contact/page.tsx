import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CopyButton } from "@/components/CopyButton";
import { PageHero } from "@/components/PageHero";
import { contact } from "@/lib/projects";
import { emailHref, phoneHref, phoneLabel, whatsappHref } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact | Peter Ssendegeya",
  description: "Get in touch about a website or app by WhatsApp, email or phone.",
  path: "/contact",
});

const tips = [
  "What your business or organisation does",
  "What you'd like built, in your own words",
  "Any websites or apps you like the look of",
  "When you'd like it ready",
  "Your budget, if you have one in mind",
];

const card = "flex flex-col rounded-2xl bg-card border border-line p-7 sm:p-8";
const action =
  "mt-auto inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full font-medium transition-colors";

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's talk about your project"
        text="Pick whichever is easiest for you. A few sentences about what you need is all it takes to get started."
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 lg:pt-20 pb-28 lg:pb-36">
        <div className="grid gap-6 md:grid-cols-3">
          <div className={card}>
            <h2 className="font-display text-3xl text-ink">WhatsApp</h2>
            <p className="mt-2 mb-8 text-muted">The quickest way to reach me. Send a message or a voice note.</p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${action} bg-accent text-white hover:bg-accent-dark`}
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className={card}>
            <h2 className="font-display text-3xl text-ink">Email</h2>
            <p className="mt-2 text-muted">Good for longer messages, files and examples.</p>
            <div className="mt-4 mb-8 flex items-center justify-between gap-3 rounded-xl bg-paper-alt px-4 py-3">
              <span className="text-ink text-sm sm:text-base break-all">{contact.email}</span>
              <CopyButton text={contact.email} className="shrink-0 -my-2 px-2 py-2 text-sm font-medium text-accent hover:underline" />
            </div>
            <a href={emailHref} className={`${action} border border-ink/15 text-ink hover:border-ink`}>
              Write an email
            </a>
          </div>

          <div className={card}>
            <h2 className="font-display text-3xl text-ink">Phone</h2>
            <p className="mt-2 mb-8 text-muted">
              Prefer to talk? Call me on <span className="text-ink font-medium whitespace-nowrap">{phoneLabel}</span>.
            </p>
            <a href={phoneHref} className={`${action} border border-ink/15 text-ink hover:border-ink`}>
              Call me
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.4fr] rounded-2xl border border-line bg-paper-alt/60 p-8 sm:p-10">
          <div>
            <h2 className="font-display text-4xl text-ink">Not sure what to say?</h2>
            <p className="mt-3 text-muted leading-relaxed">
              You don&apos;t need a plan or any technical words. If you can, mention a few of these and we&apos;ll work
              out the rest together.
            </p>
          </div>
          <ul className="space-y-3">
            {tips.map((t, i) => (
              <li key={t} className="flex gap-4 items-baseline text-ink text-lg">
                <span className="font-display text-xl text-warm w-5 shrink-0">{i + 1}</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-sm text-muted">
          You can also find me on{" "}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </>
  );
}
