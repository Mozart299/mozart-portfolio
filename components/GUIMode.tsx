"use client";

import { projects, about, contact } from "@/lib/projects";
import { useState } from "react";
import Link from "next/link";

type Section = "home" | "projects" | "about" | "contact";

export function GUIMode() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const selectedProjectData = selectedProject
    ? projects.find((p) => p.id === selectedProject)
    : null;

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Navigation */}
      <nav className="border-b border-gray-700 p-4 bg-black">
        <div className="max-w-4xl mx-auto flex gap-6">
          <button
            onClick={() => {
              setActiveSection("home");
              setSelectedProject(null);
            }}
            className={`px-4 py-2 ${activeSection === "home" ? "bg-green-400 text-black" : "hover:text-cyan-400"}`}
          >
            $ home
          </button>
          <button
            onClick={() => {
              setActiveSection("projects");
              setSelectedProject(null);
            }}
            className={`px-4 py-2 ${activeSection === "projects" ? "bg-green-400 text-black" : "hover:text-cyan-400"}`}
          >
            $ projects
          </button>
          <button
            onClick={() => setActiveSection("about")}
            className={`px-4 py-2 ${activeSection === "about" ? "bg-green-400 text-black" : "hover:text-cyan-400"}`}
          >
            $ about
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className={`px-4 py-2 ${activeSection === "contact" ? "bg-green-400 text-black" : "hover:text-cyan-400"}`}
          >
            $ contact
          </button>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto p-8">
        {activeSection === "home" && !selectedProject && (
          <div className="space-y-4">
            <div className="text-cyan-400">$ whoami</div>
            <div className="text-green-400 ml-4">
              <p>Full Stack Developer | Web Application Specialist</p>
              <p className="mt-2 text-gray-500">
                Building elegant solutions for complex problems.
              </p>
            </div>
            <div className="mt-8 text-cyan-400">$ ls projects</div>
            <div className="text-green-400 ml-4">
              <p>Type 'projects' in navigation to explore my work</p>
            </div>
          </div>
        )}

        {activeSection === "projects" && !selectedProject && (
          <div className="space-y-4">
            <div className="text-cyan-400">$ ls -la projects/</div>
            <div className="ml-4 space-y-2">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  className="block text-green-400 hover:text-cyan-400 hover:underline text-left w-full"
                >
                  <span className="text-gray-500">-rw-r--r--</span>
                  <span className="ml-4">{project.id}</span>
                  <span className="ml-4 text-gray-500">
                    {project.description.substring(0, 50)}...
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedProjectData && (
          <div className="space-y-4">
            <button
              onClick={() => setSelectedProject(null)}
              className="text-cyan-400 hover:text-green-400 mb-4"
            >
              ← Back to projects
            </button>
            <div className="text-cyan-400">$ cat {selectedProjectData.id}</div>
            <div className="ml-4 space-y-2 text-green-400">
              <div>
                <span className="text-cyan-400">Name:</span>{" "}
                {selectedProjectData.name}
              </div>
              <div>
                <span className="text-cyan-400">Description:</span>{" "}
                {selectedProjectData.description}
              </div>
              <div>
                <span className="text-cyan-400">Technologies:</span>
                <div className="ml-4 mt-1">
                  {selectedProjectData.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-gray-800 px-2 py-1 mr-2 mb-2 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {selectedProjectData.github && (
                <div>
                  <span className="text-cyan-400">GitHub:</span>
                  <Link
                    href={selectedProjectData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline ml-2"
                  >
                    {selectedProjectData.github}
                  </Link>
                </div>
              )}
              {selectedProjectData.liveUrl && (
                <div>
                  <span className="text-cyan-400">Live URL:</span>
                  <Link
                    href={selectedProjectData.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline ml-2"
                  >
                    {selectedProjectData.liveUrl}
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {activeSection === "about" && (
          <div className="space-y-4">
            <div className="text-cyan-400">$ cat about.txt</div>
            <div className="ml-4 space-y-2 text-green-400 whitespace-pre-wrap">
              {about}
            </div>
          </div>
        )}

        {activeSection === "contact" && (
          <div className="space-y-4">
            <div className="text-cyan-400">$ cat contact.txt</div>
            <div className="ml-4 space-y-2 text-green-400">
              <div>
                <span className="text-cyan-400">Email:</span>
                <Link
                  href={`mailto:${contact.email}`}
                  className="text-blue-400 hover:underline ml-2"
                >
                  {contact.email}
                </Link>
              </div>
              <div>
                <span className="text-cyan-400">GitHub:</span>
                <Link
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline ml-2"
                >
                  {contact.github}
                </Link>
              </div>
              <div>
                <span className="text-cyan-400">LinkedIn:</span>
                <Link
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline ml-2"
                >
                  {contact.linkedin}
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
