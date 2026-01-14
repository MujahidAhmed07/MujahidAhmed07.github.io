"use client";
import { profile } from "@/lib/data";

const links = [
  { label: "Home", href: "#top" },
  { label: "Skills", href: "#skills" },
  { label: "Tools", href: "#tools" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <div className="nav glass" aria-label="Primary">
      <a href="#top" style={{ fontWeight: 700, padding: "8px 10px" }}>
        {profile.name.split(" ")[0]}<span style={{ opacity: 0.7 }}>•3D</span>
      </a>
      <div className="links">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
        <a className="btn" href={profile.links[0].href} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}
