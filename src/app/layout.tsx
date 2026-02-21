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
  title: "Volaleads | AI Lead Capture for Home Service Companies",
  description: "Volaleads helps home service companies win more jobs with AI — instant quote generators, AI receptionists, answer machine accuracy, and smart invoicing. Speed wins leads.",
  keywords: ["AI receptionist", "instant quote generator", "home service leads", "lead capture", "AI for contractors", "invoice system", "answer machine", "HVAC leads", "plumber leads"],
  authors: [{ name: "Volaleads" }],
  openGraph: {
    title: "Volaleads | AI Lead Capture for Home Service Companies",
    description: "Speed wins leads. Volaleads automates your response with AI tools built for home service companies.",
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
