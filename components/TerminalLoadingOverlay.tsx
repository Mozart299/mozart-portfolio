"use client";

interface Props {
  isLoading: boolean;
  message?: string;
  type?: "spinner" | "dots" | "bar" | "matrix" | "code";
}

export function TerminalLoadingOverlay({ isLoading, message = "Initializing...", type = "spinner" }: Props) {
  if (!isLoading) return null;

  const renderLoader = () => {
    switch (type) {
      case "dots":
        return (
          <div className="flex gap-1">
            <span className="text-green-400 animate-bounce" style={{ animationDelay: "0s" }}>
              ●
            </span>
            <span className="text-green-400 animate-bounce" style={{ animationDelay: "0.2s" }}>
              ●
            </span>
            <span className="text-green-400 animate-bounce" style={{ animationDelay: "0.4s" }}>
              ●
            </span>
          </div>
        );
      case "bar":
        return (
          <div className="flex gap-0.5">
            <span className="w-1 h-6 bg-green-400 animate-pulse"></span>
            <span className="w-1 h-6 bg-green-400 animate-pulse" style={{ animationDelay: "0.15s" }}></span>
            <span className="w-1 h-6 bg-green-400 animate-pulse" style={{ animationDelay: "0.3s" }}></span>
            <span className="w-1 h-6 bg-green-400 animate-pulse" style={{ animationDelay: "0.45s" }}></span>
            <span className="w-1 h-6 bg-green-400 animate-pulse" style={{ animationDelay: "0.6s" }}></span>
          </div>
        );
      case "matrix":
        return (
          <div className="font-mono text-xs text-green-400 space-y-1 opacity-70">
            <div>▓▓░░▒░░░▓▒░</div>
            <div className="animate-pulse">▒░▓▒░░░▓░▒░</div>
            <div>░▓▒░░▓▒░░▓</div>
          </div>
        );
      case "code":
        return (
          <div className="font-mono text-xs text-green-400 space-y-0.5">
            <div className="animate-pulse">&gt; compiling...</div>
            <div>&gt; linking modules</div>
            <div className="animate-pulse">&gt; initializing</div>
          </div>
        );
      case "spinner":
      default:
        return (
          <div className="inline-block text-2xl text-green-400 animate-spin" style={{ animationDuration: "0.8s" }}>
            ⟳
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 font-mono backdrop-blur-sm">
      <div className="border border-green-400 p-8 bg-black/95 rounded text-center space-y-6 min-w-64">
        <div className="flex justify-center">
          {renderLoader()}
        </div>
        <div className="text-green-400 text-sm">
          {message}
        </div>
        <div className="text-gray-600 text-xs">
          <span className="animate-pulse">█</span>
        </div>
      </div>
    </div>
  );
}
