"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  onSubmit: (input: string) => void;
}

export function TerminalInput({ onSubmit }: Props) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input.trim()) {
        onSubmit(input);
        setHistory([...history, input]);
        setHistoryIndex(-1);
      }
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="flex items-center gap-2 p-4 border-t border-gray-700 font-mono text-sm bg-black">
      <span className="text-cyan-400 flex-shrink-0">user@portfolio</span>
      <span className="text-white flex-shrink-0">:</span>
      <span className="text-blue-400 flex-shrink-0">~</span>
      <span className="text-white flex-shrink-0">$ </span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent text-green-400 outline-none font-mono"
        autoComplete="off"
        spellCheck="false"
      />
      <div className="text-green-400 animate-pulse w-2 h-4 bg-green-400 flex-shrink-0"></div>
    </div>
  );
}
