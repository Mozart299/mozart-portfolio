"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { emailHref, nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-40 px-4 flex justify-center pointer-events-none">
      <div className="pointer-events-auto w-full max-w-md md:max-w-none md:w-auto">
        <div className="flex items-center justify-between gap-2 rounded-full bg-ink/95 text-cream backdrop-blur pl-2 pr-2 py-1.5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]">
          {/* Mobile: email shortcut */}
          <a href={emailHref} aria-label="Email me" className="md:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-cream/10">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden>
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </a>

          <Link href="/" onClick={close} aria-label="Peter Ssendegeya, home" className="h-10 px-3 rounded-full flex items-center font-display text-2xl hover:bg-cream/10">
            Peter<span className="hidden md:inline">&nbsp;Ssendegeya</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 pl-3" aria-label="Main">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={pathname === n.href ? "page" : undefined}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${pathname === n.href ? "bg-cream/15 text-cream" : "text-cream/75 hover:text-cream"}`}
              >
                {n.label}
              </Link>
            ))}
            <Link href="/contact" className="ml-2 px-5 py-2.5 rounded-full bg-cream text-ink text-sm font-medium hover:bg-white transition-colors">
              Start a project
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-cream/10"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M5 9h14M5 15h14" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav id="mobile-menu" className="md:hidden mt-2 rounded-3xl bg-ink text-cream p-3 shadow-xl" aria-label="Main">
            {[{ href: "/", label: "Home" }, ...nav].map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={close}
                className={`block px-4 py-3.5 rounded-2xl text-lg ${pathname === n.href ? "bg-cream/10" : "hover:bg-cream/5"}`}
              >
                {n.label}
              </Link>
            ))}
            <Link href="/contact" onClick={close} className="mt-2 flex justify-center px-6 py-3.5 rounded-full bg-cream text-ink font-medium">
              Start a project
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
