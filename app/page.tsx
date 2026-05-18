"use client";

import Nav from "@/components/Nav";
import SectionTitle from "@/components/SectionTitle";
import { clientProjects, experiences, products, cvProjects, profile, skills, educations, languages, interests } from "@/lib/data";
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
  ExternalLink
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
          <div className="card glass" style={{ padding: "40px", border: "1px solid var(--stroke)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "36px", alignItems: "center" }}>
              {/* Left Bio Column */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "28px", marginBottom: "20px", flexWrap: "wrap" }}>
                  <img
                    src="/hero-profile-v2.jpg"
                    alt={profile.name}
                    style={{
                      width: "180px",
                      height: "180px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "5px solid var(--primary)",
                      boxShadow: "0 12px 28px rgba(14, 165, 233, 0.22)",
                      flexShrink: 0
                    }}
                  />
                  <div>
                    <h1 style={{ fontSize: "clamp(34px, 4.5vw, 44px)", fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
                      {profile.name}
                    </h1>
                    <span style={{ fontSize: "19px", fontWeight: 600, color: "var(--primary)", marginTop: "6px", display: "inline-block" }}>
                      {profile.headline}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--muted)", margin: "0 0 28px" }}>
                  {profile.subhead}
                </p>

                <div className="cta" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
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
              <div style={{ background: "var(--bg)", padding: "26px", borderRadius: "18px", border: "1px solid var(--stroke)" }}>
                <h3 style={{ fontSize: "15px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
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
                    <div>
                      <span style={{ color: "var(--muted)", fontSize: "12px" }}>Email:</span>
                      <div>
                        <a href={`mailto:${profile.email}`} style={{ fontWeight: 600, color: "var(--primary)" }}>
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
                        <a href={`tel:${profile.email}`} style={{ fontWeight: 600, color: "var(--text)" }}>
                          +92 316 2323279
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
                      <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
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
        <div className="grid-layout">
          {/* LEFT COLUMN: EXPERIENCE, PROJECTS, EDUCATION */}
          <div>
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

            {/* PROJECTS */}
            <section className="section" id="products">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                <Package size={24} color="var(--primary)" />
                <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 800 }}>Projects & Products Architected</h2>
              </div>
              <p style={{ color: "var(--muted)", marginBottom: "24px", fontSize: "15px", maxWidth: "760px" }}>
                A select history of commercial SaaS integrations, premium plugin development, and machine learning full-stack platforms.
              </p>

              {/* CV Highlight Projects */}
              <h3 style={{ marginTop: "24px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px", fontSize: "18px", fontWeight: 700 }}>
                <Star size={18} style={{ color: "#eab308", fill: "#eab308" }} /> CV Highlight Projects
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {cvProjects.map((p) => (
                  <div className="card" key={p.title}>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", alignItems: "baseline" }}>
                      <h3 style={{ fontSize: "18px", color: "var(--text)" }}>{p.title}</h3>
                      <span className="kbd" style={{ background: "var(--accent)", color: "var(--primary-hover)", borderColor: "rgba(14,165,233,0.15)" }}>
                        {p.subtitle}
                      </span>
                    </div>
                    <p style={{ margin: "8px 0 12px", fontSize: "14px", color: "var(--muted)" }}>{p.description}</p>
                    <div className="tags">
                      {p.tags.map((t) => (
                        <span className="tag" key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="hr" />
                    <ul style={{ margin: 0, paddingLeft: "18px", color: "var(--muted)", fontSize: "14px" }}>
                      {p.highlights.map((h) => (
                        <li key={h} style={{ marginBottom: "6px" }}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* WooCommerce Commercial Plugins */}
              <h3 style={{ marginTop: "40px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px", fontSize: "18px", fontWeight: 700 }}>
                <Package size={18} color="var(--primary)" /> Commercial WordPress & WooCommerce Plugins
              </h3>
              <p style={{ color: "var(--muted)", marginBottom: "20px", fontSize: "15px" }}>
                High-quality extension products I developed and maintained, currently powering thousands of WooCommerce stores worldwide:
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                {products.map((p) => (
                  <div className="card" key={p.title} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      {/* Left Thumbnail + Right Title Layout */}
                      <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "14px" }}>
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
                              padding: "4px"
                            }}
                            onClick={() => setViewImage(p.image!)}
                          >
                            <img
                              src={p.image}
                              alt={p.title}
                              style={{ width: "100%", height: "100%", objectFit: "contain" }}
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
                      {p.demo && (
                        <a className="btn primary sm" href={p.demo} target="_blank" rel="noreferrer" style={{ width: "100%", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                          View Product <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Client Projects */}
              <h3 style={{ marginTop: "40px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px", fontSize: "18px", fontWeight: 700 }}>
                <Globe size={18} color="var(--primary)" /> Trusted Client / Custom Platforms
              </h3>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                {clientProjects.map((p) => (
                  <div className="card" key={p.title} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      {/* Left Thumbnail + Right Title Layout */}
                      <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "14px" }}>
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
                              padding: "4px"
                            }}
                            onClick={() => setViewImage(p.image!)}
                          >
                            <img
                              src={p.image}
                              alt={p.title}
                              style={{ width: "100%", height: "100%", objectFit: "contain" }}
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
                      {p.demo && (
                        <a className="btn sm" href={p.demo} target="_blank" rel="noreferrer" style={{ width: "100%", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                          Visit Site <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
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

          {/* RIGHT COLUMN (SIDEBAR): SKILLS, LANGUAGES, INTERESTS */}
          <div>
            <div style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Technical Skills */}
              <div className="card" id="skills">
                <h3 style={{ fontSize: "18px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px", fontWeight: 700 }}>
                  <Cpu size={20} color="var(--primary)" /> Technical Stack
                </h3>
                {skills.map((g) => (
                  <div key={g.group} style={{ marginBottom: "18px" }}>
                    <h4 style={{ fontSize: "12px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>
                      {g.group}
                    </h4>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {g.items.map((skill) => (
                        <span className="tag" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="card">
                <h3 style={{ fontSize: "18px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px", fontWeight: 700 }}>
                  <Languages size={20} color="var(--primary)" /> Languages
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {languages.map((l) => (
                    <div key={l.name} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                        <strong style={{ color: "var(--text)" }}>{l.name}</strong>
                        <span style={{ fontSize: "12px", color: "var(--primary-hover)", fontWeight: 600 }}>
                          {l.proficiency.includes("Native") ? "Native ⚡" : l.proficiency.includes("Full") ? "Fluent ⭐" : "Professional ✔️"}
                        </span>
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--muted)" }}>
                        {l.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="card">
                <h3 style={{ fontSize: "18px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px", fontWeight: 700 }}>
                  <Heart size={20} color="var(--primary)" style={{ fill: "rgba(14,165,233,0.1)" }} /> Interests
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {interests.map((i) => (
                    <span className="pill" key={i} style={{ padding: "6px 12px", fontSize: "13px", fontWeight: 500 }}>
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                <a className="btn" href={`tel:${profile.email}`} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
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

      {/* LIGHTBOX MODAL */}
      {viewImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(255, 255, 255, 0.95)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
            backdropFilter: "blur(8px)"
          }}
          onClick={() => setViewImage(null)}
        >
          <img
            src={viewImage}
            alt="Preview"
            style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: "12px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--stroke)" }}
          />
        </div>
      )}
    </main>
  );
}
