"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function WelcomeIntro({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    dialog.showModal();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(() => dialog.close(), reducedMotion ? 1500 : 5500);

    return () => {
      window.clearTimeout(timeout);
      if (dialog.open) dialog.close();
    };
  }, []);

  return (
    <dialog ref={ref} aria-label="Welcome to my portfolio" className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-forest p-0">
      {children}
      <form method="dialog" className="absolute bottom-6 right-6">
        <button aria-label="Skip introduction" className="min-h-11 rounded-full border border-cream/40 px-5 text-sm text-cream hover:bg-cream/10">
          Skip intro
        </button>
      </form>
    </dialog>
  );
}
