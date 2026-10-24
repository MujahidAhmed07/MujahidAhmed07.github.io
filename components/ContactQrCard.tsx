"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { getVCardString, getQrVCardString, downloadVCard, downloadQrImage } from "@/lib/vcard";
import { profile } from "@/lib/data";
import {
  Download,
  Check,
  Copy,
  Smartphone,
  UserCheck,
  QrCode
} from "lucide-react";

export default function ContactQrCard() {
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
        console.error("Failed to generate QR Code:", err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleCopy = () => {
    const text = `${profile.name}\n${profile.headline}\nPhone: ${profile.phone}\nEmail: ${profile.email}\nWebsite: https://mujahidahmed07.github.io\nLocation: ${profile.location}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div
      className="card"
      style={{
        padding: "28px",
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        border: "1px solid rgba(14, 165, 233, 0.2)",
        borderRadius: "20px",
        boxShadow: "0 12px 30px -10px rgba(14, 165, 233, 0.12)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative top accent glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #0ea5e9, #38bdf8, #818cf8)",
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
        <div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "12px",
              fontWeight: 700,
              color: "var(--primary-hover)",
              background: "var(--accent)",
              border: "1px solid rgba(14, 165, 233, 0.25)",
              padding: "4px 10px",
              borderRadius: "999px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "8px",
            }}
          >
            <Smartphone size={13} /> Instant Mobile Contact
          </span>
          <h3 style={{ fontSize: "20px", fontWeight: 800, color: "var(--text)", margin: "0 0 4px" }}>
            Scan to Save Details
          </h3>
          <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>
            Point your mobile camera to instantly auto-save my contact card to your phone.
          </p>
        </div>
      </div>

      {/* QR Code Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          padding: "20px",
          borderRadius: "16px",
          border: "1px solid var(--stroke)",
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.02), 0 8px 20px rgba(0,0,0,0.04)",
          position: "relative",
          margin: "18px 0",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "200px",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {loading ? (
            <div style={{ fontSize: "13px", color: "var(--muted)" }}>Generating QR Code...</div>
          ) : (
            <img
              src={qrUrl}
              alt="Mujahid Ahmed Contact vCard QR Code"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                borderRadius: "10px",
              }}
            />
          )}
        </div>

        {/* Scan instruction badge */}
        <div
          style={{
            marginTop: "12px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
            fontWeight: 600,
            color: "var(--muted)",
          }}
        >
          <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
          Works automatically with iOS Camera & Android Google Lens
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

      {/* What gets saved preview */}
      <div
        style={{
          background: "var(--accent)",
          borderRadius: "12px",
          padding: "12px 14px",
          border: "1px solid rgba(14, 165, 233, 0.15)",
          marginBottom: "18px",
          fontSize: "12px",
        }}
      >
        <div style={{ fontWeight: 700, color: "var(--primary-hover)", marginBottom: "6px", display: "flex", alignItems: "center", gap: "5px" }}>
          <UserCheck size={14} /> Details automatically saved:
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", color: "var(--muted)" }}>
          <div>👤 <strong>Name:</strong> {profile.name}</div>
          <div>💼 <strong>Role:</strong> {profile.headline}</div>
          <div>📞 <strong>Phone:</strong> {profile.phone}</div>
          <div>✉️ <strong>Email:</strong> {profile.email}</div>
          <div>🌐 <strong>Web:</strong> mujahidahmed07.github.io</div>
          <div>📍 <strong>Location:</strong> {profile.location}</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
              padding: "10px 14px",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(14, 165, 233, 0.25)",
            }}
          >
            <Download size={15} />
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
              padding: "10px 12px",
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
            padding: "8px 12px",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
            background: "#ffffff",
            border: "1px solid var(--stroke)",
            borderRadius: "10px",
            color: "var(--muted)",
          }}
          title="Copy contact text to clipboard"
        >
          {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
          {copied ? "Copied to clipboard!" : "Copy Details"}
        </button>
      </div>
    </div>
  );
}
