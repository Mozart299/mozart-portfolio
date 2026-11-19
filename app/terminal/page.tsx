import type { Metadata } from "next";
import Link from "next/link";
import { CLIMode } from "@/components/CLIMode";

export const metadata: Metadata = {
  title: "Terminal | Peter Ssendegeya",
  description: "Explore Peter's portfolio from a command line. Type 'help' to start.",
};

export default function TerminalPage() {
  return (
    <div className="relative bg-black font-mono">
      <Link
        href="/"
        className="absolute top-2 right-2 sm:top-4 sm:right-4 z-40 px-3 py-1 bg-green-400 text-black text-xs sm:text-sm rounded hover:bg-cyan-400"
      >
        ← Back to main site
      </Link>
      <CLIMode />
    </div>
  );
}
