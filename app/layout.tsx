import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Fuente elegante para títulos (similar a la de tu logo/diseño)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Fuente limpia para textos generales
const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Magnolia Joyas",
  description: "Joyas atemporales para nuevos comienzos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        <Navbar />        {/* Arriba de todo */}
        {children}        {/* El contenido de cada página */}
        <Footer />        {/* <--- Abajo de todo */}
      </body>
    </html>
  );
}