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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Finoverse Design",
  description: "Finoverse Design web effector for SVG, PNG, and MP4 exports.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Finoverse Design",
    description: "Finoverse Design web effector for SVG, PNG, and MP4 exports.",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Finoverse Design social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finoverse Design",
    description: "Finoverse Design web effector for SVG, PNG, and MP4 exports.",
    images: ["/social-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
