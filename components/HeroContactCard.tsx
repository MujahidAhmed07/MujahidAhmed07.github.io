"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { getVCardString, getQrVCardString, downloadVCard, downloadQrImage } from "@/lib/vcard";
import { profile } from "@/lib/data";
import {
  Download,
  Copy,
  Check,
  Smartphone,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Sparkles,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  Image as ImageIcon
} from "lucide-react";

export default function HeroContactCard() {
  const [qrUrl, setQrUrl] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const vcard = getQrVCardString();

    QRCode.toDataURL(vcard, {
      errorCorrectionLevel: "L",
      margin: 2,
      width: 260,
      color: {
        dark: "#0f172a",
        light: "#ffffff",
      },
    })
      .then((url) => {
        if (isMounted) {
          setQrUrl(url);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("QR Code generation error:", err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleCopy = () => {
    const text = [
      profile.name,
      profile.headline,
      `Company: WooNinjas`,
      `Phone: ${profile.phone}`,
      `Email: ${profile.email}`,
      `Location: ${profile.location}`,
      `Portfolio: https://mujahidahmed07.github.io`,
    ].join("\n");

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const linkedinLink = profile.links.find((l) => l.label === "LinkedIn")?.href || "#";
  const mediumLink = profile.links.find((l) => l.label === "Medium")?.href || "#";

  return (
    <div
      className="hero-contact-card"
      style={{
        background: "linear-gradient(170deg, #ffffff 0%, #f0f9ff 65%, #e0f2fe 100%)",
        borderRadius: "22px",
        border: "1px solid rgba(14, 165, 233, 0.28)",
        boxShadow: "0 20px 45px -12px rgba(14, 165, 233, 0.18), 0 0 0 1px rgba(255, 255, 255, 0.8) inset",
        position: "relative",
        overflow: "hidden",
        padding: "24px 22px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        width: "100%",
        maxWidth: "420px",
        margin: "0 auto",
      }}
    >
      {/* Top Gradient Banner Stripe */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #0ea5e9, #38bdf8, #818cf8, #0ea5e9)",
          backgroundSize: "200% 100%",
        }}
      />

      {/* Card Header: Digital Contact Pass */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: "var(--primary)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(14, 165, 233, 0.35)",
            }}
          >
            <QrCode size={16} />
          </div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.01em" }}>
              Digital Contact Pass
            </div>
            <div style={{ fontSize: "11px", color: "var(--muted)", fontWeight: 500 }}>
              Auto-save to phone contacts
            </div>
          </div>
        </div>

        {/* Live Availability Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(16, 185, 129, 0.1)",
            border: "1px solid rgba(16, 185, 129, 0.25)",
            padding: "4px 10px",
            borderRadius: "999px",
            fontSize: "11px",
            fontWeight: 700,
            color: "#059669",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#10b981",
              boxShadow: "0 0 8px #10b981",
            }}
          />
          vCard 3.0
        </div>
      </div>

      {/* HERO QR CODE SHOWCASE FRAME */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "18px",
          padding: "16px",
          border: "1px solid rgba(14, 165, 233, 0.2)",
          boxShadow: "0 10px 24px -6px rgba(14, 165, 233, 0.12), inset 0 1px 2px rgba(255,255,255,0.9)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Reticle / Scanner target corners */}
        <div
          style={{
            position: "relative",
            padding: "10px",
            background: "#ffffff",
            borderRadius: "14px",
            border: "1px solid #f1f5f9",
          }}
        >
          {/* Top-Left Reticle */}
          <div
            style={{
              position: "absolute",
              top: "-2px",
              left: "-2px",
              width: "14px",
              height: "14px",
              borderTop: "3px solid var(--primary)",
              borderLeft: "3px solid var(--primary)",
              borderTopLeftRadius: "6px",
            }}
          />
          {/* Top-Right Reticle */}
          <div
            style={{
              position: "absolute",
              top: "-2px",
              right: "-2px",
              width: "14px",
              height: "14px",
              borderTop: "3px solid var(--primary)",
              borderRight: "3px solid var(--primary)",
              borderTopRightRadius: "6px",
            }}
          />
          {/* Bottom-Left Reticle */}
          <div
            style={{
              position: "absolute",
              bottom: "-2px",
              left: "-2px",
              width: "14px",
              height: "14px",
              borderBottom: "3px solid var(--primary)",
              borderLeft: "3px solid var(--primary)",
              borderBottomLeftRadius: "6px",
            }}
          />
          {/* Bottom-Right Reticle */}
          <div
            style={{
              position: "absolute",
              bottom: "-2px",
              right: "-2px",
              width: "14px",
              height: "14px",
              borderBottom: "3px solid var(--primary)",
              borderRight: "3px solid var(--primary)",
              borderBottomRightRadius: "6px",
            }}
          />

          {/* QR Image */}
          <div
            style={{
              width: "160px",
              height: "160px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {loading ? (
              <div style={{ fontSize: "12px", color: "var(--muted)", fontWeight: 500 }}>
                Generating QR...
              </div>
            ) : (
              <img
                src={qrUrl}
                alt="Scan QR code with phone camera to save Mujahid Ahmed contact details"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                  borderRadius: "8px",
                }}
              />
            )}
          </div>
        </div>

        {/* Scan instruction with live pulsing icon */}
        <div
          style={{
            marginTop: "12px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
            fontWeight: 700,
            color: "var(--text)",
            textAlign: "center",
          }}
        >
          <Smartphone size={14} color="var(--primary)" />
          <span>Point mobile camera to auto-save</span>
        </div>

        <div
          style={{
            fontSize: "11px",
            color: "var(--muted)",
            marginTop: "2px",
            textAlign: "center",
          }}
        >
          Auto-fills <strong>Phone, Email, Role & Site</strong> into Contacts
        </div>

        {/* OS Support Pill Badges */}
        <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 600,
              padding: "2px 8px",
              borderRadius: "999px",
              background: "var(--accent)",
              color: "var(--primary-hover)",
              border: "1px solid rgba(14, 165, 233, 0.2)",
            }}
          >
            🍎 Apple iOS
          </span>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 600,
              padding: "2px 8px",
              borderRadius: "999px",
              background: "var(--accent)",
              color: "var(--primary-hover)",
              border: "1px solid rgba(14, 165, 233, 0.2)",
            }}
          >
            🤖 Android
          </span>
        </div>

        {/* Download QR Image Pill */}
        <button
          type="button"
          onClick={() => downloadQrImage(qrUrl)}
          style={{
            marginTop: "10px",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "11px",
            fontWeight: 700,
            padding: "5px 12px",
            borderRadius: "999px",
            background: "#ffffff",
            color: "var(--primary-hover)",
            border: "1px solid rgba(14, 165, 233, 0.3)",
            boxShadow: "0 2px 6px rgba(14, 165, 233, 0.08)",
            cursor: "pointer",
            transition: "all 150ms ease",
          }}
          title="Download high-resolution QR code image (PNG) to save, print or share"
        >
          <Download size={12} /> Download QR Code (PNG)
        </button>
      </div>

      {/* QUICK CONTACT DETAILS LIST */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
        {/* Phone */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "#ffffff",
              border: "1px solid var(--stroke)",
              color: "var(--primary-hover)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Phone size={15} />
          </div>
          <div style={{ minWidth: 0, overflow: "hidden" }}>
            <span style={{ fontSize: "11px", color: "var(--muted)", display: "block", lineHeight: 1.1 }}>
              Mobile / WhatsApp:
            </span>
            <a
              href={profile.phoneHref}
              style={{ fontWeight: 700, color: "var(--text)", textDecoration: "none" }}
            >
              {profile.phone}
            </a>
          </div>
        </div>

        {/* Email */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "#ffffff",
              border: "1px solid var(--stroke)",
              color: "var(--primary-hover)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Mail size={15} />
          </div>
          <div style={{ minWidth: 0, overflow: "hidden" }}>
            <span style={{ fontSize: "11px", color: "var(--muted)", display: "block", lineHeight: 1.1 }}>
              Direct Email:
            </span>
            <a
              href={`mailto:${profile.email}`}
              style={{
                fontWeight: 700,
                color: "var(--primary)",
                textDecoration: "none",
                wordBreak: "break-all",
              }}
            >
              {profile.email}
            </a>
          </div>
        </div>

        {/* Location */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "#ffffff",
              border: "1px solid var(--stroke)",
              color: "var(--primary-hover)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <MapPin size={15} />
          </div>
          <div>
            <span style={{ fontSize: "11px", color: "var(--muted)", display: "block", lineHeight: 1.1 }}>
              Location:
            </span>
            <span style={{ fontWeight: 600, color: "var(--text)" }}>{profile.location}</span>
          </div>
        </div>

        {/* Professional Networks */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "#ffffff",
              border: "1px solid var(--stroke)",
              color: "var(--primary-hover)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <ExternalLink size={15} />
          </div>
          <div>
            <span style={{ fontSize: "11px", color: "var(--muted)", display: "block", lineHeight: 1.1 }}>
              Professional Links:
            </span>
            <div style={{ display: "flex", gap: "8px", marginTop: "2px", alignItems: "center" }}>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontWeight: 600,
                  color: "var(--primary)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "2px",
                  fontSize: "12px",
                }}
              >
                LinkedIn <ExternalLink size={10} />
              </a>
              <span style={{ color: "var(--stroke)" }}>•</span>
              <a
                href={mediumLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontWeight: 600,
                  color: "var(--primary)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "2px",
                  fontSize: "12px",
                }}
              >
                Medium <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 1-CLICK ACTION BUTTONS */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "8px" }}>
          <button
            type="button"
            onClick={downloadVCard}
            className="btn primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              padding: "9px 12px",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(14, 165, 233, 0.28)",
            }}
            title="Download .vcf contact card directly into phone or computer"
          >
            <Download size={14} />
            Save Contact (.vcf)
          </button>

          <button
            type="button"
            onClick={() => downloadQrImage(qrUrl)}
            className="btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              padding: "9px 10px",
              fontSize: "12px",
              fontWeight: 700,
              cursor: "pointer",
              background: "var(--accent)",
              color: "var(--primary-hover)",
              border: "1px solid rgba(14, 165, 233, 0.3)",
              borderRadius: "10px",
            }}
            title="Download QR code image as PNG"
          >
            <QrCode size={14} />
            Download QR
          </button>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            padding: "7px 10px",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
            background: "#ffffff",
            border: "1px solid var(--stroke)",
            borderRadius: "10px",
            color: "var(--muted)",
          }}
          title="Copy contact information text"
        >
          {copied ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
          {copied ? "Copied to clipboard!" : "Copy Details"}
        </button>
      </div>
    </div>
  );
}
