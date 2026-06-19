import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL('https://portafolio-alexis.vercel.app'),
  title: "Alexis Samboy | Data Analyst & Estratega Digital",
  description: "Portafolio profesional de Alexis Samboy. Especializado en transformar datos complejos en soluciones de negocio claras con Power BI, Python, SQL y Excel.",
  keywords: ["Data Analyst", "Analista de Datos", "Alexis Samboy", "Power BI", "SQL", "Python", "Dashboard", "Dominican Republic"],
  authors: [{ name: "Alexis Samboy" }],
  icons: {
    icon: basePath ? `${basePath}/img/logo-nav.png` : "img/logo-nav.png",
  },
  openGraph: {
    title: "Alexis Samboy | Data Analyst & Estratega Digital",
    description: "Portafolio profesional de Alexis Samboy. Especializado en transformar datos complejos en soluciones de negocio claras con Power BI, Python, SQL y Excel.",
    url: "https://portafolio-alexis.vercel.app",
    siteName: "Alexis Samboy Portfolio",
    images: [
      {
        url: basePath ? `${basePath}/img/og-preview.png` : "/img/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Alexis Samboy Portfolio Preview",
      },
    ],
    locale: "es_RD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexis Samboy | Data Analyst & Estratega Digital",
    description: "Portafolio profesional de Alexis Samboy. Especializado en transformar datos complejos en soluciones de negocio claras con Power BI, Python, SQL y Excel.",
    images: [basePath ? `${basePath}/img/og-preview.png` : "/img/og-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen relative text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 bg-[#05060a]">
        {/* Global Navbar */}
        <Navbar />
        
        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
