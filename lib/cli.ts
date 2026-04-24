import { projects, about, contact, name, certifications, experience } from "./projects";

export interface TerminalOutput {
  id: string;
  type: "input" | "output";
  content: string;
  timestamp: number;
}

export type CommandHandler = (args: string[]) => string;

export const commands: Record<string, CommandHandler> = {
  help: () => {
    return `Available commands:
  help              - Show this help message
  ls                - List all projects
  cat <project>     - View project details
  about             - View about section
  experience        - View work experience
  contact           - View contact information
  github <project>  - Open GitHub repo for a project
  clear             - Clear terminal
  whoami            - Show current user

Usage: Type a command and press Enter`;
  },

  ls: () => {
    const projectList = projects
      .map((p) => `  ${p.id.padEnd(20)} - ${p.description.substring(0, 40)}...`)
      .join("\n");
    return `Projects:\n${projectList}\n\nUse 'cat <project>' to view details or 'help' for more commands`;
  },

  cat: (args: string[]) => {
    if (!args[0]) {
      return "Error: Please specify a project. Use 'ls' to see available projects.";
    }

    const project = projects.find((p) => p.id === args[0].toLowerCase());

    if (!project) {
      return `Error: Project '${args[0]}' not found. Use 'ls' to see available projects.`;
    }

    let output = `Project: ${project.name}\n`;
    output += `Description: ${project.description}\n`;
    output += `Technologies: ${project.technologies.join(", ")}\n`;

    if (project.github) {
      output += `GitHub: ${project.github}\n`;
    }

    if (project.liveUrl) {
      output += `Live URL: ${project.liveUrl}\n`;
    }

    return output;
  },

  about: () => {
    const certificationsText = certifications
      .map((cert) => `\n${cert.title}\n  Issuer: ${cert.issuer}\n  Credential: ${cert.credentialUrl}`)
      .join("\n");
    return `${about}\n\nCertifications:${certificationsText}`;
  },

  experience: () => {
    return experience
      .map((job) => {
        const bullets = job.bullets.map((b) => `  • ${b}`).join("\n");
        return `${job.company} — ${job.role} (${job.type})\n${job.period}\n\n${bullets}`;
      })
      .join("\n\n---\n\n");
  },

  contact: () => {
    return `Contact Information:\n\nEmail: ${contact.email}\nPhone: ${contact.phone}\nGitHub: ${contact.github}\nLinkedIn: ${contact.linkedin}`;
  },

  github: (args: string[]) => {
    if (!args[0]) {
      return `Error: Please specify a project. Use 'ls' to see available projects.`;
    }

    const project = projects.find((p) => p.id === args[0].toLowerCase());

    if (!project || !project.github) {
      return `Error: Project '${args[0]}' not found or has no GitHub repo.`;
    }

    return `Opening ${project.github}...\n(In a real environment, this would open the link)`;
  },

  clear: () => {
    return "__CLEAR__";
  },

  whoami: () => {
    return name;
  },

  echo: (args: string[]) => {
    return args.join(" ");
  },

  pwd: () => {
    return "~/portfolio";
  },

  date: () => {
    return new Date().toString();
  },
};

export function parseCommand(input: string): { command: string; args: string[] } {
  const trimmed = input.trim();
  if (!trimmed) return { command: "", args: [] };

  const parts = trimmed.split(/\s+/);
  return {
    command: parts[0].toLowerCase(),
    args: parts.slice(1),
  };
}

export function executeCommand(input: string): string {
  const { command, args } = parseCommand(input);

  if (!command) {
    return "";
  }

  if (command in commands) {
    return commands[command](args);
  }

  return `Command not found: ${command}. Type 'help' for available commands.`;
}
