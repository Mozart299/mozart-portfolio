"use client";

import { useState, useEffect } from "react";
import { CLIMode } from "./CLIMode";
import { GUIMode } from "./GUIMode";

export function Portfolio() {
  const [mode, setMode] = useState<"cli" | "gui">("gui");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Handle keyboard shortcut to toggle modes (Ctrl+T or Cmd+T)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "t") {
        e.preventDefault();
        setMode((prev) => (prev === "cli" ? "gui" : "cli"));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative w-full h-screen">
      {/* Mode Toggle Button */}
      <button
        onClick={() => setMode(mode === "cli" ? "gui" : "cli")}
        className="absolute top-4 right-4 z-50 px-4 py-2 bg-green-400 text-black font-mono text-sm hover:bg-cyan-400 transition-colors rounded"
        title="Press Ctrl+T (or Cmd+T on Mac) to toggle"
      >
        {mode === "cli" ? "Switch to GUI" : "Switch to CLI"}
      </button>

      {/* Mode Indicator */}
      <div className="absolute top-4 left-4 z-50 text-green-400 font-mono text-xs bg-black px-3 py-2 border border-green-400">
        MODE: {mode.toUpperCase()}
      </div>

      {/* Render Active Mode */}
      {mode === "cli" ? <CLIMode /> : <GUIMode />}
    </div>
  );
}
