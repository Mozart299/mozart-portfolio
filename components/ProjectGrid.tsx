import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/projects";

const spotlights = [
  { id: "sunrise", action: "Explore SUNRISE" },
  { id: "nambi-notes", action: "Browse the books", path: "/books" },
];

export function ProjectGrid() {
  const otherProjects = projects.filter((project) => !spotlights.some(({ id }) => id === project.id));

  return (
    <>
      <section className="grain bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-24 sm:pt-32 pb-12 sm:pb-16">
          <h1 className="font-display text-5xl sm:text-7xl tracking-tight">Selected projects</h1>
          <div className="mt-6 sm:mt-10 grid gap-10 md:grid-cols-2 md:gap-8">
            {spotlights.map(({ id, action, path }) => {
              const project = projects.find((p) => p.id === id);
              return project && <ProjectCard key={id} project={project} action={action} path={path} />;
            })}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-20">
        <h2 className="mb-6 sm:mb-10 font-display text-4xl sm:text-5xl">More projects</h2>
        <div className="divide-y divide-line border-y border-line">
          {otherProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>
    </>
  );
}
