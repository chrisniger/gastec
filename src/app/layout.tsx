import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gastec Group of Companies | Energy, Resources & AI",
  description:
    "An integrated energy, resources, and AI group delivering world-class solutions across the global energy value chain.",
  icons: {
    icon: "/fav.png",
  },
  keywords: [
    "energy",
    "oil and gas",
    "AI",
    "renewable energy",
    "LNG",
    "mining",
    "infrastructure",
    "Gastec",
  ],
  openGraph: {
    title: "Gastec Group of Companies | Energy, Resources & AI",
    description:
      "An integrated energy, resources, and AI group delivering world-class solutions across the global energy value chain.",
    type: "website",
    locale: "en_US",
    siteName: "Gastec Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gastec Group of Companies | Energy, Resources & AI",
    description:
      "An integrated energy, resources, and AI group delivering world-class solutions across the global energy value chain.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
