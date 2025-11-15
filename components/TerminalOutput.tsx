"use client";

import { TerminalOutput as TerminalOutputType } from "@/lib/cli";
import { useEffect, useRef } from "react";

interface Props {
  outputs: TerminalOutputType[];
}

export function TerminalOutput({ outputs }: Props) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [outputs]);

  return (
    <div className="flex-1 overflow-y-auto p-2 sm:p-4 font-mono text-xs sm:text-sm text-green-400">
      {outputs.map((output) => (
        <div key={output.id}>
          {output.type === "input" ? (
            <div className="text-green-400 break-words">
              <span className="text-cyan-400 hidden sm:inline">user@portfolio</span>
              <span className="text-cyan-400 sm:hidden">user</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$ </span>
              <span className="break-all">{output.content}</span>
            </div>
          ) : (
            <div className="whitespace-pre-wrap text-green-400 mt-1 mb-2 break-words overflow-x-auto">
              {output.content}
            </div>
          )}
        </div>
      ))}
      <div ref={endRef} />
    </div>
  );
}
