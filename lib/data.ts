export type Link = { label: string; href: string };
export type CategoryKey = "all" | "wordpress" | "custom-wordpress" | "wordpress-maintenance" | "saas";

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  category: "wordpress" | "custom-wordpress" | "wordpress-maintenance" | "saas";
  tags: string[];
  github?: string;
  demo?: string;
  link?: string;
  image?: string;
  highlights: string[];
};

export type Experience = {
  company: string;
  role: string;
  range: string;
  location: string;
  description?: string;
  bullets: string[];
};

export type Education = {
  degree: string;
  institution: string;
  range: string;
  location: string;
};

export type Language = {
  name: string;
  proficiency: string;
};

export const portfolioCategories: { key: CategoryKey; label: string; description: string }[] = [
  { key: "all", label: "All Works", description: "Complete portfolio across commercial plugins, custom solutions, maintenance & SaaS" },
  { key: "wordpress", label: "WordPress Plugins", description: "Commercial WordPress & WooCommerce plugins powering thousands of active stores" },
  { key: "custom-wordpress", label: "Custom WordPress", description: "Bespoke WordPress developments, custom LMS modules & API integrations" },
  { key: "wordpress-maintenance", label: "WordPress Maintenance", description: "Performance optimization, security hardening, bug fixes & system maintenance" },
  { key: "saas", label: "SaaS & Web Apps", description: "Full-stack web platforms, MERN SaaS solutions & machine learning applications" },
];

export const profile = {
  name: "Mujahid Ahmed",
  headline: "Software Engineer",
  subhead:
    "Results-driven Software Engineer with 3+ years of experience in full-stack development, WordPress plugin architecture, and API integration. Skilled in building custom WooCommerce add-ons and delivering scalable, high-quality web solutions using PHP and JavaScript.",
  location: "Petaling Jaya, Malaysia",
  email: "ahmedqure758@gmail.com",
  phone: "+60 16 4023560",
  phoneHref: "tel:+60164023560",
  links: [
    { label: "GitHub", href: "https://github.com/MujahidAhmed07" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mujahid-ahmed-970b98228/" },
    { label: "Phone", href: "tel:+60164023560" },
    { label: "Medium", href: "https://medium.com/@ahmedqure758" },
    { label: "Portfolio", href: "https://mujahidahmed07.github.io" },
    { label: "Resume", href: "/Mujahid Ahmed Resume.pdf" }
  ] as Link[],
};

export const skills = [
  {
    group: "Tech Stack",
    items: ["PHP", "JavaScript", "React.js", "Node.js", "Express.js", "MERN Stack", "Flask (Python)", "Spring Boot (Java)", "MySQL", "Ajax / jQuery", "HTML5/CSS3"]
  },
  {
    group: "Concepts & Architecture",
    items: ["Object-Oriented Programming", "REST API Design", "System Architecture", "Security Hardening", "Database Query Optimization", "Git & GitHub Workflow", "Problem Solving"]
  },
  {
    group: "Domain & E-Commerce",
    items: ["WordPress Plugin Architecture", "WooCommerce Compliance", "LearnDash / LifterLMS", "BuddyBoss Modules", "Shopify Development", "B2B E-Commerce Workflows"]
  },
  {
    group: "Tools, Hosting & Infra",
    items: ["Postman / Insomnia", "WP-CLI", "Composer", "Query Monitor", "cPanel & Hosting Management", "Cloudflare CDN & Security", "AI Coding Tools (Cursor / Antigravity / Claude)", "VS Code", "Jira / Slack / Hubstaff"]
  }
];

export const experiences: Experience[] = [
  {
    company: "WooNinjas",
    role: "Wordpress Plugin Developer",
    range: "Feb 2025 — Present",
    location: "USA | Remote",
    description: "Leading WordPress & WooCommerce agency specializing in custom enterprise extensions, LearnDash LMS platforms, and official WooCommerce.com marketplace plugins.",
    bullets: [
      "Architect and maintain high-volume commercial WooCommerce plugins powering 10,000+ active e-commerce stores.",
      "Engineered custom LMS extensions for LearnDash, LifterLMS, and BuddyBoss with AI video transcription & course automation.",
      "Apply strict WordPress security standards (data sanitization, nonce verification, capabilities checks) achieving 99.9% vulnerability-free code.",
      "Optimize PHP memory usage and database query execution, reducing API latency by up to 40% on high-traffic sites."
    ],
  },
  {
    company: "Objects",
    role: "Wordpress Developer",
    range: "Dec 2022 — Jan 2025",
    location: "Karachi, Pakistan",
    description: "WordPress & WooCommerce specialized agency and plugin development company.",
    bullets: [
      "Bug fixing and feature enhancement for commercial WooCommerce plugins.",
      "Custom plugin development and task-specific functionality modifications.",
      "Technical testing to ensure optimal plugin performance and reliability.",
      "Code structure optimization, cleanup, and refactoring.",
      "WooCommerce-compliant development using code sniffers and best practices.",
      "Compatibility assurance with third-party plugins and themes."
    ],
  },
];

export const educations: Education[] = [
  {
    degree: "Master's in IT",
    institution: "City University",
    range: "Jun 2026 (Expected)",
    location: "Petaling Jaya, Malaysia",
  },
  {
    degree: "BS Software Engineering",
    institution: "Iqra University",
    range: "Jan 2020 — Feb 2024",
    location: "Karachi, Pakistan",
  },
];

export const languages: Language[] = [
  { name: "English", proficiency: "Professional Working Proficiency" },
  { name: "Urdu", proficiency: "Full Professional Proficiency" },
];

export const interests = [
  "Tourism",
  "Gym",
  "Indoor Games",
  "Coding",
  "Advanced Technologies",
  "Cricket"
];

// All Projects categorized for Portfolio Uploads
export const allProjects: Project[] = [
  // -------------------------------------------------------------
  // 1. WORDPRESS (COMMERCIAL MARKETPLACE PLUGINS)
  // -------------------------------------------------------------
  {
    title: "Wholesale For WooCommerce",
    subtitle: "B2B Ecommerce Marketplace Plugin",
    description: "Enterprise B2B wholesale pricing, custom user role management, and bulk order workflows for WooCommerce.com.",
    category: "wordpress",
    tags: ["WooCommerce.com", "B2B", "4,000+ Stores"],
    demo: "https://woocommerce.com/products/wholesale-for-woocommerce/",
    image: "/wholesale.png",
    highlights: [
      "Cut B2B checkout time by 40% with bulk order forms, multi-tiered wholesale pricing rules, and automated tax-exemption roles.",
      "Scales across 4,000+ active WooCommerce B2B merchant stores globally on the official WooCommerce marketplace.",
      "Eliminated manual admin overhead by engineering rule-based registration approval and auto-role assignment workflows."
    ],
  },
  {
    title: "Donation for WooCommerce",
    subtitle: "Fundraising & Subscription Extension",
    description: "Empower stores to accept recurring donations, goal progress bars, and checkout change round-ups.",
    category: "wordpress",
    tags: ["WooCommerce.com", "Fundraising", "2,000+ Installs"],
    demo: "https://woocommerce.com/products/donation-product-for-woocommerce/",
    image: "/donation.png",
    highlights: [
      "Processed over $1M+ in non-profit donations with recurring subscriptions and tax-deductible email receipt dispatches.",
      "Boosted donation conversion by 25% by rendering real-time AJAX campaign progress bars and pre-set amount buttons.",
      "Increased checkout contribution rates by adding 1-click cart change round-up functionality."
    ],
  },
  {
    title: "Currency Switcher for WooCommerce",
    subtitle: "Multi-Currency FinTech Plugin",
    description: "Real-time exchange rate sync, Geo-IP detection, and multi-currency payment support for global stores.",
    category: "wordpress",
    tags: ["WooCommerce.com", "FinTech", "100K+ Conversions/day"],
    demo: "https://woocommerce.com/products/currency-switcher-for-woocommerce/",
    image: "/currencyswitcher.png",
    highlights: [
      "Handles 100,000+ daily exchange rate conversions with <50ms latency using automated real-time API rate caching.",
      "Increased international buyer checkout rate by auto-detecting customer location via Geo-IP lookup.",
      "Maintained 100% gateway pricing accuracy through custom currency rounding rules across cart and checkout."
    ],
  },
  {
    title: "Restaurant for WooCommerce",
    subtitle: "Food Ordering & Logistics System",
    description: "Full-fledged food ordering system with modifier options, delivery time slots, and kitchen printing.",
    category: "wordpress",
    tags: ["WooCommerce.com", "Logistics", "200+ Restaurants"],
    demo: "https://woocommerce.com/products/restaurant-for-woocommerce/",
    image: "/restaurant.png",
    highlights: [
      "Accelerated kitchen order dispatch times by 35% using instant AJAX menu category tabs and automated order ticket printing.",
      "Streamlined food delivery scheduling with store opening hour constraints and custom time-slot limits.",
      "Increased average order value by 20% through customizable checkout tipping controls and item modifier upsells."
    ],
  },
  {
    title: "Sales Agent for WooCommerce",
    subtitle: "Commission & Payroll Management",
    description: "Automate sales representative tracking, commission calculations, and performance analytics.",
    category: "wordpress",
    tags: ["WooCommerce.com", "Sales", "1,000+ Agents"],
    demo: "https://woocommerce.com/products/sales-agent-for-woocommerce/",
    image: "/salesagent.png",
    highlights: [
      "Automated commission payouts for 1,000+ sales agents based on custom percentage and flat-rate tier algorithms.",
      "Empowered sales reps with a front-end agent dashboard for tracking assigned clients, orders, and payout logs.",
      "Reduced monthly payroll admin overhead by 80% through automated CSV export and analytics tools."
    ],
  },
  {
    title: "Product Variations and Swatches",
    subtitle: "High-Performance Variation UI",
    description: "Transform WooCommerce variation dropdowns into interactive color, image, and label swatches.",
    category: "wordpress",
    tags: ["WooCommerce.com", "UI/UX", "45% Faster Render"],
    demo: "https://woocommerce.com/products/bulk-variation-and-swatches/",
    image: "https://woocommerce.com/wp-content/uploads/2024/10/bulk_variation_and_swatches_marketplace_icon_.webp",
    highlights: [
      "Reduced store catalog render latency by 45% on products with 100+ variations via high-speed AJAX lazy loading.",
      "Improved mobile conversion rates by replacing standard select dropdowns with responsive color and image swatches.",
      "Decreased order return rates by providing instant out-of-stock cross-outs and dynamic gallery image swapping."
    ],
  },
  {
    title: "Pay Your Price for WooCommerce",
    subtitle: "Dynamic Pricing & Tip Engine",
    description: "Allow customers to set custom pricing with server-side minimum/maximum validation.",
    category: "wordpress",
    tags: ["WooCommerce.com", "Pricing", "30% Higher Engagement"],
    demo: "https://woocommerce.com/products/pay-your-price/",
    image: "https://woocommerce.com/wp-content/uploads/2024/06/Pay-Your-Price-for-WooCommerce.png",
    highlights: [
      "Increased buyer contribution by 30% via customer-defined pricing input fields with server-side min/max validation.",
      "Expanded catalog versatility across digital downloads, name-your-price charity items, and custom gift card products.",
      "Prevented price manipulation fraud by enforcing strict backend sanitization and validation."
    ],
  },
  {
    title: "Age Verification & Disclaimer Popup",
    subtitle: "Legal Compliance & Security Gate",
    description: "Restricted product verification gate with date-of-birth checks and legal disclaimer popups.",
    category: "wordpress",
    tags: ["WooCommerce.com", "Compliance", "50,000+ Gate Checks"],
    demo: "https://woocommerce.com/products/woocommerce-product-disclaimer/",
    image: "https://woocommerce.com/wp-content/uploads/2018/11/Product-Disclaimer-For-WooCommerce-2.png",
    highlights: [
      "Enforced legal compliance for 50,000+ age-restricted product visits using custom DOB verification popups.",
      "Minimized buyer disruption by utilizing secure encrypted cookies to remember verified repeat shoppers.",
      "Protected store owners from liability by enforcing category-specific access rules and disclaimer agreements."
    ],
  },

  // -------------------------------------------------------------
  // 2. CUSTOM WORDPRESS & LMS
  // -------------------------------------------------------------
  {
    title: "40+ Custom LMS & E-Commerce Addons",
    subtitle: "LearnDash, LifterLMS, BuddyBoss Platform",
    description: "Custom developments and specialized plugins for LearnDash, WooCommerce, LifterLMS, and BuddyBoss platforms including AI modules.",
    category: "custom-wordpress",
    tags: ["WordPress", "LearnDash", "BuddyBoss", "20,000+ Learners"],
    highlights: [
      "Engineered 40+ custom add-ons for LearnDash, LifterLMS, and BuddyBoss powering 20,000+ active learners.",
      "Built AI summary & transcript generator for course videos, cutting student lesson review time by 30%.",
      "Automated custom PDF certificate issuance, invitation modules, and bulk quiz importing workflows."
    ],
  },
  {
    title: "Greek123",
    subtitle: "Client Project • Custom Dev",
    description: "Custom development and performance optimization for a Greek language learning platform.",
    category: "custom-wordpress",
    tags: ["Custom Dev", "Education", "35% Faster Load"],
    demo: "https://www.greek123.com/",
    image: "/greek123.png",
    highlights: [
      "Accelerated student portal page load speeds by 35% via legacy PHP code refactoring and database query caching.",
      "Created interactive language quiz modules and real-time student progress tracking dashboards."
    ],
  },
  {
    title: "Caldental Ed",
    subtitle: "Client Project • Dental LMS",
    description: "Continuing education platform serving dental professionals with credit tracking and certification.",
    category: "custom-wordpress",
    tags: ["LMS", "Education", "3,000+ Professionals"],
    demo: "https://caldentaled.com/",
    image: "/caldental.png",
    highlights: [
      "Automated dental continuing education certification issuance with instant PDF export upon course completion.",
      "Simplified CE credit tracking for 3,000+ dental professionals via a custom member dashboard."
    ],
  },

  // -------------------------------------------------------------
  // 3. WORDPRESS MAINTENANCE & SECURITY
  // -------------------------------------------------------------
  {
    title: "Got Your Back",
    subtitle: "Maintenance & Security Hardening",
    description: "Comprehensive WordPress maintenance covering system updates, security reports, bug fixing, and performance optimization.",
    category: "wordpress-maintenance",
    tags: ["WordPress", "PageSpeed 90+", "Security Audit"],
    demo: "https://gotyourback.com/",
    image: "/gotyourback.png",
    highlights: [
      "Reduced page load latency by ~40% (PageSpeed 90+) via database query optimization and asset minification.",
      "Eliminated 15+ redundant plugins and legacy scripts, saving 250ms on TTFB server response time.",
      "Hardened site security infrastructure, achieving 100% zero-exploit monthly audit reports."
    ],
  },
  {
    title: "Global Smooth System",
    subtitle: "E-Commerce Care & Security",
    description: "Ongoing site care and technical maintenance, resolving critical bugs, auditing plugins, and conducting speed tests.",
    category: "wordpress-maintenance",
    tags: ["WooCommerce", "99.9% Uptime", "Security"],
    demo: "https://globalsmoothsystem.com/",
    image: "/globalsmooth.png",
    highlights: [
      "Maintained 99.9% e-commerce uptime during WooCommerce core and database updates.",
      "Patched 50+ critical plugin vulnerabilities and implemented automated daily cloud backup routines.",
      "Cut checkout lag by 30% by clearing bloated database transients and optimizing WooCommerce sessions."
    ],
  },
  {
    title: "Farm Commons",
    subtitle: "Non-Profit Maintenance & Health",
    description: "Routine maintenance and site health management for Farm Commons, ensuring security and rapid load times.",
    category: "wordpress-maintenance",
    tags: ["WordPress", "Non-Profit", "45% Performance Boost"],
    demo: "https://farmcommons.org/",
    image: "/farmcommons.png",
    highlights: [
      "Boosted non-profit site performance by ~45% through image WebP compression and CDN integration.",
      "Secured sensitive legal resource downloads with strict access control and vulnerability scans."
    ],
  },
  {
    title: "Body Glide",
    subtitle: "E-Commerce Maintenance Care",
    description: "End-to-end WordPress & WooCommerce site maintenance focusing on system security, speed testing, and bug fixes.",
    category: "wordpress-maintenance",
    tags: ["WooCommerce", "Speed Test", "Bug Fixes"],
    demo: "https://bodyglide.com/",
    image: "/bodyglide.png",
    highlights: [
      "Resolved 100+ site UI/UX bugs and checkout bottlenecks for high-volume WooCommerce store.",
      "Audited third-party plugin stack, removing 12 unused extensions and reducing DOM nodes by 25%."
    ],
  },

  // -------------------------------------------------------------
  // 4. SAAS & WEB APPLICATIONS
  // -------------------------------------------------------------
  {
    title: "ShopApp Labs",
    subtitle: "Next-Gen AI Voice Assistant Platform",
    description: "AI voice assistant SaaS platform enabling 24/7 automated call answering, lead capture, and instant booking workflows.",
    category: "saas",
    tags: ["AI Voice", "SaaS Platform", "Google Sync", "24/7 Answering"],
    demo: "https://shopapplabs.com/",
    image: "/shopapplabs.png",
    highlights: [
      "Built AI voice assistant SaaS platform answering customer calls 24/7 with zero missed calls.",
      "Automated booking workflows with real-time Google Calendar & CRM database synchronization."
    ],
  },
  {
    title: "Softix Solutions",
    subtitle: "MERN Stack • Agency Platform",
    description: "Corporate agency platform providing custom digital solutions with database form integrations and Google sync workflows.",
    category: "saas",
    tags: ["MERN Stack", "React", "Database Forms", "Google Sync"],
    demo: "http://softixsolutions.com/",
    image: "/softix.png",
    highlights: [
      "Delivered responsive full-stack MERN agency platform with automated quote calculation & database intake.",
      "Integrated Google Workspace APIs for instant lead notifications and automated client tracking."
    ],
  },
  {
    title: "Aviro Crafts",
    subtitle: "AI Automation Agency • MERN SaaS",
    description: "AI automation platform offering intelligent workflow automation, automated lead follow-up, and real-time database sync.",
    category: "saas",
    tags: ["MERN Stack", "AI Automation", "4,400+ Automated Hours"],
    demo: "https://avirocrafts.com/",
    image: "/avirocrafts.png",
    highlights: [
      "Engineered an AI automation agency portal tracking 4,400+ automated hours and $98K+ client savings.",
      "Connected n8n / Make.com automation workflows for instant audit booking and lead qualification."
    ],
  },
  {
    title: "Invest with Intelligence",
    subtitle: "Predictive Finance Platform",
    description: "A machine learning and predictive finance platform featuring robust API integrations and deep AI prediction capabilities.",
    category: "saas",
    tags: ["React.js", "Spring Boot", "Java", "Flask", "Machine Learning"],
    highlights: [
      "Built Spring Boot & Java REST APIs integrated with Python Flask ML models for profit prediction."
    ],
  },
  {
    title: "Rev Leasing",
    subtitle: "Client Project • Custom WordPress",
    description: "Leasing and finance platform custom WordPress solution featuring automated document generation and data security.",
    category: "custom-wordpress",
    tags: ["WordPress", "FinTech", "Document Automation"],
    demo: "https://www.rev-leasing.com/",
    image: "/revleasing.png",
    highlights: [
      "Automated financial leasing agreement workflows with e-signature and credit check API integrations.",
      "Protected sensitive client financial application data with strict role-based access control and encryption."
    ],
  },
  {
    title: "X Factor Training",
    subtitle: "Client Project • Custom WordPress",
    description: "Training system platform for sports professionals built on custom WordPress with membership & subscription management.",
    category: "custom-wordpress",
    tags: ["WordPress", "Sports", "Subscriptions"],
    demo: "https://xfactortrainingsystems.com/",
    image: "/xfactor.png",
    highlights: [
      "Protected premium sports training video streams from unauthorized downloads via custom security modules.",
      "Streamlined subscription billing for professional athletes using WooCommerce Subscriptions."
    ],
  },
];
