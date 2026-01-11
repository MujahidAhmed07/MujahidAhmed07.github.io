import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plugin Architect — 3D Portfolio",
  description: "3D module lab portfolio for a WordPress plugin + full-stack engineer.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
