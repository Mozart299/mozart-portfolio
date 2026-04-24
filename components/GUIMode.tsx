"use client";

import { projects, about, contact, name, certifications, experience } from "@/lib/projects";
import { useState } from "react";
import Link from "next/link";

type Section = "home" | "projects" | "experience" | "about" | "contact";

export function GUIMode() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const selectedProjectData = selectedProject
    ? projects.find((p) => p.id === selectedProject)
    : null;

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Navigation */}
      <nav className="border-b border-gray-700 p-2 sm:p-4 bg-black">
        <div className="max-w-4xl mx-auto flex gap-2 sm:gap-6 flex-wrap">
          <button
            onClick={() => {
              setActiveSection("home");
              setSelectedProject(null);
            }}
            className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm ${activeSection === "home" ? "bg-green-400 text-black" : "hover:text-cyan-400"}`}
          >
            home
          </button>
          <button
            onClick={() => {
              setActiveSection("projects");
              setSelectedProject(null);
            }}
            className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm ${activeSection === "projects" ? "bg-green-400 text-black" : "hover:text-cyan-400"}`}
          >
            projects
          </button>
          <button
            onClick={() => setActiveSection("experience")}
            className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm ${activeSection === "experience" ? "bg-green-400 text-black" : "hover:text-cyan-400"}`}
          >
            experience
          </button>
          <button
            onClick={() => setActiveSection("about")}
            className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm ${activeSection === "about" ? "bg-green-400 text-black" : "hover:text-cyan-400"}`}
          >
            about
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm ${activeSection === "contact" ? "bg-green-400 text-black" : "hover:text-cyan-400"}`}
          >
            contact
          </button>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto p-4 sm:p-8">
        {activeSection === "home" && !selectedProject && (
          <div className="space-y-4">
            <div className="text-cyan-400">$ whoami</div>
            <div className="text-green-400 ml-2 sm:ml-4 break-words">
              <p className="text-sm sm:text-base font-semibold">{name}</p>
              <p className="mt-1 text-gray-400 text-xs sm:text-sm">Software Developer</p>
              <p className="mt-2 text-gray-500 text-xs sm:text-sm">
                Building elegant solutions for complex problems.
              </p>
            </div>
            <div className="mt-8 text-cyan-400">$ ls projects</div>
            <div className="text-green-400 ml-2 sm:ml-4 text-sm sm:text-base">
              <p>Type 'projects' in navigation to explore my work</p>
            </div>
          </div>
        )}

        {activeSection === "projects" && !selectedProject && (
          <div className="space-y-4">
            <div className="text-cyan-400 text-sm sm:text-base">$ ls -la projects/</div>
            <div className="ml-2 sm:ml-4 space-y-2">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  className="block text-green-400 hover:text-cyan-400 hover:underline text-left w-full text-xs sm:text-sm break-words"
                >
                  <span className="text-gray-500 hidden sm:inline">-rw-r--r--</span>
                  <span className="ml-0 sm:ml-4">{project.id}</span>
                  <span className="ml-2 sm:ml-4 text-gray-500 hidden sm:inline">
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
              className="text-cyan-400 hover:text-green-400 mb-4 text-sm sm:text-base"
            >
              ← Back to projects
            </button>
            <div className="text-cyan-400 text-sm sm:text-base break-words">$ cat {selectedProjectData.id}</div>
            <div className="ml-2 sm:ml-4 space-y-2 text-green-400 text-xs sm:text-sm">
              <div className="break-words">
                <span className="text-cyan-400">Name:</span>{" "}
                {selectedProjectData.name}
              </div>
              <div className="break-words">
                <span className="text-cyan-400">Description:</span>{" "}
                {selectedProjectData.description}
              </div>
              <div className="break-words">
                <span className="text-cyan-400">Technologies:</span>
                <div className="ml-2 sm:ml-4 mt-1 flex flex-wrap gap-2">
                  {selectedProjectData.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-gray-800 px-2 py-1 text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {selectedProjectData.github && (
                <div className="break-words">
                  <span className="text-cyan-400">GitHub:</span>
                  <Link
                    href={selectedProjectData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline ml-2 block sm:inline break-all"
                  >
                    {selectedProjectData.github}
                  </Link>
                </div>
              )}
              {selectedProjectData.liveUrl && (
                <div className="break-words">
                  <span className="text-cyan-400">Live URL:</span>
                  <Link
                    href={selectedProjectData.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline ml-2 block sm:inline break-all"
                  >
                    {selectedProjectData.liveUrl}
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {activeSection === "experience" && (
          <div className="space-y-4">
            <div className="text-cyan-400 text-sm sm:text-base">$ cat experience.txt</div>
            <div className="ml-2 sm:ml-4 space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="border-l-2 border-green-400 pl-4 space-y-2">
                  <div className="text-green-400 font-semibold text-sm sm:text-base">{job.company}</div>
                  <div className="text-cyan-400 text-xs sm:text-sm">{job.role} · {job.type}</div>
                  <div className="text-gray-500 text-xs sm:text-sm">{job.period}</div>
                  <ul className="mt-2 space-y-2">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="text-green-400 text-xs sm:text-sm flex gap-2">
                        <span className="text-cyan-400 shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "about" && (
          <div className="space-y-4">
            <div className="text-cyan-400 text-sm sm:text-base">$ cat about.txt</div>
            <div className="ml-2 sm:ml-4 space-y-2 text-green-400 whitespace-pre-wrap text-xs sm:text-sm">
              {about}
            </div>

            <div className="mt-6 text-cyan-400 text-sm sm:text-base">$ cat certifications.txt</div>
            <div className="ml-2 sm:ml-4 space-y-3 text-green-400 text-xs sm:text-sm">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l border-gray-600 pl-3">
                  <div className="break-words">
                    <span className="text-cyan-400">Title:</span> {cert.title}
                  </div>
                  <div className="break-words">
                    <span className="text-cyan-400">Issuer:</span> {cert.issuer}
                  </div>
                  <div className="break-words">
                    <Link
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      View Credential →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "contact" && (
          <div className="space-y-4">
            <div className="text-cyan-400 text-sm sm:text-base">$ cat contact.txt</div>
            <div className="ml-2 sm:ml-4 space-y-2 text-green-400 text-xs sm:text-sm">
              <div className="break-words">
                <span className="text-cyan-400">Email:</span>
                <Link
                  href={`mailto:${contact.email}`}
                  className="text-blue-400 hover:underline ml-2 block sm:inline break-all"
                >
                  {contact.email}
                </Link>
              </div>
              <div className="break-words">
                <span className="text-cyan-400">Phone:</span>
                <Link
                  href={`tel:${contact.phone}`}
                  className="text-blue-400 hover:underline ml-2 block sm:inline break-all"
                >
                  {contact.phone}
                </Link>
              </div>
              <div className="break-words">
                <span className="text-cyan-400">GitHub:</span>
                <Link
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline ml-2 block sm:inline break-all"
                >
                  {contact.github}
                </Link>
              </div>
              <div className="break-words">
                <span className="text-cyan-400">LinkedIn:</span>
                <Link
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline ml-2 block sm:inline break-all"
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
