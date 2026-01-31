import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VolaLeads | AI-Powered Landing Page Generator",
  description: "Create stunning landing pages for home service businesses in seconds with AI. Classic elegance meets modern technology.",
  keywords: ["landing page generator", "AI", "home services", "business websites", "lead generation"],
  authors: [{ name: "VolaLeads" }],
  openGraph: {
    title: "VolaLeads | AI-Powered Landing Page Generator",
    description: "Create stunning landing pages for home service businesses in seconds with AI.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
