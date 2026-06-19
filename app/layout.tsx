import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADOU Thecle Manasse | Portfolio",
  description:
    "Portfolio de ADOU Thecle Manasse, développeur fullstack avec une sensibilité réseau et sécurité informatique.",
  keywords: [
    "ADOU Thecle Manasse",
    "développeur fullstack",
    "portfolio développeur",
    "Next.js",
    "Vue.js",
    "Laravel",
    "réseau informatique",
    "cybersécurité",
    "Abidjan",
  ],
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
