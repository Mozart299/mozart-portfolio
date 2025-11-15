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
    <div className="flex-1 overflow-y-auto p-4 font-mono text-sm text-green-400">
      {outputs.map((output) => (
        <div key={output.id}>
          {output.type === "input" ? (
            <div className="text-green-400">
              <span className="text-cyan-400">user@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$ </span>
              <span>{output.content}</span>
            </div>
          ) : (
            <div className="whitespace-pre-wrap text-green-400 mt-1 mb-2">
              {output.content}
            </div>
          )}
        </div>
      ))}
      <div ref={endRef} />
    </div>
  );
}
