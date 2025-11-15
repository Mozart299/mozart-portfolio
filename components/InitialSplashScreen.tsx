"use client";

import { useEffect, useState } from "react";

interface Props {
  onComplete: () => void;
  duration?: number;
}

export function InitialSplashScreen({ onComplete, duration = 3000 }: Props) {
  const [progress, setProgress] = useState(0);
  const [currentStatus, setCurrentStatus] = useState("Initializing system...");

  useEffect(() => {
    const statuses = [
      "Initializing system...",
      "Loading portfolio data...",
      "Compiling assets...",
      "Connecting modules...",
      "Ready.",
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 25;
        const statusIndex = Math.floor((newProgress / 100) * (statuses.length - 1));
        setCurrentStatus(statuses[statusIndex] || statuses[statuses.length - 1]);
        return Math.min(newProgress, 100);
      });
    }, 300);

    const timer = setTimeout(() => {
      setProgress(100);
      setCurrentStatus("Ready.");
      clearInterval(interval);
      setTimeout(onComplete, 500);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [duration, onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 font-mono">
      <div className="text-center space-y-8 w-full max-w-md px-4">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-2xl text-green-400 font-bold tracking-wider">
            MOZART
          </h1>
          <p className="text-xs text-gray-500">Terminal Portfolio v1.0</p>
        </div>

        {/* Status Messages */}
        <div className="space-y-4">
          <div className="h-12 flex items-center justify-center">
            <p className="text-sm text-green-400 min-h-5">
              {currentStatus}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="border border-green-400 h-6 relative overflow-hidden bg-black">
              <div
                className="h-full bg-green-400 transition-all duration-300 flex items-center justify-end pr-2"
                style={{ width: `${progress}%` }}
              >
                {progress > 0 && progress < 100 && (
                  <span className="text-black text-xs font-bold">
                    {Math.round(progress)}%
                  </span>
                )}
              </div>
            </div>
            <p className="text-xs text-gray-600 text-right">
              {Math.round(progress)}%
            </p>
          </div>
        </div>

        {/* Spinner at bottom */}
        <div className="flex justify-center">
          <div className="inline-block">
            <div className="text-green-400 text-sm animate-spin" style={{ animationDuration: "0.8s" }}>
              ⟳
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-xs text-gray-700 space-y-1">
          <p>$&gt; system ready</p>
        </div>
      </div>
    </div>
  );
}
