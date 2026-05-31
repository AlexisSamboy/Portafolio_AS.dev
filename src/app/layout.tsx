import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexis Samboy | Data Analyst & Estratega Digital",
  description: "Portafolio profesional de Alexis Samboy. Especializado en transformar datos complejos en soluciones de negocio claras con Power BI, Python, SQL y Excel.",
  keywords: ["Data Analyst", "Analista de Datos", "Alexis Samboy", "Power BI", "SQL", "Python", "Dashboard", "Dominican Republic"],
  authors: [{ name: "Alexis Samboy" }],
  icons: {
    icon: "img/logo-nav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen relative text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
