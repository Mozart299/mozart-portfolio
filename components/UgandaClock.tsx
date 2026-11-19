"use client";

import { useSyncExternalStore } from "react";

const format = () =>
  new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Kampala" }).format(new Date());

const subscribe = (onChange: () => void) => {
  const t = setInterval(onChange, 15_000);
  return () => clearInterval(t);
};

/** Live local time in Uganda, e.g. "Uganda 10:37". Renders just "Uganda" on the server. */
export function UgandaClock({ className = "" }: { className?: string }) {
  const time = useSyncExternalStore(subscribe, format, () => "");
  return (
    <span className={className}>
      Uganda{time && <span className="tabular-nums"> {time}</span>}
    </span>
  );
}
