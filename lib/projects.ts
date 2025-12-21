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
    id: "bill-splitter",
    name: "It's Happy Hour Somewhere",
    description: "A mobile-first bill splitting app designed to help groups track individual orders and bills when dining together. Features real-time synchronization so everyone can see what's been ordered and how much each person owes, with QR code support for easy session joining.",
    technologies: ["Next.js", "React", "TypeScript", "Nx", "Supabase", "Tailwind CSS", "QRCode.react"],
    github: "https://github.com/Mozart299/its-happy-hour-somewhere",
    liveUrl: "https://its-happy-hour-somewhere.vercel.app/",
  },
  {
    id: "triptrack",
    name: "TripTrack",
    description: "A mobile-first trip tracking and expense management application for managing journeys, activities, and splitting costs among participants. Features journey planning, activity timeline tracking, and automatic expense splitting with real-time updates.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Nx"],
    github: "https://github.com/Mozart299/triptrack",
    liveUrl: "https://www.triptrack.xyz",
  },
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
    id: "compatibility-matrix",
    name: "Compatibility Matrix",
    description: "A modern web application for discovering deeper connections through advanced compatibility analysis. Analyzes multiple dimensions of personality, values, and communication styles with biometric integration (HRV) to help users build stronger relationships.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI", "TanStack React Query", "Axios", "Recharts", "OAuth 2.0", "Crypto-JS", "FastAPI", "Python", "PostgreSQL", "Supabase", "SQLAlchemy", "Pydantic", "Docker", "GitHub Actions"],
    github: "https://github.com/Mozart299/compatibility-matrix",
    liveUrl: "https://compatibility-matrix.vercel.app",
  },
  {
    id: "radiant-smile-foundation",
    name: "Radiant Smile Foundation Website",
    description: "A website for our charity organisation",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "Framer Motion", "TypeScript"],
    github: "https://github.com/Mozart299/rsf-website",
    liveUrl: "https://radiant-smile-foundation.vercel.app",
  },
    {
    id: "sample-dev-portfolio-site",
    name: "Neon Portfolio",
    description: "A sample developer portfolio site",
    technologies: ["Webflow", "Webflow Cloud"],
    liveUrl: "https://mozart-8368c3.webflow.io/neon-portfolio",
  },
];

export const name = "Ssendegeya Kyeyune Peter";

export const about = `Hi! I'm a software developer with a passion for solving probblems.

I have experience with:
- Frontend: HTML5, CSS3, Next.js, TypeScript, Tailwind CSS, Bootstrap
- Backend: Node.js, Express, Python (FastAPI), Strapi, Symfony
- Databases: MySQL, MongoDB, PostgreSQL, Supabase
- UI/UX Design: Adobe XD, Figma
- Mobile Development: Flutter, Firebase
- Cloud: Google Cloud Platform
- Automation & Workflows: N8n
- No-Code Platforms: Webflow, Webflow Cloud
- Deployment: Render, Vercel, App Store, Google Play Store

I love working on projects that combine great UX with solid engineering practices.`;

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
