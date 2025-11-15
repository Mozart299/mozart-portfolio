export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "dukari",
    name: "Dukari",
    description: "A full-stack e-commerce platform for buying and selling goods",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/dukari-frontend",
    liveUrl: "https://dukari.com",
    featured: true,
  },
  {
    id: "airbnb-verify",
    name: "Airbnb Verify",
    description: "Verification system for Airbnb property listings",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    github: "https://github.com/yourusername/airbnb-verify",
    featured: true,
  },
  {
    id: "playlist-pulse",
    name: "Playlist Pulse",
    description: "Music playlist analytics and recommendation engine",
    technologies: ["React", "Node.js", "Spotify API", "Firebase"],
    github: "https://github.com/yourusername/playlistpulse-frontend",
  },
  {
    id: "nambi-notes",
    name: "Nambi Notes",
    description: "Collaborative note-taking application with real-time sync",
    technologies: ["Next.js", "React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/yourusername/nambi-notes",
  },
  {
    id: "music-farm",
    name: "Music on the Farm",
    description: "Event management platform for outdoor music festivals",
    technologies: ["React", "Express", "PostgreSQL", "Socket.io"],
    github: "https://github.com/yourusername/musiconthefarm",
    liveUrl: "https://musiconthefarm.com",
  },
  {
    id: "compatibility-matrix",
    name: "Compatibility Matrix",
    description: "Tool for tracking software and hardware compatibility",
    technologies: ["Next.js", "React", "PostgreSQL", "TypeScript"],
    github: "https://github.com/yourusername/compatibility-matrix",
  },
  {
    id: "survey-generator",
    name: "Survey Generator",
    description: "Create, distribute and analyze surveys with advanced analytics",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/yourusername/survey-generator",
    featured: true,
  },
  {
    id: "fleet-analytics",
    name: "Fleet Analytics",
    description: "Data pipeline and analytics for fleet vehicle tracking",
    technologies: ["Python", "Kafka", "PostgreSQL", "Grafana"],
    github: "https://github.com/yourusername/fleet-analytics-data-pipeline",
  },
];

export const about = `Hi! I'm a full-stack developer with a passion for building web applications that solve real problems.

I have experience with:
- Frontend: React, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express, Python
- Databases: MongoDB, PostgreSQL, Firebase
- Tools: Git, Docker, AWS, Firebase

I love working on projects that combine great UX with solid engineering practices.`;

export const contact = {
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};
