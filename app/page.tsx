"use client";

import Nav from "@/components/Nav";
import SectionTitle from "@/components/SectionTitle";
import { allProjects, portfolioCategories, CategoryKey, experiences, profile, skills, educations, languages, interests } from "@/lib/data";
import { useHashNav } from "@/lib/hooks";
import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  BookOpen,
  Download,
  Briefcase,
  GraduationCap,
  Star,
  Package,
  Cpu,
  Languages,
  Heart,
  Globe,
  ExternalLink,
  Code,
  Wrench,
  ShieldCheck,
  Rocket,
  Layers
} from "lucide-react";

// Standard SVG definitions for GitHub and LinkedIn matching Feather/Lucide aesthetic
const GithubIcon = ({ size = 20, ...props }: { size?: number; [key: string]: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }: { size?: number; [key: string]: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Page() {
  useHashNav();
  const [viewImage, setViewImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("all");

  const downloadLink = profile.links.find((l) => l.label === "Resume")?.href || "#";
  const githubLink = profile.links.find((l) => l.label === "GitHub")?.href || "#";
  const linkedinLink = profile.links.find((l) => l.label === "LinkedIn")?.href || "#";
  const mediumLink = profile.links.find((l) => l.label === "Medium")?.href || "#";

  return (
    <main id="top">
      <Nav />

      {/* HERO SECTION */}
      <section className="section hero">
        <div className="container">
          <div className="card glass hero-card">
            <div className="hero-grid">
              {/* Left Bio Column */}
              <div>
                <div className="hero-bio-header">
                  <img
                    src="/hero-profile-v2.jpg"
                    alt={profile.name}
                    className="hero-avatar"
                  />
                  <div>
                    <h1 style={{ fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
                      {profile.name}
                    </h1>
                    <span style={{ fontSize: "18px", fontWeight: 600, color: "var(--primary)", marginTop: "6px", display: "inline-block" }}>
                      {profile.headline}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--muted)", margin: "0 0 24px" }}>
                  {profile.subhead}
                </p>

                <div className="cta">
                  <button
                    className="btn primary"
                    onClick={() => window.print()}
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer", border: "none" }}
                  >
                    <Download size={18} /> Download CV
                  </button>
                  <a
                    className="btn"
                    href="#contact"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                  >
                    <Mail size={18} /> Get in Touch
                  </a>
                  <a
                    className="btn"
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                  >
                    <GithubIcon size={18} /> GitHub
                  </a>
                </div>
              </div>

              {/* Right Details Column (Digital Card Dashboard) */}
              <div style={{ background: "var(--bg)", padding: "22px", borderRadius: "18px", border: "1px solid var(--stroke)" }}>
                <h3 style={{ fontSize: "14px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "18px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Cpu size={16} color="var(--primary)" /> Profile Info
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "14px" }}>
                  
                  {/* Location Info */}
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "10px", background: "var(--accent)", color: "var(--primary-hover)", flexShrink: 0 }}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span style={{ color: "var(--muted)", fontSize: "12px" }}>Location:</span>
                      <div style={{ fontWeight: 600, color: "var(--text)" }}>{profile.location}</div>
                    </div>
                  </div>

                  {/* Email Info */}
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "10px", background: "var(--accent)", color: "var(--primary-hover)", flexShrink: 0 }}>
                      <Mail size={18} />
                    </div>
                    <div style={{ minWidth: 0, overflow: "hidden" }}>
                      <span style={{ color: "var(--muted)", fontSize: "12px" }}>Email:</span>
                      <div>
                        <a href={`mailto:${profile.email}`} style={{ fontWeight: 600, color: "var(--primary)", wordBreak: "break-all" }}>
                          {profile.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone Info */}
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "10px", background: "var(--accent)", color: "var(--primary-hover)", flexShrink: 0 }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <span style={{ color: "var(--muted)", fontSize: "12px" }}>Phone:</span>
                      <div>
                        <a href={profile.phoneHref} style={{ fontWeight: 600, color: "var(--text)" }}>
                          {profile.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Social Links Info */}
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "10px", background: "var(--accent)", color: "var(--primary-hover)", flexShrink: 0 }}>
                      <ExternalLink size={18} />
                    </div>
                    <div>
                      <span style={{ color: "var(--muted)", fontSize: "12px" }}>Professional Links:</span>
                      <div style={{ display: "flex", gap: "10px", marginTop: "4px", flexWrap: "wrap" }}>
                        <a href={linkedinLink} target="_blank" rel="noreferrer" style={{ fontWeight: 600, color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: "3px" }}>
                          LinkedIn <ExternalLink size={11} />
                        </a>
                        <span style={{ color: "var(--stroke)" }}>|</span>
                        <a href={mediumLink} target="_blank" rel="noreferrer" style={{ fontWeight: 600, color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: "3px" }}>
                          Medium <ExternalLink size={11} />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN TWO-COLUMN DASHBOARD */}
      <div className="container">
        {/* TECHNICAL STACK (HORIZONTAL SECTION ABOVE WORK EXPERIENCE) */}
        <section className="section" id="skills" style={{ paddingTop: "10px", paddingBottom: "30px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <Cpu size={24} color="var(--primary)" />
            <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 800 }}>Technical Stack & Core Skills</h2>
          </div>
          <p style={{ color: "var(--muted)", marginBottom: "20px", fontSize: "15px", maxWidth: "760px" }}>
            Comprehensive technology stack, plugin architecture frameworks, databases, concepts, and dev tools.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {skills.map((g, idx) => (
              <div key={g.group} className="card" style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "14px", color: "var(--primary-hover)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "14px", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px" }}>
                  {idx === 0 ? <Code size={16} /> : idx === 1 ? <Layers size={16} /> : <Wrench size={16} />}
                  {g.group}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto" }}>
                  {g.items.map((skill) => (
                    <span className="tag" key={skill} style={{ fontSize: "13px", fontWeight: 500, padding: "5px 12px" }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="section" id="experience" style={{ paddingTop: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                <Briefcase size={24} color="var(--primary)" />
                <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 800 }}>Work Experience</h2>
              </div>
              <p style={{ color: "var(--muted)", marginBottom: "24px", fontSize: "15px", maxWidth: "760px" }}>
                Professional developer roles where I engineered robust backend plugins, optimized WooCommerce sites, and resolved complex integrations.
              </p>

              <div className="timeline">
                {experiences.map((e) => (
                  <div className="timeline-item" key={e.company}>
                    <div className="card" style={{ marginLeft: "8px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", alignItems: "baseline" }}>
                        <h3 style={{ fontSize: "20px", fontWeight: "700", color: "var(--text)" }}>{e.role}</h3>
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--primary)" }}>{e.range}</span>
                      </div>
                      <p style={{ margin: "4px 0 10px", fontSize: "15px", fontWeight: "600", color: "var(--text)" }}>
                        🏢 {e.company} &nbsp;•&nbsp; 📍 <span style={{ opacity: 0.8, fontWeight: 400 }}>{e.location}</span>
                      </p>
                      {e.description && (
                        <p style={{ margin: "0 0 12px", fontStyle: "italic", fontSize: "14px", color: "var(--muted)" }}>
                          {e.description}
                        </p>
                      )}
                      <ul style={{ margin: 0, paddingLeft: "18px", color: "var(--muted)", lineHeight: "1.6" }}>
                        {e.bullets.map((bullet) => (
                          <li key={bullet} style={{ marginBottom: "6px" }}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* PROJECTS SECTION WITH CATEGORIES */}
            <section className="section" id="products">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <Package size={24} color="var(--primary)" />
                <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 800 }}>Portfolio & Specialized Solutions</h2>
              </div>
              <p style={{ color: "var(--muted)", marginBottom: "20px", fontSize: "15px", maxWidth: "760px" }}>
                Categorized software projects across WordPress commercial extensions, custom LMS modules, site maintenance & security, and SaaS platforms.
              </p>

              {/* Category Filter Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                {portfolioCategories.map((cat) => {
                  const isActive = selectedCategory === cat.key;
                  const count = cat.key === "all" ? allProjects.length : allProjects.filter(p => p.category === cat.key).length;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => setSelectedCategory(cat.key)}
                      className="pill"
                      style={{
                        cursor: "pointer",
                        border: isActive ? "1px solid var(--primary)" : "1px solid var(--stroke)",
                        background: isActive ? "var(--primary)" : "#ffffff",
                        color: isActive ? "#ffffff" : "var(--text)",
                        fontWeight: isActive ? 600 : 500,
                        padding: "8px 16px",
                        fontSize: "13px",
                        boxShadow: isActive ? "0 4px 12px rgba(14, 165, 233, 0.25)" : "none",
                        transition: "all 150ms ease"
                      }}
                    >
                      {cat.label} ({count})
                    </button>
                  );
                })}
              </div>

              {/* CATEGORY SECTIONS DISPLAY */}
              {selectedCategory !== "all" && allProjects.filter((p) => p.category === selectedCategory).length === 0 && (
                <div className="card" style={{ textAlign: "center", padding: "40px 20px", background: "var(--accent)", border: "1px dashed var(--stroke)" }}>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: "14px" }}>
                    📂 No projects uploaded in this section yet. Portfolio items coming soon!
                  </p>
                </div>
              )}

              {portfolioCategories
                .filter((cat) => cat.key !== "all" && (selectedCategory === "all" || selectedCategory === cat.key))
                .map((cat) => {
                  const catProjects = allProjects.filter((p) => p.category === cat.key);
                  if (catProjects.length === 0) return null;

                  let IconComponent = Package;
                  if (cat.key === "custom-wordpress") IconComponent = Code;
                  if (cat.key === "wordpress-maintenance") IconComponent = Wrench;
                  if (cat.key === "saas") IconComponent = Rocket;

                  return (
                    <div key={cat.key} style={{ marginBottom: "44px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "8px", background: "var(--accent)", color: "var(--primary-hover)" }}>
                          <IconComponent size={18} />
                        </div>
                        <h3 style={{ margin: 0, fontSize: "20px", fontWeight: 700 }}>{cat.label}</h3>
                      </div>
                      <p style={{ margin: "0 0 20px", fontSize: "14px", color: "var(--muted)" }}>
                        {cat.description}
                      </p>

                      <div className="products-grid">
                        {catProjects.map((p) => (
                          <div className="card" key={p.title} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div>
                              {/* Left Thumbnail + Right Title Layout */}
                              <div className="card-header-thumb">
                                {p.image ? (
                                  <div
                                    style={{
                                      borderRadius: "12px",
                                      overflow: "hidden",
                                      width: "90px",
                                      height: "90px",
                                      minWidth: "90px",
                                      background: "#f8fafc",
                                      border: "1px solid var(--stroke)",
                                      cursor: "pointer",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      padding: "0px"
                                    }}
                                    onClick={() => setViewImage(p.image!)}
                                  >
                                    <img
                                      src={p.image}
                                      alt={p.title}
                                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                                      onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                        const parent = e.currentTarget.parentElement;
                                        if (parent) {
                                          parent.style.padding = "0px";
                                          const fallback = document.createElement("div");
                                          fallback.style.width = "100%";
                                          fallback.style.height = "100%";
                                          fallback.style.display = "flex";
                                          fallback.style.alignItems = "center";
                                          fallback.style.justifyContent = "center";
                                          fallback.style.background = "linear-gradient(135deg, var(--accent), #e0f2fe)";
                                          fallback.style.color = "var(--primary-hover)";
                                          fallback.style.fontWeight = "bold";
                                          fallback.style.fontSize = "24px";
                                          fallback.innerText = p.title.charAt(0);
                                          parent.appendChild(fallback);
                                        }
                                      }}
                                    />
                                  </div>
                                ) : (
                                  <div
                                    style={{
                                      borderRadius: "12px",
                                      width: "90px",
                                      height: "90px",
                                      minWidth: "90px",
                                      background: "linear-gradient(135deg, var(--accent), #e0f2fe)",
                                      color: "var(--primary-hover)",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      fontWeight: "bold",
                                      fontSize: "24px",
                                      border: "1px solid var(--stroke)"
                                    }}
                                  >
                                    {p.title.charAt(0)}
                                  </div>
                                )}
                                <div>
                                  <h3 style={{ fontSize: "16px", margin: 0, fontWeight: 700, color: "var(--text)" }}>{p.title}</h3>
                                  <p style={{ fontSize: "12px", color: "var(--primary-hover)", fontWeight: 600, margin: "2px 0 0" }}>
                                    {p.subtitle}
                                  </p>
                                </div>
                              </div>

                              <p style={{ fontSize: "14px", margin: "8px 0", color: "var(--muted)", lineHeight: "1.5" }}>
                                {p.description}
                              </p>
                              <div className="tags" style={{ marginBottom: "12px" }}>
                                {p.tags.map((t) => (
                                  <span className="tag" key={t}>{t}</span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <div className="hr" />
                              <ul style={{ margin: "0 0 14px", paddingLeft: "16px", fontSize: "13px", color: "var(--muted)" }}>
                                {p.highlights.map((h) => (
                                  <li key={h} style={{ marginBottom: "4px" }}>{h}</li>
                                ))}
                              </ul>
                              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
                                {p.demo && (
                                  <a className="btn primary sm" href={p.demo} target="_blank" rel="noreferrer" style={{ flex: "1 1 120px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                                    View Site <ExternalLink size={12} />
                                  </a>
                                )}
                                {p.image && p.image.includes("awesomescreenshot.com") && (
                                  <a className="btn sm" href={p.image} target="_blank" rel="noreferrer" style={{ flex: "1 1 140px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "4px", borderColor: "var(--primary)", color: "var(--primary-hover)", background: "var(--accent)" }}>
                                    📸 View Screenshot <ExternalLink size={12} />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </section>

            {/* EDUCATION */}
            <section className="section" id="education">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                <GraduationCap size={24} color="var(--primary)" />
                <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 800 }}>Education</h2>
              </div>
              <p style={{ color: "var(--muted)", marginBottom: "24px", fontSize: "15px", maxWidth: "760px" }}>
                Academic credentials and computing engineering backgrounds forming my solid software base.
              </p>

              <div className="timeline">
                {educations.map((e) => (
                  <div className="timeline-item" key={e.degree}>
                    <div className="card" style={{ marginLeft: "8px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", alignItems: "baseline" }}>
                        <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text)" }}>🎓 {e.degree}</h3>
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--primary)" }}>{e.range}</span>
                      </div>
                      <p style={{ margin: "4px 0 2px", fontWeight: "600", fontSize: "15px", color: "var(--text)" }}>
                        {e.institution}
                      </p>
                      <p style={{ margin: 0, fontSize: "14px", color: "var(--muted)" }}>
                        📍 {e.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
      </div>

      {/* HORIZONTAL SECTION FOR LANGUAGES & INTERESTS AT THE END */}
      <section className="section" id="languages-interests" style={{ paddingTop: "10px", paddingBottom: "20px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {/* Languages */}
            <div className="card" style={{ padding: "24px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px", fontWeight: 700 }}>
                <Languages size={20} color="var(--primary)" /> Languages Spoken
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px" }}>
                {languages.map((l) => (
                  <div key={l.name} style={{ background: "var(--accent)", padding: "12px 14px", borderRadius: "12px", border: "1px solid var(--stroke)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <strong style={{ color: "var(--text)", fontSize: "15px" }}>{l.name}</strong>
                    </div>
                    <span style={{ fontSize: "12px", color: "var(--primary-hover)", fontWeight: 600, display: "block", marginBottom: "2px" }}>
                      {l.proficiency.includes("Native") ? "Native ⚡" : l.proficiency.includes("Full") ? "Fluent ⭐" : "Professional ✔️"}
                    </span>
                    <span style={{ fontSize: "11px", color: "var(--muted)" }}>
                      {l.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="card" style={{ padding: "24px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px", fontWeight: 700 }}>
                <Heart size={20} color="var(--primary)" style={{ fill: "rgba(14,165,233,0.1)" }} /> Personal Interests
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {interests.map((i) => (
                  <span className="pill" key={i} style={{ padding: "8px 16px", fontSize: "14px", fontWeight: 500 }}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section section-tight" id="contact" style={{ background: "var(--accent)", borderTop: "1px solid var(--stroke)", borderBottom: "1px solid var(--stroke)", marginTop: "40px" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
            <Mail size={24} color="var(--primary)" />
            <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 800 }}>Get In Touch</h2>
          </div>
          <p style={{ color: "var(--muted)", marginBottom: "24px", fontSize: "15px", maxWidth: "760px" }}>
            I&apos;m open to discussing full-stack web solutions, custom WooCommerce plug-in integrations, or specialized LMS system architecture.
          </p>

          <div className="card" style={{ padding: "30px", background: "#ffffff" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "24px", alignItems: "center" }}>
              <div>
                <h3 style={{ fontSize: "20px", marginBottom: "8px", fontWeight: 700, color: "var(--text)" }}>Let&apos;s work together!</h3>
                <p style={{ margin: 0, color: "var(--muted)" }}>Reach out directly through email, phone, or connect with me via professional networks.</p>
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a className="btn primary" href={`mailto:${profile.email}`} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <Mail size={16} /> Email Me
                </a>
                <a className="btn" href={profile.phoneHref} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <Phone size={16} /> Call Me
                </a>
                <a className="btn" href={linkedinLink} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
                <button
                  className="btn"
                  onClick={() => window.print()}
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px", cursor: "pointer", border: "none" }}
                >
                  <Download size={16} /> Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="footer">
        <div className="container">
          <div className="small">
            © {new Date().getFullYear()} <strong>{profile.name}</strong> • Software Engineer Portfolio.
          </div>
          <div className="small" style={{ marginTop: "6px", opacity: 0.8 }}>
            Built with Next.js + React + Lucide Icons. Fully responsive and optimized.
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL (FULL RESOLUTION SCROLLABLE PREVIEW) */}
      {viewImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(15, 23, 42, 0.85)",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)"
          }}
          onClick={() => setViewImage(null)}
        >
          <div style={{ position: "absolute", top: "16px", right: "24px", color: "#ffffff", fontSize: "13px", fontWeight: 600, background: "rgba(0,0,0,0.6)", padding: "6px 16px", borderRadius: "999px", letterSpacing: "0.02em" }}>
            Click anywhere outside to close ✖
          </div>
          <div
            style={{
              maxHeight: "88vh",
              maxWidth: "920px",
              width: "100%",
              overflowY: "auto",
              borderRadius: "16px",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
              background: "#ffffff",
              border: "1px solid var(--stroke)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={viewImage}
              alt="Full Resolution Preview"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      )}
    </main>
  );
}
