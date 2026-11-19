"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/projects";

const LABELS = { Website: "Websites", App: "Apps", "Business tool": "Business tools", "Online store": "Online stores" } as const;
type Filter = "All" | keyof typeof LABELS;

export function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...(Object.keys(LABELS) as (keyof typeof LABELS)[]).filter((c) => projects.some((p) => p.category === c))];
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Show projects by type">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              filter === f ? "bg-ink text-paper border-ink" : "bg-card text-ink border-line hover:border-ink"
            }`}
          >
            {f === "All" ? `All projects (${projects.length})` : LABELS[f]}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {shown.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </>
  );
}
