"use client";

import { useState, useEffect } from "react";
import { CLIMode } from "./CLIMode";
import { GUIMode } from "./GUIMode";
import { TerminalLoadingOverlay } from "./TerminalLoadingOverlay";
import { InitialSplashScreen } from "./InitialSplashScreen";

export function Portfolio() {
  const [mode, setMode] = useState<"cli" | "gui">("gui");
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Handle keyboard shortcut to toggle modes (Ctrl+T or Cmd+T)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "t") {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
          setMode((prev) => (prev === "cli" ? "gui" : "cli"));
          setIsLoading(false);
        }, 800);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!mounted) {
    return null;
  }

  if (showSplash) {
    return <InitialSplashScreen onComplete={() => setShowSplash(false)} duration={5000} />;
  }

  return (
    <div className="relative w-full h-screen">
      {/* Mode Toggle Button */}
      <button
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => {
            setMode((prev) => (prev === "cli" ? "gui" : "cli"));
            setIsLoading(false);
          }, 800);
        }}
        disabled={isLoading}
        className="absolute top-4 right-4 z-40 px-4 py-2 bg-green-400 text-black font-mono text-sm hover:bg-cyan-400 transition-colors rounded disabled:opacity-50 disabled:cursor-not-allowed"
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

      {/* Loading Overlay */}
      <TerminalLoadingOverlay
        isLoading={isLoading}
        message={`Switching to ${mode === "cli" ? "GUI" : "CLI"} mode...`}
        type="spinner"
      />
    </div>
  );
}
