import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbarv2 } from "@/components";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colgantes Mónica",
  description: "Descubre hermosos colgantes para plantas hechos a mano. Diseño artesanal para decorar tu jardín o interiores con estilo y elegancia.",
  keywords: "colgantes para plantas, jardinería, decoración de jardín, macramé, artesanía, diseño natural",
  authors: [{ name: "Monica Peña" }],
  openGraph: {
    title: "Colgantes Artesanales para Plantas",
    description: "Dale un toque especial a tu jardín con colgantes hechos a mano. Perfectos para interiores y exteriores.",
    url: "https://www.colgantesmonica.cl",
    type: "website",
    siteName: "Colgantes Mónica",
    images: [
      {
        url: "https://www.colgantesmonica.cl/img/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Colgantes para plantas en un jardín",
      },
    ],
    locale: "es_ES",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        rel: 'icon',
        url: "/img/icon.svg",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#388E3C',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-repeat bg-fixed bg-texture-leaves`}>
        <Navbarv2 />  
        {children}
      </body>
    </html>
  );
}
