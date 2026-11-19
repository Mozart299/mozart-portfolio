"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CopyButton } from "./CopyButton";
import { Label } from "./SectionHead";
import { UgandaClock } from "./UgandaClock";
import { contact, name } from "@/lib/projects";
import { emailHref, nav, phoneHref, phoneLabel, whatsappHref } from "@/lib/site";

export function Footer() {
  const onContactPage = usePathname() === "/contact";

  return (
    <footer className="grain bg-forest text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {!onContactPage && (
          <div className="pt-32 lg:pt-44 pb-20 grid gap-6 md:grid-cols-[220px_1fr] md:gap-10">
            <div className="md:pt-6">
              <Label dark>Get in touch</Label>
            </div>
            <div>
              <h2 className="font-display text-6xl sm:text-8xl leading-[0.95]">
                Let&apos;s build
                <br />
                something together.
              </h2>
              <div className="mt-10 flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <a
                  href={emailHref}
                  className="font-display text-3xl sm:text-4xl underline decoration-cream/40 decoration-1 underline-offset-8 hover:decoration-cream break-all"
                >
                  {contact.email}
                </a>
                <CopyButton
                  text={contact.email}
                  className="px-2 py-2.5 -my-2.5 font-mono text-xs uppercase tracking-wider text-cream/75 hover:text-cream"
                />
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-cream text-forest font-medium hover:bg-white transition-colors"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href={phoneHref}
                  className="px-6 py-3.5 rounded-full border border-cream/30 font-medium hover:border-cream transition-colors"
                >
                  Call {phoneLabel}
                </a>
              </div>
            </div>
          </div>
        )}

        <div
          className={`${onContactPage ? "pt-28" : "border-t border-cream/15 pt-8"} pb-10 grid gap-6 sm:grid-cols-[1fr_auto] text-sm text-cream/75`}
        >
          <ul className="flex flex-wrap gap-x-6">
            {[{ href: "/", label: "Home" }, ...nav, { href: "/contact", label: "Contact" }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="inline-block py-2 hover:text-cream">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 hover:text-cream"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <Link href="/terminal" className="inline-block py-2 hover:text-cream">
                Terminal version
              </Link>
            </li>
          </ul>
          <UgandaClock className="font-mono text-xs uppercase tracking-wider" />
          <p className="text-xs text-cream/70">
            © {new Date().getFullYear()} {name}
          </p>
          <a href="#" className="inline-block py-2 text-xs text-cream/75 hover:text-cream">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
