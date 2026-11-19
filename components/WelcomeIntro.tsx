"use client";

import { useEffect, useRef, type ReactNode } from "react";

const seenKey = "portfolio-welcome-seen";

export function WelcomeIntro({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timeout: number;
    const frame = requestAnimationFrame(() => {
      try {
        if (sessionStorage.getItem(seenKey)) return;
        sessionStorage.setItem(seenKey, "1");
      } catch {
        // The intro can still play when the browser disables session storage.
      }

      dialog.showModal();
      timeout = window.setTimeout(() => dialog.close(), 5500);
    });

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      if (dialog.open) dialog.close();
    };
  }, []);

  return (
    <dialog ref={ref} aria-label="Welcome to my portfolio" className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-forest p-0">
      {children}
      <form method="dialog" className="absolute bottom-6 right-6">
        <button aria-label="Skip introduction" className="grid size-11 place-items-center rounded-full border border-cream/40 text-cream">
          <span aria-hidden="true">→</span>
        </button>
      </form>
    </dialog>
  );
}
