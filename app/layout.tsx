import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// CONFIGURACIÓN DE SEO COMPLETA
export const metadata: Metadata = {
  metadataBase: new URL('https://tusitio.com'), // CAMBIA ESTO POR TU DOMINIO REAL
  title: {
    default: "SMARTDICOM | Sitios Web de Alto Rendimiento",
    template: "%s | SMARTDICOM"
  },
  description: "Agencia de desarrollo web y estrategias digitales en Colombia. Expertos en Next.js y optimización de conversión.",
  keywords: ["Desarrollo web Colombia", "Agencia digital", "Next.js", "Vercel", "SMARTDICOM", "SEO"],
  authors: [{ name: "SMARTDICOM" }],
  creator: "SMARTDICOM",
  publisher: "SMARTDICOM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "SMARTDICOM | Desarrollo Web de Alto Rendimiento",
    description: "Creamos soluciones digitales escalables en Colombia.",
    url: 'https://tusitio.com', // CAMBIA ESTO
    siteName: 'SMARTDICOM',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMARTDICOM',
    description: 'Agencia de desarrollo web y estrategias digitales.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es"> {/* CAMBIADO A ESPAÑOL */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}