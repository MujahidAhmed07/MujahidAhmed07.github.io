export type Link = { label: string; href: string };
export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  highlights: string[];
};

export type Experience = {
  company: string;
  role: string;
  range: string;
  bullets: string[];
};

export const profile = {
  name: "Mujahid Ahmed",
  headline: "Software Engineer — WordPress Plugin Architect",
  subhead:
    "I build secure, scalable LMS + WooCommerce add-ons and ship maintainable full‑stack features with clean APIs.",
  location: "Pakistan",
  email: "your.email@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/your-handle" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
    { label: "Resume (PDF)", href: "/Mujahid%20Ahmed%20Resume.pdf" }
  ] as Link[],
};

export const skills = [
  { group: "Core", items: ["PHP", "WordPress Plugin Dev", "WooCommerce", "Security Hardening"] },
  { group: "Frontend", items: ["JavaScript", "AJAX", "jQuery", "React", "Next.js"] },
  { group: "Backend", items: ["MySQL", "REST APIs", "Node.js", "Spring Boot (basics)"] },
];

export const experiences: Experience[] = [
  {
    company: "WebCube Technologies",
    role: "Software Engineer",
    range: "Feb 2025 — Present",
    bullets: [
      "Developed and maintained WordPress plugins with a focus on performance, security, and scalability.",
      "Built LMS modules and integrations for LearnDash / LifterLMS / BuddyBoss and WooCommerce ecosystems.",
      "Collaborated with cross‑functional teams to deliver features and improve reliability."
    ],
  },
  {
    company: "Objects",
    role: "Software Engineer",
    range: "Dec 2022 — Jan 2025",
    bullets: [
      "Implemented custom WooCommerce & LMS features and improved compatibility with themes / third‑party plugins.",
      "Refactored legacy code and added tests to increase maintainability and reduce regressions.",
      "Applied WordPress coding standards and security best practices."
    ],
  },
];

export const projects: Project[] = [
  {
    title: "LearnDash AI Summary & Transcript Add‑on",
    subtitle: "WordPress / LearnDash • AI",
    description:
      "An LMS add‑on that generates lecture summaries and transcripts from video content, designed for clean admin UX and fast processing.",
    tags: ["LearnDash", "WordPress", "Add‑on", "AI", "Video"],
    github: "https://github.com/your-handle/learndash-ai-addon",
    demo: "",
    highlights: [
      "Modular architecture (services + hooks) for easy extension",
      "Async processing-friendly UI patterns",
      "Secure input handling and permission gates",
    ],
  },
  {
    title: "Invest with Intelligence",
    subtitle: "Spring Boot REST • React • ML",
    description:
      "A full‑stack project for stock prediction and sentiment scoring using a REST API and React dashboard.",
    tags: ["Spring Boot", "REST", "React", "ML"],
    github: "https://github.com/your-handle/invest-with-intelligence",
    demo: "",
    highlights: [
      "Clean REST endpoints with typed payloads",
      "Dashboard UI with KPI cards and charts",
      "Model integration for prediction + analysis",
    ],
  },
];
