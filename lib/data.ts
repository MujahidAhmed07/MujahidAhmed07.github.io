export type Link = { label: string; href: string };
export type Project = {
  title: string;
  subtitle: string;
  description: string;
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
  bullets: string[];
};

export const profile = {
  name: "Mujahid Ahmed",
  headline: "Software Engineer — WordPress Plugin Architect",
  subhead:
    "Software Engineer with hands-on experience in full-stack development and specialized expertise in WordPress plugin development, WooCommerce customizations, and REST API integrations. Proven ability to develop secure, scalable, and performance-optimized web solutions. Experienced in collaborating with cross-functional teams, refactoring legacy code, and ensuring compatibility with third-party plugins and standards. Passionate about continuous learning, clean code practices, and delivering business-driven software solutions.",
  location: "Karachi, Pakistan",
  email: "ahmedqure758@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/MujahidAhmed07" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mujahid-ahmed-970b98228/" },
    { label: "Phone", href: "tel:+923162323279" }
  ] as Link[],
};

export const skills = [
  { group: "Tech Stack", items: ["PHP", "WordPress Plugin Dev", "React.js", "Spring Boot (Java)", "MySQL", "HTML/CSS", "JavaScript"] },
  { group: "Concepts", items: ["Object-Oriented Programming", "REST API Design", "System Architecture", "Analytic Thinking", "Problem Solving"] },
];

export const tools = [
  { group: "Version Control", items: ["Git", "GitHub", "GitLab", "Bitbucket"] },
  { group: "Workflow & API", items: ["Jira", "Slack", "Postman", "Insomnia", "Hubstaff", "Microsoft Office"] },
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

export const products: Project[] = [
  {
    title: "Wholesale For WooCommerce",
    subtitle: "B2B Ecommerce Solution",
    description: "A comprehensive B2B solution for WooCommerce to handle wholesale pricing, user roles, and registration.",
    tags: ["WooCommerce", "B2B", "Plugin"],
    demo: "https://woocommerce.com/products/wholesale-for-woocommerce/",
    image: "https://woocommerce.com/wp-content/uploads/2019/09/Wholesale-For-WooCommerce-5.png",
    highlights: ["Dynamic Pricing", "User Role Management", "Registration Forms"],
  },
  {
    title: "Donation for WooCommerce",
    subtitle: "Fundraising Extensions",
    description: "Empower your WooCommerce store to accept donations with recurring options and progress bars.",
    tags: ["WooCommerce", "Donation", "Fundraising"],
    demo: "https://woocommerce.com/products/donation-product-for-woocommerce/",
    image: "https://woocommerce.com/wp-content/uploads/2020/03/Donation-for-WooCommerce-2.png",
    highlights: ["Recurring Donations", "Progress Bars", "Round-up Fucntionality"],
  },
  {
    title: "Currency Switcher for WooCommerce",
    subtitle: "Multi-Currency Support",
    description: "Allow customers to switch currencies and pay in their preferred currency with real-time rates.",
    tags: ["WooCommerce", "Currency", "FinTech"],
    demo: "https://woocommerce.com/products/currency-switcher-for-woocommerce/",
    image: "https://woocommerce.com/wp-content/uploads/2020/08/Currency-Switcher-For-WooCommerce-2.png",
    highlights: ["Real-time Exchange Rates", "Geo-IP Detection", "Custom Rounding"],
  },
  {
    title: "Restaurant for WooCommerce",
    subtitle: "Food Ordering System",
    description: "Turn your WooCommerce store into a full-fledged food ordering system with menus and delivery options.",
    tags: ["WooCommerce", "Restaurant", "Ordering"],
    demo: "https://woocommerce.com/products/restaurant-for-woocommerce/",
    image: "https://woocommerce.com/wp-content/uploads/2020/09/Restaurant-for-WooCommerce-2.png",
    highlights: ["Menu Management", "Delivery Times", "Tipping System"],
  },
  {
    title: "Sales Agent for WooCommerce",
    subtitle: "Commission Management",
    description: "Manage sales agents, track their performance, and calculate commissions automatically.",
    tags: ["WooCommerce", "Sales", "B2B"],
    demo: "https://woocommerce.com/products/sales-agent-for-woocommerce/",
    image: "https://woocommerce.com/wp-content/uploads/2021/05/Sales-Agent-for-WooCommerce-2.png",
    highlights: ["Commission Tracking", "Agent Dashboard", "Performance Reports"],
  },
  {
    title: "Product Variations and Swatches",
    subtitle: "Enhanced UI for Variations",
    description: "Display product variations as beautiful swatches (colors, images, labels) instead of dropdowns.",
    tags: ["WooCommerce", "UI/UX", "Frontend"],
    demo: "https://woocommerce.com/products/bulk-variation-and-swatches/",
    image: "https://woocommerce.com/wp-content/uploads/2024/10/bulk_variation_and_swatches_marketplace_icon_.webp",
    highlights: ["Color & Image Swatches", "Bulk Variation Forms", "Ajax Support"],
  },
  {
    title: "Age Verification & Disclaimer Popup",
    subtitle: "Compliance Tools",
    description: "Verify customer age and display disclaimers before they can access restricted products.",
    tags: ["WooCommerce", "Compliance", "Security"],
    demo: "https://woocommerce.com/products/woocommerce-product-disclaimer/",
    image: "https://woocommerce.com/wp-content/uploads/2018/11/Product-Disclaimer-For-WooCommerce-2.png",
    highlights: ["Age Gate", "Popup Customization", "Cookie Remember"],
  },
  {
    title: "Pay Your Price for WooCommerce",
    subtitle: "Dynamic Pricing",
    description: "Let customers set their own price for products, great for donations or tips.",
    tags: ["WooCommerce", "Pricing", "Donation"],
    demo: "https://woocommerce.com/products/pay-your-price/",
    image: "https://woocommerce.com/wp-content/uploads/2024/06/Pay-Your-Price-for-WooCommerce.png",
    highlights: ["Min/Max Check", "Custom Input", "Donations"],
  },
  {
    title: "WooCommerce Auto Order Archive",
    subtitle: "Order Management",
    description: "Automatically archive old orders to keep your order table clean and performant.",
    tags: ["WooCommerce", "Performance", "Admin"],
    demo: "https://wooninjas.com/downloads/woocommerce-auto-order-archive/",
    image: "",
    highlights: ["Auto Archiving", "Performance Boost", "Clean Admin"],
  },
  {
    title: "LifterLMS Quiz Import/Export",
    subtitle: "LMS Tools",
    description: "Easily import and export quizzes for LifterLMS to migrate or backup data.",
    tags: ["LifterLMS", "LMS", "Migration"],
    demo: "https://wooninjas.com/downloads/lifterlms-quiz-import-export-add-on/",
    image: "",
    highlights: ["CSV Import/Export", "Bulk Management", "Data Integrity"],
  },
  {
    title: "TutorLMS Course Import/Export",
    subtitle: "LMS Migration",
    description: "Streamline course migration for TutorLMS with powerful import/export tools.",
    tags: ["TutorLMS", "LMS", "Migration"],
    demo: "https://wooninjas.com/downloads/tutorlms-course-import-export/",
    image: "https://wooninjas.com/wp-content/uploads/2023/02/tutor-lms-course-import-export-hero-img-1536x865.png",
    highlights: ["Full Course Data", "Media Handling", "One-click Migration"],
  },
  {
    title: "TutorLMS Quiz Import/Export",
    subtitle: "LMS Assessment Tools",
    description: "Manage your TutorLMS quizzes efficiently with bulk import and export capabilities.",
    tags: ["TutorLMS", "LMS", "Quiz"],
    demo: "https://wooninjas.com/downloads/tutorlms-quiz-import-export/",
    image: "https://wooninjas.com/wp-content/uploads/2023/11/tutorlms-quiz-import-export-product-hero-image.png.webp",
    highlights: ["Excel/CSV Support", "Question Bank", "Bulk Action"],
  },
];

export const clientProjects: Project[] = [
  {
    title: "Greek123",
    subtitle: "Client Project • Custom Dev",
    description: "Custom development for a language learning platform.",
    tags: ["Custom Dev", "Education", "Client"],
    demo: "https://www.greek123.com/",
    image: "/greek123.png",
    highlights: ["Legacy Optimization", "Custom Features", "UI Improvements"],
  },
  {
    title: "Caldental Ed",
    subtitle: "Client Project • LMS",
    description: "Continuing education platform for dental professionals.",
    tags: ["LMS", "Education", "Client"],
    demo: "https://caldentaled.com/",
    image: "/caldental.png",
    highlights: ["Certification System", "Member Portal", "Custom Reporting"],
  },
  {
    title: "X Factor Training",
    subtitle: "Client Project • Sports",
    description: "Training system platform for sports professionals.",
    tags: ["Sports", "Membership", "Client"],
    demo: "https://xfactortrainingsystems.com/",
    image: "/xfactor.png",
    highlights: ["Video Production", "Subscription Model", "User Tracking"],
  },
  {
    title: "Rev Leasing",
    subtitle: "Client Project • FinTech",
    description: "Leasing and finance platform custom solution.",
    tags: ["FinTech", "Leasing", "Client"],
    demo: "https://www.rev-leasing.com/",
    image: "/revleasing.png",
    highlights: ["Application Workflows", "Document Generation", "Secure Data"],
  },
];
