"use client";

import Nav from "@/components/Nav";
import SectionTitle from "@/components/SectionTitle";
import BadgeRow from "@/components/BadgeRow";
import { clientProjects, experiences, products, profile, skills, tools } from "@/lib/data";
import { useHashNav, usePrefersReducedMotion } from "@/lib/hooks";
import { ModuleLab, blurbFor } from "@/components/scene/ModuleLabScene";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type ModuleId = "LMS" | "WOO" | "API" | "AI" | "SEC";

export default function Page() {
  useHashNav();
  const reduced = usePrefersReducedMotion();
  const [selected, setSelected] = useState<ModuleId>("LMS");
  const [viewImage, setViewImage] = useState<string | null>(null);

  const moduleTitle = useMemo(() => {
    const map: Record<ModuleId, string> = {
      LMS: "LMS Core",
      WOO: "Woo Engine",
      API: "API Connect",
      AI: "AI Core",
      SEC: "Security",
    };
    return map[selected];
  }, [selected]);

  return (
    <main id="top">
      <Nav />

      {/* HERO */}
      <section className="section hero">
        <div className="container">


          <div className="grid-2">
            <div className="headline">
              <h1>
                <div style={{ marginBottom: 20 }}>
                  <img
                    src="/hero-profile-v2.jpg"
                    alt={profile.name}
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "4px solid rgba(255,255,255,0.1)"
                    }}
                  />
                </div>
                {profile.name}
                <span style={{ display: "block", fontSize: "0.55em", opacity: 0.82, marginTop: 10 }}>
                  {profile.headline}
                </span>
              </h1>
              <p style={{ marginTop: 16, maxWidth: 680 }}>{profile.subhead}</p>

              <div className="cta">
                <a className="btn primary" href="#products">View Projects</a>
                <a className="btn" href={profile.links.find(l => l.label.includes("Resume"))?.href || "#"}>Download CV</a>
                <a className="btn" href={profile.links[0].href} target="_blank" rel="noreferrer">GitHub</a>
              </div>

              <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
                {profile.links.slice(0, 2).map(l => (
                  <a key={l.href} className="pill" href={l.href} target="_blank" rel="noreferrer">
                    <span style={{ opacity: 0.85 }}>{l.label}</span>
                    <span style={{ opacity: 0.55, fontSize: 12 }}>↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="canvasWrap">
              <ModuleLab onSelect={(id) => setSelected(id)} selectedId={selected} />
              <div className="panelDock">
                <motion.div
                  className="panel glass"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduced ? 0 : 0.35 }}
                >
                  <h3>{moduleTitle}</h3>
                  <p>{blurbFor(selected)}</p>
                  <div className="hr" />
                  <div className="row">
                    <span className="tag">Modular</span>
                    <span className="tag">Secure</span>
                    <span className="tag">Scalable</span>
                    <span className="tag">API-first</span>
                  </div>
                  <p className="small" style={{ marginTop: 10 }}>
                    Tip: scroll down — modules “dock” together. Reduced motion is respected automatically.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* SKILLS */}
      <section className="section section-tight" id="skills">
        <div className="container">
          <SectionTitle
            title="Skills"
            desc="A practical stack focused on WordPress plugin architecture, modern JS, and clean APIs."
          />
          <div className="split">
            {skills.map((g) => (
              <div className="card" key={g.group}>
                <h3>{g.group}</h3>
                <BadgeRow items={g.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="section section-tight" id="tools">
        <div className="container">
          <SectionTitle
            title="Tools & Workflow"
            desc="The daily drivers that keep my development process organized and efficient."
          />
          <div className="split">
            {tools.map((g) => (
              <div className="card" key={g.group}>
                <h3>{g.group}</h3>
                <BadgeRow items={g.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="container">
          <SectionTitle title="Experience" desc="Recent roles and the outcomes I focused on shipping." />
          <div className="split">
            {experiences.map((e) => (
              <div className="card" key={e.company}>
                <h3>{e.role}</h3>
                <p style={{ margin: "6px 0 0" }}>
                  <strong style={{ color: "rgba(255,255,255,0.9)" }}>{e.company}</strong>
                  <span style={{ marginLeft: 10, opacity: 0.65 }}>{e.range}</span>
                </p>
                <ul style={{ marginTop: 12, color: "rgba(255,255,255,0.68)", lineHeight: 1.55 }}>
                  {e.bullets.map((b) => (
                    <li key={b} style={{ marginBottom: 8 }}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section" id="products">
        <div className="container">
          <SectionTitle
            title="Products Engineered"
            desc="WooCommerce & LMS add-ons I architected and maintained."
          />
          <div className="split">
            {products.map((p) => (
              <div className="card" key={p.title}>
                {p.image && (
                  <div
                    style={{ marginBottom: 14, borderRadius: 12, overflow: "hidden", width: 100, height: 100, background: "rgba(0,0,0,0.2)", cursor: "pointer" }}
                    onClick={() => setViewImage(p.image!)}
                  >
                    <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                )}
                <h3>{p.title}</h3>
                <p style={{ marginTop: 6 }}>{p.subtitle}</p>
                <p style={{ marginTop: 12 }}>{p.description}</p>
                <div className="tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {p.github ? (
                    <a className="btn" href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                  ) : null}
                  {p.demo ? (
                    <a className="btn primary" href={p.demo} target="_blank" rel="noreferrer">
                      {p.demo.includes("github") ? "Live Demo" : "View Product"} ↗
                    </a>
                  ) : null}
                </div>
                <div className="hr" />
                <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(255,255,255,0.68)" }}>
                  {p.highlights.map((h) => <li key={h} style={{ marginBottom: 7 }}>{h}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT WORK */}
      <section className="section" id="client-work">
        <div className="container">
          <SectionTitle
            title="Trusted Clients / Custom Development Projects"
            desc="Custom platforms and integrations delivered for direct clients."
          />
          <div className="split">
            {clientProjects.map((p) => (
              <div className="card" key={p.title}>
                {p.image && (
                  <div
                    style={{ marginBottom: 14, borderRadius: 12, overflow: "hidden", width: 100, height: 100, background: "rgba(0,0,0,0.2)", cursor: "pointer" }}
                    onClick={() => setViewImage(p.image!)}
                  >
                    <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                )}
                <h3>{p.title}</h3>
                <p style={{ marginTop: 6 }}>{p.subtitle}</p>
                <p style={{ marginTop: 12 }}>{p.description}</p>
                <div className="tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {p.demo ? (
                    <a className="btn primary" href={p.demo} target="_blank" rel="noreferrer">Visit Site ↗</a>
                  ) : null}
                </div>
                <div className="hr" />
                <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(255,255,255,0.68)" }}>
                  {p.highlights.map((h) => <li key={h} style={{ marginBottom: 7 }}>{h}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-tight" id="contact">
        <div className="container">
          <SectionTitle title="Contact" desc="Fastest way to reach me." />
          <div className="card">
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <span className="pill">
                <span style={{ opacity: 0.75 }}>Email</span>
                <strong style={{ marginLeft: 8 }}>{profile.email}</strong>
              </span>
              <span className="pill">
                <span style={{ opacity: 0.75 }}>Phone</span>
                <strong style={{ marginLeft: 8 }}>(+92) 3162323279</strong>
              </span>
              <a className="btn primary" href={`mailto:${profile.email}`}>Email Me</a>
              <a className="btn" href={profile.links.find(l => l.label === "GitHub")?.href} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="btn" href={profile.links.find(l => l.label === "LinkedIn")?.href} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
            <p className="small" style={{ marginTop: 14 }}>
              Replace <strong>email</strong> and <strong>social links</strong> in <span className="kbd">lib/data.ts</span>.
            </p>
          </div>
        </div>
      </section>

      <div className="footer">
        <div className="container">
          <div className="small">© {new Date().getFullYear()} {profile.name} • Built with Next.js + React Three Fiber</div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {viewImage && (
        <div
          style={{
            position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
            background: "rgba(0,0,0,0.85)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out"
          }}
          onClick={() => setViewImage(null)}
        >
          <img
            src={viewImage}
            alt="Preview"
            style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: 8, boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
          />
        </div>
      )}
    </main>
  );
}
