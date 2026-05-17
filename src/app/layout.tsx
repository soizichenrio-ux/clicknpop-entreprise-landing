import type { Metadata } from "next";
import { fraunces, ibmPlexSans, ibmPlexMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Click'n Pop pour entreprises — Le recrutement qui fait pop",
  description:
    "Pour les DRH qui en ont assez du flop. Click'n Pop ne match pas des CV — on cherche les conditions pour que ça tienne. App entreprise fin mai 2026.",
  metadataBase: new URL("https://entreprise.clicknpop.fr"),
  openGraph: {
    title: "Click'n Pop pour entreprises",
    description: "Le recrutement qui fait pop.",
    url: "https://entreprise.clicknpop.fr",
    siteName: "Click'n Pop",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
