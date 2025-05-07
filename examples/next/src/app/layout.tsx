import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Script from 'next/script';
import { Navbar } from "../components/Navbar";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tokedex",
  description: "A terminal-inspired crypto token screener",
  openGraph: {
    title: "Tokedex",
    description: "A terminal-inspired crypto token screener",
    type: "website",
    url: "https://tokedex.chromat.xyz", // Replace with your actual domain
    images: [
      {
        url: "https://tokedex.chromat.xyz/og-image.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Tokedex - A terminal-inspired crypto token screener",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tokedex",
    description: "A terminal-inspired crypto token screener",
    images: ["https://tokedex.chromat.xyz/og-image.png"], // Replace with your actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark'}}>
      <head>
        <Script
          src="/charting_library/charting_library.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${geistMono.variable} antialiased`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
