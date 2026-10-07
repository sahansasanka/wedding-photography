import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Irene & John | Fine Art Wedding & Destination Photography",
  description:
    "Editorial and timeless destination wedding photography based in Portugal & worldwide. Capturing authentic love stories, intimate moments, and romantic memories.",
  keywords: [
    "wedding photography",
    "destination wedding photographer",
    "portugal wedding",
    "editorial wedding photography",
    "fine art wedding",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${caveat.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-olive-900 text-cream-100 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
