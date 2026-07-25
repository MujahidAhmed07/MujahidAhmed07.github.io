"use client";

import { profile } from "@/lib/data";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#top", id: "top" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#products", id: "products" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Nav() {
  const [activeId, setActiveId] = useState<string>("top");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Scrollspy: Automatically detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = links.length - 1; i >= 0; i--) {
        const id = links[i].id;
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveId(id);
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="nav glass" aria-label="Primary navigation">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        {/* Brand Name */}
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, "top")}
          className="nav-brand"
          style={{ fontWeight: 800, padding: "8px 10px", fontSize: "16px", color: "var(--text)" }}
        >
          {profile.name}
        </a>

        {/* Desktop Navigation Links */}
        <div className="links desktop-only">
          {links.map((l) => {
            const isActive = activeId === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleLinkClick(e, l.id)}
                className={isActive ? "active" : ""}
                style={{
                  padding: "6px 14px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: isActive ? 600 : 500,
                  background: isActive ? "var(--primary)" : "transparent",
                  color: isActive ? "#ffffff" : "var(--text)",
                  boxShadow: isActive ? "0 4px 12px rgba(14, 165, 233, 0.25)" : "none",
                  transition: "all 150ms ease"
                }}
              >
                {l.label}
              </a>
            );
          })}

          <button
            className="btn primary sm"
            onClick={() => window.print()}
            style={{ marginLeft: "8px", display: "inline-flex", alignItems: "center", gap: "6px", cursor: "pointer", border: "none" }}
          >
            <Download size={14} />
            PDF
          </button>
        </div>

        {/* Mobile Controls (PDF + Hamburger Toggle) */}
        <div className="mobile-only-controls" style={{ display: "none", alignItems: "center", gap: "8px" }}>
          <button
            className="btn primary sm"
            onClick={() => window.print()}
            style={{ display: "inline-flex", alignItems: "center", gap: "4px", padding: "6px 10px", fontSize: "12px", border: "none" }}
          >
            <Download size={13} /> PDF
          </button>
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "var(--accent)",
              border: "1px solid var(--stroke)",
              borderRadius: "10px",
              padding: "6px 10px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--primary-hover)"
            }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay Menu */}
      {isOpen && (
        <div
          className="mobile-drawer glass"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            marginTop: "8px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            borderRadius: "16px",
            boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
            border: "1px solid var(--stroke)"
          }}
        >
          {links.map((l) => {
            const isActive = activeId === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleLinkClick(e, l.id)}
                style={{
                  padding: "10px 16px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: isActive ? 700 : 500,
                  background: isActive ? "var(--primary)" : "var(--accent)",
                  color: isActive ? "#ffffff" : "var(--text)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: "all 150ms ease"
                }}
              >
                <span>{l.label}</span>
                {isActive && <span style={{ fontSize: "12px" }}>● Active</span>}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
