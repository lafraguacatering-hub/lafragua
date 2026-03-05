import type { Metadata } from "next";
import "./globals.css";

import { Playfair_Display, Inter } from "next/font/google";

import Navbar from "./components/Navbar";
import FloatingButtons from "./components/FloatingButtons";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "La Fragua",
  description: "Asado argentino y pizzas napolitanas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <div style={{ paddingTop: 64 }}>{children}</div>
        <FloatingButtons />
      </body>
    </html>
  );
}