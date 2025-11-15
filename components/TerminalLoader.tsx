"use client";

interface Props {
  text?: string;
  type?: "spinner" | "dots" | "bar" | "pulse";
}

export function TerminalLoader({ text = "Loading", type = "spinner" }: Props) {
  const getLoader = () => {
    switch (type) {
      case "dots":
        return (
          <div className="flex gap-1">
            <span className="text-green-400 animate-bounce" style={{ animationDelay: "0s" }}>
              •
            </span>
            <span className="text-green-400 animate-bounce" style={{ animationDelay: "0.2s" }}>
              •
            </span>
            <span className="text-green-400 animate-bounce" style={{ animationDelay: "0.4s" }}>
              •
            </span>
          </div>
        );
      case "bar":
        return (
          <div className="flex gap-0.5">
            <span className="w-1 h-4 bg-green-400 animate-pulse"></span>
            <span className="w-1 h-4 bg-green-400 animate-pulse" style={{ animationDelay: "0.2s" }}></span>
            <span className="w-1 h-4 bg-green-400 animate-pulse" style={{ animationDelay: "0.4s" }}></span>
            <span className="w-1 h-4 bg-green-400 animate-pulse" style={{ animationDelay: "0.6s" }}></span>
          </div>
        );
      case "pulse":
        return (
          <span className="text-green-400 animate-pulse text-xl">█</span>
        );
      case "spinner":
      default:
        return (
          <style>{`
            @keyframes spin-char {
              0% { content: "|"; }
              25% { content: "/"; }
              50% { content: "−"; }
              75% { content: "\\\\"; }
            }
            .spinner::before {
              content: "|";
              animation: spin-char 0.6s steps(4, end) infinite;
            }
          `}</style>
        );
    }
  };

  if (type === "spinner") {
    return (
      <div className="flex items-center gap-2 font-mono text-sm text-green-400">
        <span className="spinner"></span>
        <span>{text}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 font-mono text-sm text-green-400">
      {getLoader()}
      <span>{text}</span>
    </div>
  );
}
