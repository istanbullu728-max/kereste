import type { Metadata } from "next";
import { Playfair_Display, Manrope, Montserrat, Oswald, Cinzel, Audiowide, Outfit } from "next/font/google"; // Changed Syne to Playfair Display
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hataykereste.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "Zeynel İstanbullu Kereste - Hatay Kereste ve 2026 Fiyatları",
    template: "%s | Zeynel İstanbullu Kereste"
  },
  description: "Zeynel İstanbullu Kereste; Hatay Antakya merkezli inşaatlık kereste, lambri ve ahşap çözümlerinde en uygun fiyatlı ve kaliteli hizmeti sunar. 2026 kereste fiyatları için hemen keşfedin.",
  keywords: ["hatay kereste", "hataykereste", "antakya kereste", "zeynel istanbullu kereste", "hatay kereste fiyatları", "kereste fabrikası hatay", "ahşap lambri hatay", "biçilmiş kereste", "kütük lambri", "kapı sereni", "plywood hatay", "şıngıl hatay", "hatay kereste imalatı"],
  authors: [{ name: "Zeynel İstanbullu Kereste" }],
  creator: "Zeynel İstanbullu Kereste",
  publisher: "Zeynel İstanbullu Kereste",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Zeynel İstanbullu Kereste - Hatay Kereste",
    description: "Zeynel İstanbullu Kereste; Hatay Antakya merkezli inşaatlık kereste, lambri ve ahşap çözümlerinde en uygun fiyatlı ve kaliteli hizmeti sunar. Hemen keşfedin.",
    url: "https://hataykereste.com",
    siteName: "Zeynel İstanbullu Kereste",
    images: [
      {
        url: "/hero-bg-main.png",
        width: 1200,
        height: 630,
        alt: "Zeynel İstanbullu Kereste Ürün Seçenekleri",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import { StickyContactButtons } from "@/components/layout/StickyContactButtons"; // Keeping this for desktop if needed, or removing if replaced.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${playfair.variable} ${manrope.variable} ${montserrat.variable} ${oswald.variable} ${cinzel.variable} ${audiowide.variable} ${outfit.variable} antialiased font-sans bg-timber-white text-timber-anthracite selection:bg-timber-beige selection:text-timber-anthracite overflow-x-hidden`}
      >
        <main>{children}</main>
        <Footer />
        <StickyContactButtons />

      </body>
    </html >
  );
}
