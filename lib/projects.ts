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
  // Tier 1 — Engineering depth
  {
    id: "compatibility-matrix",
    name: "Compatibility Matrix",
    description: "A modern web application for discovering deeper connections through advanced compatibility analysis. Analyzes multiple dimensions of personality, values, and communication styles with biometric integration (HRV) to help users build stronger relationships.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI", "TanStack React Query", "Axios", "Recharts", "OAuth 2.0", "Crypto-JS", "FastAPI", "Python", "PostgreSQL", "Supabase", "SQLAlchemy", "Pydantic", "Docker", "GitHub Actions"],
    github: "https://github.com/Mozart299/compatibility-matrix",
    liveUrl: "https://compatibility-matrix.vercel.app",
    featured: true,
  },
  {
    id: "bnpl",
    name: "BNPL Platform",
    description: "A comprehensive Buy Now Pay Later fintech platform with multi-role dashboards for admins, agents, merchants, companies, and employees. Features AI-powered credit scoring, real-time fraud detection, float management, payroll deduction integration, and automated compliance reporting.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Redis", "JWT", "Zod"],
    github: "https://github.com/Mozart299/bnpl-frontend",
    liveUrl: "https://bnpl-frontend-rosy.vercel.app",
    featured: true,
  },
  {
    id: "mini-deploy",
    name: "MiniDeploy",
    description: "A mini deployment platform that takes a Git repo URL and returns a live URL with real-time build log streaming. Automatically clones the repo, builds a Docker image via Railpack (no Dockerfile needed), spins up a container, and registers a subdomain route through Caddy — all streamed to the browser via Server-Sent Events.",
    technologies: ["React", "TypeScript", "Vite", "TanStack Router", "TanStack Query", "Node.js", "Express", "Docker", "Railpack", "Caddy", "SSE"],
    github: "https://github.com/Mozart299/mini-deploy",
  },
  {
    id: "fleet-analytics-pipeline",
    name: "Fleet Analytics Data Pipeline",
    description: "A real-time data pipeline that ingests and processes vehicle fleet telemetry data including GPS, fuel consumption, and driver behavior metrics. Built to demonstrate data engineering skills with stream processing, storage optimization, and business analytics dashboards for transportation businesses.",
    technologies: ["Apache Kafka", "Python", "FastAPI", "Apache Spark", "PostgreSQL", "TimescaleDB", "Redis"],
  },
  // Tier 2 — Full-stack apps with real users
  {
    id: "triptrack",
    name: "TripTrack",
    description: "A mobile-first trip tracking and expense management application for managing journeys, activities, and splitting costs among participants. Features journey planning, activity timeline tracking, and automatic expense splitting with real-time updates.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Nx"],
    github: "https://github.com/Mozart299/triptrack",
    liveUrl: "https://www.triptrack.xyz",
  },
  {
    id: "bill-splitter",
    name: "It's Happy Hour Somewhere",
    description: "A mobile-first bill splitting app designed to help groups track individual orders and bills when dining together. Features real-time synchronization so everyone can see what's been ordered and how much each person owes, with QR code support for easy session joining.",
    technologies: ["Next.js", "React", "TypeScript", "Nx", "Supabase", "Tailwind CSS", "QRCode.react"],
    github: "https://github.com/Mozart299/its-happy-hour-somewhere",
    liveUrl: "https://its-happy-hour-somewhere.vercel.app/",
  },
  {
    id: "invoiceug",
    name: "InvoiceUG",
    description: "A web app for Ugandan businesses to upload, parse, and validate URA (Uganda Revenue Authority) invoices. Supports PDF upload and QR code scanning to extract invoice data, check tax credit eligibility, and track claimable VAT amounts. Features tiered access plans (Free/Pro/Enterprise).",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "pdfjs-dist", "Tailwind CSS"],
    github: "https://github.com/Mozart299/invoiceug",
    liveUrl: "https://invoiceug.vercel.app",
  },
  {
    id: "dukari",
    name: "Dukari",
    description: "A multi-vendor e-commerce marketplace built for Ugandan businesses, featuring vendor storefronts, product management, order processing, and payment integration.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Redis"],
    github: "https://github.com/Mozart299/dukari-frontend",
    liveUrl: "https://dukari.vercel.app",
  },
  // Tier 3 — Client / production sites
  {
    id: "nambi-notes",
    name: "Nambi Notes Publishing House",
    description: "A modern publishing house website for Nambi Notes that showcases books, manages authors, facilitates book pitches, and enables online book sales with integrated PayPal checkout functionality. The site features animated UI components and responsive design.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "PayPal SDK"],
    github: "https://github.com/Mozart299/nambi-notes",
    liveUrl: "https://nambinotes.com",
  },
  {
    id: "musiconthefarm",
    name: "Kitty Town Music & Arts School",
    description: "A vibrant web platform for a music and arts education school in Uganda that offers music lessons, dance classes, and visual arts programs with a scholarship model supporting students from underprivileged backgrounds.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Nodemailer", "Zoho Mail"],
    github: "https://github.com/Mozart299/musiconthefarm",
    liveUrl: "https://www.musiconthefarm.com",
  },
  {
    id: "the-one-percent-standard",
    name: "The 1% Standard",
    description: "A fitness coaching and digital products platform offering personalized training programs, nutrition guidance, and self-optimization resources.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Substack (RSS feed integration)", "Node.js"],
    github: "https://github.com/Mozart299/the-one-percent-standard",
    liveUrl: "https://www.theonepercentstandard.com",
  },
  {
    id: "sunrise",
    name: "SUNRISE Project Website",
    description: "A content-managed website for the SUNRISE university consortium — a multi-institutional research and education initiative spanning African and European partner universities including Makerere, Kyambogo, and Strathmore. Features dynamic content via Sanity CMS, partner showcasing, and contact functionality.",
    technologies: ["Next.js", "React", "TypeScript", "Sanity CMS", "Tailwind CSS", "Resend"],
    github: "https://github.com/Mozart299/sunrise",
  },
  // Tier 4 — Prototypes / work in progress
  {
    id: "playlistpulse",
    name: "PlaylistPulse",
    description: "A social music platform for discovering and sharing playlists. Features user profiles, collaborative playlist management, a personalized dashboard with trending content, and real-time messaging.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "NextAuth", "Radix UI"],
    github: "https://github.com/Mozart299/playlistpulse-frontend",
  },
  {
    id: "wanderlust",
    name: "Wanderlust",
    description: "An Africa-focused travel guide with an interactive world map, curated destination profiles, hidden gems, and trip journals. Users can click map pins to explore destinations across the continent.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MapLibre GL"],
    github: "https://github.com/Mozart299/wanderlust",
    liveUrl: "https://wanderlust-site.vercel.app",
  },
  {
    id: "jk-gold-souk",
    name: "JK Gold Souk",
    description: "An e-commerce platform for investment-grade gold — bars, coins, and bullion. Features a product catalog, live gold price tracking, and contact functionality with a focus on transparency and trust.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Mozart299/jk-gold-souk",
    liveUrl: "https://jk-gold-souk.vercel.app",
  },
  {
    id: "radiant-smile-foundation",
    name: "Radiant Smile Foundation Website",
    description: "A website for our charity organisation",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "Framer Motion", "TypeScript"],
    github: "https://github.com/Mozart299/rsf-website",
    liveUrl: "https://radiant-smile-foundation.vercel.app",
  },
];

export const name = "Ssendegeya Kyeyune Peter";

export const about = `Software engineer based in Uganda. I like hard problems — from fintech systems to data pipelines to deployment tooling. Speak English and some German (B1/B2). Open to remote roles globally.

Skills:
- Frontend: HTML5, CSS3, Next.js, TypeScript, Tailwind CSS, Bootstrap, Vite, Framer Motion, Radix UI, TanStack Query
- Backend: Node.js, Express, Python (FastAPI), Strapi, Symfony, Sanity CMS, Zod
- Databases: MySQL, MongoDB, PostgreSQL, Supabase, Redis, TimescaleDB
- Data Engineering: Apache Kafka, Apache Spark
- UI/UX Design: Adobe XD, Figma
- Mobile Development: Flutter, Firebase
- DevOps: Docker, GitHub Actions
- Cloud: Google Cloud Platform
- Automation & Workflows: N8n
- No-Code Platforms: Webflow, Webflow Cloud
- Deployment: Render, Vercel, App Store, Google Play Store`;

export interface Experience {
  company: string;
  role: string;
  type: string;
  period: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    company: "AirQo",
    role: "Frontend Software Engineer",
    type: "Full-Time · Remote",
    period: "Nov 2024 – Present",
    bullets: [
      "Develop and maintain the AirQo Mobile Application (Flutter), translating Figma designs into production code and integrating REST APIs for real-time air quality data across African cities.",
      "Write comprehensive unit tests and contribute to QA processes — systematically validating app behavior, catching regressions, and documenting test outcomes with precision.",
      "Author and maintain technical documentation for internal workflows, onboarding materials, and CI/CD pipeline processes.",
      "Implement automated deployment workflows using GitHub Actions for Google Play Store releases, with documented release notes and changelogs.",
      "Debug cross-platform issues in Linux-based environments (Ubuntu) and provide clear written diagnoses for engineering team reviews.",
    ],
  },
];

export const certifications = [
  {
    title: "Modernize Infrastructure and Applications with Google Cloud",
    issuer: "Udacity",
    credentialUrl: "https://confirm.udacity.com/e/e5cff1ec-2019-11ef-8e8c-bf081dcbc0f0",
  },
  {
    title: "Operationalizing Cloud Security with Deepfence Threat Mapper",
    issuer: "Udacity",
    credentialUrl: "https://confirm.udacity.com/e/017c7350-1360-11ef-899c-3b4eb00f53ed",
  },
];

export const contact = {
  email: "peterkayk@gmail.com",
  phone: "(+256) 780898348",
  github: "https://github.com/Mozart299",
  linkedin: "https://www.linkedin.com/in/peterssendegeya/",
};
