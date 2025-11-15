"use client";

import { useState, useRef, useEffect } from "react";
import { TerminalOutput as TerminalOutputType, executeCommand } from "@/lib/cli";
import { TerminalOutput } from "./TerminalOutput";
import { TerminalInput } from "./TerminalInput";
import { v4 as uuidv4 } from "uuid";

export function CLIMode() {
  const [outputs, setOutputs] = useState<TerminalOutputType[]>([
    {
      id: uuidv4(),
      type: "output",
      content:
        "Welcome to Mozart Portfolio Terminal\nType 'help' for available commands",
      timestamp: Date.now(),
    },
  ]);

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
    <div className="flex flex-col h-screen bg-black">
      <TerminalOutput outputs={outputs} />
      <TerminalInput onSubmit={handleCommand} />
    </div>
  );
}
