import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Sistema de Recomendación",
  description: "Sistema de recomendación de propiedades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="max-w-7xl mx-auto px-6">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
