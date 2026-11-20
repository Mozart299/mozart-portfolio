import { contact } from "./projects";

/** Put a photo in /public (e.g. /public/me.jpg) and set this to "/me.jpg" to show it on the About page. */
export const photo: string | undefined = "/me.jpg";

const greeting = "Hi Peter, I'd like to talk about a project.";

export const emailHref = `mailto:${contact.email}?subject=${encodeURIComponent("New project enquiry")}&body=${encodeURIComponent(
  `${greeting}\n\nAbout my business:\n\nWhat I'd like built:\n\nWhen I'd like it ready:\n`,
)}`;
export const whatsappHref = `${contact.whatsapp}?text=${encodeURIComponent(greeting)}`;
export const phoneHref = `tel:${contact.phone.replace(/[^\d+]/g, "")}`;
export const phoneLabel = contact.phone.replace(/[()]/g, "");

export const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export const btn = {
  primary:
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent text-white font-medium hover:bg-accent-dark transition-colors",
  ghost:
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-ink/15 text-ink font-medium hover:border-ink transition-colors",
};

export const services = [
  {
    title: "Websites",
    text: "A professional website for your business, school or charity. It looks great on phones and you can update it yourself.",
    includes: [
      "Works on phones, tablets and computers",
      "An easy editor so you can change text and pictures yourself",
      "Contact forms that reach your inbox",
      "Set up on your own web address",
    ],
    examples: ["sence", "nambi-notes", "musiconthefarm", "sunrise"],
    icon: "site",
  },
  {
    title: "Web & mobile apps",
    text: "Custom apps for your customers or staff on the web, Android and iPhone, from first idea to app store.",
    includes: ["Android, iPhone and web", "Accounts and logins", "Dashboards for your team", "Published to the app stores"],
    examples: [],
    icon: "phone",
  },
  {
    title: "Online sales & payments",
    text: "Sell products or services online, take payments, and see what's selling from a simple dashboard.",
    includes: ["Product catalogue", "Online payments, for example PayPal", "Order and sales overview"],
    examples: ["nambi-notes", "jk-gold-souk", "the-one-percent-standard"],
    icon: "cart",
  },
  {
    title: "Automating busywork",
    text: "Connect the tools you already use so invoices, reports and follow-ups happen on their own.",
    includes: ["Connect the tools you already use", "Automatic emails and follow-ups", "Reports without copy and paste"],
    examples: ["the-one-percent-standard"],
    icon: "loop",
  },
] as const;

export const steps = [
  { title: "We talk", text: "Tell me about your business and what you want to achieve. No technical knowledge needed." },
  { title: "I plan it", text: "You get a clear plan in plain language: what I'll build, how long it takes and what it costs." },
  { title: "I build it", text: "You see progress as it happens and give feedback before anything goes live." },
  { title: "We launch", text: "Your site or app goes live, I show you how to use it, and I'm around if you need help." },
];

export const faqs = [
  {
    q: "I'm not technical. Is that a problem?",
    a: "Not at all. Most of my clients aren't. I explain everything in plain language and take care of the technical side for you.",
  },
  {
    q: "Can I update my website myself?",
    a: "Yes. I can set up a simple editor so you can change text, pictures and news without calling a developer, like on the SUNRISE website.",
  },
  {
    q: "Will it work on phones?",
    a: "Yes. Everything I build works on phones, tablets and computers. Most of your visitors will be on a phone, so I design for that first.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on what you need. Tell me about your project and I'll give you a clear price before any work starts.",
  },
  {
    q: "Do you work with clients outside Uganda?",
    a: "Yes. I work remotely with clients anywhere, over WhatsApp, email and video calls.",
  },
];
