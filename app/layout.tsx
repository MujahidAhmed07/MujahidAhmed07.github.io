import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mujahid Ahmed — Plugin Architect & Full Stack Engineer",
  description: "Portfolio of Mujahid Ahmed, a software engineer specializing in WordPress, LMS, and full-stack development.",
  metadataBase: new URL("https://mujahidahmed07.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mujahidahmed07.github.io",
    title: "Mujahid Ahmed — Plugin Architect & Full Stack Engineer",
    description: "Portfolio of Mujahid Ahmed, a software engineer specializing in WordPress, LMS, and full-stack development.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
