"use client";

import { useState, useRef, useEffect } from "react";
import { TerminalOutput as TerminalOutputType, executeCommand } from "@/lib/cli";
import { TerminalOutput } from "./TerminalOutput";
import { TerminalInput } from "./TerminalInput";
import { v4 as uuidv4 } from "uuid";

export function CLIMode() {
  const [outputs, setOutputs] = useState<TerminalOutputType[]>([]);

  const handleCommand = (input: string) => {
    // Add input to outputs
    setOutputs((prev) => [
      ...prev,
      {
        id: uuidv4(),
        type: "input",
        content: input,
        timestamp: Date.now(),
      },
    ]);

    // Execute command
    const result = executeCommand(input);

    // Handle clear command
    if (result === "__CLEAR__") {
      setOutputs([]);
    } else {
      // Add output to outputs
      setOutputs((prev) => [
        ...prev,
        {
          id: uuidv4(),
          type: "output",
          content: result,
          timestamp: Date.now(),
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden">
      {/* Welcome Message */}
      <div className="p-2 sm:p-4 font-mono text-xs sm:text-sm text-green-400 border-b border-gray-700 flex-shrink-0">
        Welcome to Mozart Portfolio Terminal<br />
        Type 'help' for available commands
      </div>

      {/* Scrollable Output Area */}
      <div className="flex-1 overflow-y-auto flex flex-col">
        <TerminalOutput outputs={outputs} />
        {/* Input appears at the bottom and scrolls with content */}
        <div className="flex-shrink-0">
          <TerminalInput onSubmit={handleCommand} />
        </div>
      </div>
    </div>
  );
}
