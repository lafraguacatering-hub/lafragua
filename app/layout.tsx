import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import FloatingButtons from "./components/FloatingButtons";

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
    <html lang="es">
      <body>
        <Navbar />
        <div style={{ paddingTop: 64 }}>{children}</div>
        <FloatingButtons />
      </body>
    </html>
  );
}