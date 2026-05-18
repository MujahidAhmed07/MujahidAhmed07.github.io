"use client";
import { profile } from "@/lib/data";
import { Download } from "lucide-react";

const links = [
  { label: "Home", href: "#top" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#products" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const downloadLink = profile.links.find((l) => l.label === "Resume")?.href || "#";

  return (
    <div className="nav glass" aria-label="Primary">
      <a href="#top" style={{ fontWeight: 800, padding: "8px 10px", fontSize: "16px", color: "var(--text)" }}>
        {profile.name}
      </a>
      <div className="links">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
        <button
          className="btn primary sm"
          onClick={() => window.print()}
          style={{ marginLeft: "8px", display: "inline-flex", alignItems: "center", gap: "6px", cursor: "pointer", border: "none" }}
        >
          <Download size={14} />
          Download PDF
        </button>
      </div>
    </div>
  );
}
