export interface Project {
  id: string;
  name: string;
  category: "Website" | "App" | "Business tool" | "Online store";
  /** Who it was built for. Leave out for your own products. */
  client?: string;
  /** One or two plain-English sentences for cards */
  summary: string;
  highlights: string[];
  image: string;
  /** Technical write-up, shown under "Technical details" and in the terminal version */
  description: string;
  technologies: string[];
  liveUrl?: string;
  /** Shown on the home page */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "sence",
    name: "SEnCE, Makerere University",
    category: "Website",
    client: "Makerere University SEnCE",
    summary: "Website for Makerere University's Sustainable Energy Centre of Excellence, showing its research, projects, people and partners, with a live sunlight reading for Kampala.",
    highlights: [
      "Live sunlight panel for Kampala, updated through the day from real weather data",
      "Research areas, projects, people and partners in one place",
      "Clear and easy to read on phones",
    ],
    image: "/project-previews/sence-preview.jpg",
    description: "Website for the Sustainable Energy Centre of Excellence (SEnCE) at Makerere University's College of Engineering, Design, Art and Technology (CEDAT). Features a live solar irradiance widget for Kampala driven by the Open-Meteo API, plus sections for research areas, projects, people, facilities, training and partners.",
    technologies: ["Next.js", "React", "Open-Meteo API"],
    liveUrl: "https://sence-site.vercel.app",
    featured: true,
  },
  {
    id: "nambi-notes",
    name: "Nambi Notes Publishing House",
    category: "Website",
    client: "Nambi Notes Publishing House",
    summary: "Website for a publishing house. Visitors can browse books, meet the authors, pitch their own book and buy online with PayPal.",
    highlights: [
      "Book catalogue and author profiles",
      "Online book sales with PayPal checkout",
      "A form for new authors to pitch their book",
    ],
    image: "/project-previews/nambi-notes-preview.jpg",
    description: "A modern publishing house website for Nambi Notes that showcases books, manages authors, facilitates book pitches, and enables online book sales with integrated PayPal checkout functionality. The site features animated UI components and responsive design.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "PayPal SDK"],
    liveUrl: "https://nambinotes.com",
    featured: true,
  },
  {
    id: "musiconthefarm",
    name: "Kitty Town Music & Arts School",
    category: "Website",
    client: "Kitty Town Music & Arts School",
    summary: "Website for a music and arts school in Uganda offering music, dance and art lessons, with scholarships for children who need them.",
    highlights: [
      "Shows lessons in music, dance and visual art",
      "Explains the scholarship programme for children who need support",
      "Enquiries go straight to the school's inbox",
    ],
    image: "/project-previews/musiconthefarm-preview.jpg",
    description: "A vibrant web platform for a music and arts education school in Uganda that offers music lessons, dance classes, and visual arts programs with a scholarship model supporting students from underprivileged backgrounds.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Nodemailer", "Zoho Mail"],
    liveUrl: "https://www.musiconthefarm.com",
    featured: true,
  },
  {
    id: "sunrise",
    name: "SUNRISE Project Website",
    category: "Website",
    client: "SUNRISE university partnership",
    summary: "Website for a partnership of African and European universities, including Makerere and Strathmore. The team updates the content themselves, no developer needed.",
    highlights: [
      "Brings partner universities in Africa and Europe together in one place",
      "Staff update news and pages themselves, no developer needed",
      "Contact form that delivers messages reliably",
    ],
    image: "/project-previews/sunrise-preview.png",
    description: "A content-managed website for the SUNRISE university consortium — a multi-institutional research and education initiative spanning African and European partner universities including Makerere, Kyambogo, and Strathmore. Features dynamic content via Sanity CMS, partner showcasing, and contact functionality.",
    technologies: ["Next.js", "React", "TypeScript", "Sanity CMS", "Tailwind CSS", "Resend"],
    liveUrl: "https://project-sunrise.org",
    featured: true,
  },
  {
    id: "the-one-percent-standard",
    name: "The 1% Standard",
    category: "Website",
    client: "The 1% Standard",
    summary: "A fitness coaching site selling training programmes and nutrition guides, with the coach's latest articles added automatically.",
    highlights: [
      "Coaching applications",
      "Training programmes and nutrition guides for sale",
      "Latest articles added automatically",
    ],
    image: "/project-previews/the-one-percent-standard-preview.jpg",
    description: "A fitness coaching and digital products platform offering personalized training programs, nutrition guidance, and self-optimization resources.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Substack (RSS feed integration)", "Node.js"],
    liveUrl: "https://www.theonepercentstandard.com",
  },
  {
    id: "radiant-smile-foundation",
    name: "Radiant Smile Foundation Website",
    category: "Website",
    client: "Radiant Smile Foundation",
    summary: "Website for the Radiant Smile Foundation, our charity, sharing its work and how people can support it.",
    highlights: [
      "Mission, programmes and events",
      "Pages for volunteers and donors",
      "Simple to read on any phone",
    ],
    image: "/project-previews/radiant-smile-foundation-preview.jpg",
    description: "A website for our charity organisation",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "Framer Motion", "TypeScript"],
    liveUrl: "https://radiant-smile-foundation.vercel.app",
  },
  {
    id: "jk-gold-souk",
    name: "JK Gold Souk",
    category: "Online store",
    client: "JK Gold Souk",
    summary: "An online shop for gold bars and coins, with live gold prices.",
    highlights: [
      "Catalogue of gold bars and coins",
      "Live gold prices",
      "Ask for a quote in one click",
    ],
    image: "/project-previews/jk-gold-souk-preview.jpg",
    description: "An e-commerce platform for investment-grade gold — bars, coins, and bullion. Features a product catalog, live gold price tracking, and contact functionality with a focus on transparency and trust.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://jk-gold-souk.vercel.app",
  },
];

export const name = "Ssendegeya Kyeyune Peter";

export const about = `Software engineer based in Uganda. I like turning messy real-world problems into simple software, from tax tools to websites for schools and charities. Speak English and some German (B1/B2). Open to remote roles globally.

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
  linkedin: "https://www.linkedin.com/in/peterssendegeya/",
  whatsapp: "https://wa.me/256780898348",
};
