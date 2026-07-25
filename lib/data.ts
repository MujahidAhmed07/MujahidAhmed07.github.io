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
  { group: "Tech Stack", items: ["PHP", "JavaScript", "MERN Stack", "Ajax", "jQuery", "WordPress Plugin Dev", "MySQL", "Shopify", "Spring Boot (Java)", "HTML/CSS"] },
  { group: "Concepts & Workflow", items: ["Object-Oriented Programming", "REST API Design", "System Architecture", "Git", "GitHub", "Problem Solving", "WooCommerce compliance"] },
  { group: "Tools & Collaboration", items: ["Antigravity AI", "Slack", "Jira", "Teamwork", "Hubstaff", "VS Code"] }
];

export const experiences: Experience[] = [
  {
    company: "WooNinjas",
    role: "Wordpress Plugin Developer",
    range: "Feb 2025 — Present",
    location: "USA | Remote",
    description: "WebCube is an AI development company creating modern technology solutions for businesses worldwide.",
    bullets: [
      "Implement new features, fix bugs, and enhance plugin performance.",
      "Apply security best practices (validation, sanitization, hardening).",
      "Optimize code structure and refactor for maintainability.",
      "Ensure compatibility with themes & third-party plugins.",
      "Work on custom LMS modules for LearnDash, LifterLMS, BuddyBoss."
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
  { name: "Sindhi", proficiency: "Native or Bilingual Proficiency" },
  { name: "Urdu", proficiency: "Full Professional Proficiency" },
  { name: "English", proficiency: "Professional Working Proficiency" },
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
  // 1. WORDPRESS (COMMERCIAL PLUGINS)
  // -------------------------------------------------------------
  {
    title: "Wholesale For WooCommerce",
    subtitle: "B2B Ecommerce Solution",
    description: "A comprehensive B2B solution for WooCommerce to handle wholesale pricing, user roles, and registration.",
    category: "wordpress",
    tags: ["WooCommerce", "B2B", "Plugin"],
    demo: "https://woocommerce.com/products/wholesale-for-woocommerce/",
    image: "https://woocommerce.com/wp-content/uploads/2019/09/Wholesale-For-WooCommerce-5.png",
    highlights: [
      "Engineered tiered B2B wholesale pricing rules, minimum order thresholds, and category-level discount structures.",
      "Built custom wholesale registration forms with automated admin approval workflows and custom role assignments.",
      "Implemented bulk order forms and tax-exemption settings for seamless enterprise B2B purchasing."
    ],
  },
  {
    title: "Donation for WooCommerce",
    subtitle: "Fundraising Extensions",
    description: "Empower your WooCommerce store to accept donations with recurring options and progress bars.",
    category: "wordpress",
    tags: ["WooCommerce", "Donation", "Fundraising"],
    demo: "https://woocommerce.com/products/donation-product-for-woocommerce/",
    image: "https://woocommerce.com/wp-content/uploads/2020/03/Donation-for-WooCommerce-2.png",
    highlights: [
      "Developed recurring subscription donations and campaign goal progress bars with real-time AJAX updates.",
      "Implemented cart round-up functionality allowing shoppers to donate change at checkout.",
      "Added custom donation amounts, preset suggestion buttons, and dedicated tax-deductible receipts."
    ],
  },
  {
    title: "Currency Switcher for WooCommerce",
    subtitle: "Multi-Currency Support",
    description: "Allow customers to switch currencies and pay in their preferred currency with real-time rates.",
    category: "wordpress",
    tags: ["WooCommerce", "Currency", "FinTech"],
    demo: "https://woocommerce.com/products/currency-switcher-for-woocommerce/",
    image: "https://woocommerce.com/wp-content/uploads/2020/08/Currency-Switcher-For-WooCommerce-2.png",
    highlights: [
      "Integrated automated real-time exchange rate API sync with custom currency rounding rules.",
      "Built Geo-IP location detection to automatically switch prices to customer local currency upon page load.",
      "Ensured full compatibility with WooCommerce checkout gateways, mini-carts, and variable pricing."
    ],
  },
  {
    title: "Restaurant for WooCommerce",
    subtitle: "Food Ordering System",
    description: "Turn your WooCommerce store into a full-fledged food ordering system with menus and delivery options.",
    category: "wordpress",
    tags: ["WooCommerce", "Restaurant", "Ordering"],
    demo: "https://woocommerce.com/products/restaurant-for-woocommerce/",
    image: "https://woocommerce.com/wp-content/uploads/2020/09/Restaurant-for-WooCommerce-2.png",
    highlights: [
      "Built interactive food menu layouts with category tabs, modifier choices, and instant AJAX add-to-cart.",
      "Implemented flexible delivery/pickup time slot scheduling with store opening hour constraints.",
      "Added customizable tipping controls at checkout and automated kitchen order print dispatch workflows."
    ],
  },
  {
    title: "Sales Agent for WooCommerce",
    subtitle: "Commission Management",
    description: "Manage sales agents, track their performance, and calculate commissions automatically.",
    category: "wordpress",
    tags: ["WooCommerce", "Sales", "B2B"],
    demo: "https://woocommerce.com/products/sales-agent-for-woocommerce/",
    image: "https://woocommerce.com/wp-content/uploads/2021/05/Sales-Agent-for-WooCommerce-2.png",
    highlights: [
      "Engineered automated sales agent commission calculation algorithms based on custom percentage and flat-rate tiers.",
      "Created a dedicated front-end agent dashboard for tracking assigned customers, orders, and payout histories.",
      "Built comprehensive admin reporting tools with CSV export for payroll and sales performance metrics."
    ],
  },
  {
    title: "Product Variations and Swatches",
    subtitle: "Enhanced UI for Variations",
    description: "Display product variations as beautiful swatches (colors, images, labels) instead of dropdowns.",
    category: "wordpress",
    tags: ["WooCommerce", "UI/UX", "Frontend"],
    demo: "https://woocommerce.com/products/bulk-variation-and-swatches/",
    image: "https://woocommerce.com/wp-content/uploads/2024/10/bulk_variation_and_swatches_marketplace_icon_.webp",
    highlights: [
      "Replaced standard WooCommerce dropdowns with interactive color, image, and label variation swatches.",
      "Implemented high-performance AJAX variation fetching for fast rendering on products with 100+ variations.",
      "Added customizable swatch tooltips, out-of-stock cross-out styling, and gallery image swapping."
    ],
  },
  {
    title: "Pay Your Price for WooCommerce",
    subtitle: "Dynamic Pricing",
    description: "Let customers set their own price for products, great for donations or tips.",
    category: "wordpress",
    tags: ["WooCommerce", "Pricing", "Donation"],
    demo: "https://woocommerce.com/products/pay-your-price/",
    image: "https://woocommerce.com/wp-content/uploads/2024/06/Pay-Your-Price-for-WooCommerce.png",
    highlights: [
      "Allowed customers to enter custom prices for items with server-side validation for min/max limits.",
      "Integrated seamlessly with digital downloads, name-your-price charity items, and custom gift card products.",
      "Added customizable price input fields on product pages, category archives, and quick view popups."
    ],
  },
  {
    title: "Age Verification & Disclaimer Popup",
    subtitle: "Compliance & Security Tool",
    description: "Verify customer age and display legal disclaimers before users access restricted products.",
    category: "wordpress",
    tags: ["WooCommerce", "Compliance", "Security"],
    demo: "https://woocommerce.com/products/woocommerce-product-disclaimer/",
    image: "https://woocommerce.com/wp-content/uploads/2018/11/Product-Disclaimer-For-WooCommerce-2.png",
    highlights: [
      "Created customizable age gate verification popups with DOB input and minimum age restrictions.",
      "Implemented secure cookie & local storage validation to remember verified users and minimize disruption.",
      "Added page-specific restriction rules, legal disclaimers, and redirection logic for under-age visitors."
    ],
  },

  // -------------------------------------------------------------
  // 2. CUSTOM WORDPRESS & LMS
  // -------------------------------------------------------------
  {
    title: "40+ Custom LMS & E-Commerce Addons",
    subtitle: "LearnDash, LifterLMS, BuddyBoss",
    description: "Custom developments and specialized plugins for LearnDash, WooCommerce, LifterLMS, and BuddyBoss platforms including AI modules.",
    category: "custom-wordpress",
    tags: ["WordPress", "LearnDash", "LifterLMS", "BuddyBoss", "AI Modules"],
    highlights: [
      "Created custom LearnDash add-ons including AI-powered features.",
      "Built AI summary & transcript generator for course videos addon for LearnDash.",
      "Engineered custom certificates, invitation modules, and quiz importers."
    ],
  },
  {
    title: "Greek123",
    subtitle: "Client Project • Custom Dev",
    description: "Custom development for a Greek language learning platform.",
    category: "custom-wordpress",
    tags: ["Custom Dev", "Education", "Client"],
    demo: "https://www.greek123.com/",
    image: "/greek123.png",
    highlights: [
      "Refactored legacy WordPress codebase to optimize PHP memory consumption and speed up query performance.",
      "Built custom educational quiz components, user progress tracking modules, and interactive exercises.",
      "Redesigned student portal UI for improved mobile responsiveness and seamless learning navigation."
    ],
  },
  {
    title: "Caldental Ed",
    subtitle: "Client Project • LMS",
    description: "Continuing education platform for dental professionals.",
    category: "custom-wordpress",
    tags: ["LMS", "Education", "Client"],
    demo: "https://caldentaled.com/",
    image: "/caldental.png",
    highlights: [
      "Engineered automated dental continuing education certification generation with PDF export upon course completion.",
      "Developed custom member dashboard for tracking license renewal credits, course history, and active subscriptions.",
      "Implemented admin reporting tools for monitoring compliance, course completion rates, and member verification."
    ],
  },

  // -------------------------------------------------------------
  // 3. WORDPRESS MAINTENANCE & SECURITY
  // -------------------------------------------------------------
  {
    title: "Got Your Back",
    subtitle: "Maintenance & Security Hardening",
    description: "Comprehensive WordPress maintenance covering system updates, security reports, bug fixing, vulnerability checks, and performance optimization.",
    category: "wordpress-maintenance",
    tags: ["WordPress", "Maintenance", "Security Audit", "Speed Optimization"],
    demo: "https://gotyourback.com/",
    image: "/gotyourback.png",
    highlights: [
      "WordPress core, theme, & plugin update management.",
      "Vulnerability scanning & custom security reporting.",
      "Site speed testing & redundant plugin/theme cleanup."
    ],
  },
  {
    title: "Global Smooth System",
    subtitle: "Site Care & Bug Resolution",
    description: "Ongoing site care and technical maintenance, resolving critical bugs, auditing third-party plugins, and conducting site speed tests.",
    category: "wordpress-maintenance",
    tags: ["WooCommerce", "Maintenance", "Security", "Bug Fixes"],
    demo: "https://globalsmoothsystem.com/",
    image: "/globalsmooth.png",
    highlights: [
      "Security checks & periodic vulnerability reports.",
      "Identified and eliminated redundant plugins & assets.",
      "Speed tests and performance optimization for WooCommerce."
    ],
  },
  {
    title: "Farm Commons",
    subtitle: "Maintenance & Performance Health",
    description: "Routine maintenance and site health management for Farm Commons, ensuring robust security, rapid load times, and smooth update cycles.",
    category: "wordpress-maintenance",
    tags: ["WordPress", "Non-Profit", "Maintenance", "Security Audit"],
    demo: "https://farmcommons.org/",
    image: "/farmcommons.png",
    highlights: [
      "Regular updates for themes, plugins, and core files.",
      "Comprehensive site security audits & vulnerability checks.",
      "Bug fixing and speed optimization testing."
    ],
  },
  {
    title: "Body Glide",
    subtitle: "E-Commerce Maintenance Care",
    description: "End-to-end WordPress & WooCommerce site maintenance focusing on system security, speed testing, bug fixes, and plugin cleanup.",
    category: "wordpress-maintenance",
    tags: ["WooCommerce", "Maintenance", "Speed Test", "Security"],
    demo: "https://bodyglide.com/",
    image: "/bodyglide.png",
    highlights: [
      "Vulnerability scans & security reporting for peace of mind.",
      "Redundant plugins & legacy code audits.",
      "Site speed testing & proactive bug resolution."
    ],
  },

  // -------------------------------------------------------------
  // 4. SAAS & WEB APPLICATIONS
  // -------------------------------------------------------------
  {
    title: "Softix Solutions",
    subtitle: "MERN Stack • Agency Platform",
    description: "Corporate agency platform providing custom digital solutions with database form integrations and Google sync workflows.",
    category: "saas",
    tags: ["MERN Stack", "React", "Database Forms", "Google Sync", "SaaS"],
    demo: "http://softixsolutions.com/",
    image: "/softix.png",
    highlights: [
      "Created modern responsive UI designs connected with database form pipelines.",
      "Integrated automated lead intake, dynamic quote calculators, and Google Workspace sync.",
      "Engineered MERN full-stack architecture for high-speed app development services."
    ],
  },
  {
    title: "Aviro Crafts",
    subtitle: "AI Automation Agency • MERN SaaS",
    description: "AI automation platform offering intelligent workflow automation, automated lead follow-up, and real-time database sync.",
    category: "saas",
    tags: ["MERN Stack", "AI Automation", "Database Forms", "Google Sync"],
    demo: "https://avirocrafts.com/",
    image: "/avirocrafts.png",
    highlights: [
      "Designed sleek dark-mode AI automation platform with live metrics dashboard.",
      "Connected database forms for automated audit booking and lead capture.",
      "Integrated AI workflow automation pipelines (n8n/Make.com) and Google sync."
    ],
  },
  {
    title: "ShopApp Labs",
    subtitle: "Next-Gen AI Voice Assistant Platform",
    description: "AI voice assistant SaaS platform enabling 24/7 automated call answering, lead capture, and instant booking workflows.",
    category: "saas",
    tags: ["AI Voice", "SaaS Platform", "Database Forms", "Google Sync", "React"],
    demo: "https://shopapplabs.com/",
    image: "/shopapplabs.png",
    highlights: [
      "Created modern UI design with interactive AI voice assistant preview and pricing tiers.",
      "Connected database forms for seamless user onboarding and automated appointment scheduling.",
      "Implemented Google Calendar & CRM sync for zero-missed-call lead management."
    ],
  },
  {
    title: "Invest with Intelligence",
    subtitle: "Predictive Finance Platform",
    description: "A machine learning and predictive finance platform featuring robust API integrations and deep AI prediction capabilities.",
    category: "saas",
    tags: ["React.js", "Spring Boot", "Java", "Flask", "Machine Learning", "REST API"],
    highlights: [
      "Created REST APIs for the backend using Spring Boot and Java.",
      "Implemented API integration of Flask in React.js for Profit Prediction using Machine Learning."
    ],
  },
  {
    title: "Rev Leasing",
    subtitle: "Client Project • Custom WordPress",
    description: "Leasing and finance platform custom WordPress solution featuring automated document generation and data security.",
    category: "custom-wordpress",
    tags: ["WordPress", "FinTech", "Custom Dev"],
    demo: "https://www.rev-leasing.com/",
    image: "/revleasing.png",
    highlights: [
      "Developed multi-step leasing application forms with automated credit check API integrations.",
      "Built custom PDF contract generation and e-signature document workflows for financial leasing agreements.",
      "Implemented strict security hardening, data encryption standards, and role-based access control."
    ],
  },
  {
    title: "X Factor Training",
    subtitle: "Client Project • Custom WordPress",
    description: "Training system platform for sports professionals built on custom WordPress with membership & subscription management.",
    category: "custom-wordpress",
    tags: ["WordPress", "Sports", "Membership"],
    demo: "https://xfactortrainingsystems.com/",
    image: "/xfactor.png",
    highlights: [
      "Built video streaming content protection modules for premium sports training workout programs.",
      "Integrated WooCommerce Subscriptions with custom automated recurring billing and plan management.",
      "Engineered student athletic performance tracking dashboards with progress logs and coach feedback tools."
    ],
  },
];
