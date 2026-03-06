import type { Metadata } from "next";
import { Playfair_Display, Manrope, Montserrat, Oswald, Cinzel } from "next/font/google"; // Changed Syne to Playfair Display
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

export const metadata: Metadata = {
  title: "Timber & Wood Factory",
  description: "High-end Timber Manufacturing and Design",
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
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${playfair.variable} ${manrope.variable} ${montserrat.variable} ${oswald.variable} ${cinzel.variable} antialiased font-sans bg-timber-white text-timber-anthracite selection:bg-timber-beige selection:text-timber-anthracite overflow-x-hidden`}
      >
        <main>{children}</main>
        <Footer />
        <StickyContactButtons />

      </body>
    </html >
  );
}
