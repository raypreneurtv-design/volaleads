"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

function VolaLogo() {
  return (
    <svg width="38" height="38" viewBox="-4 -4 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="-3" y1="17" x2="5"  y2="17" stroke="#800020" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="-3" y1="21" x2="7"  y2="21" stroke="#800020" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />
      <line x1="-3" y1="25" x2="9"  y2="25" stroke="#800020" strokeWidth="1"   strokeLinecap="round" opacity="0.4" />
      <g transform="rotate(-45 20 20)">
        <rect x="12" y="8"  width="16" height="24" rx="3"   fill="#800020" stroke="#111827" strokeWidth="1.8" />
        <rect x="14" y="10" width="12" height="7"  rx="1.5" fill="white" fillOpacity="0.92" />
        <line x1="16" y1="13.5" x2="24" y2="13.5" stroke="#800020" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="20" y1="15.5" x2="24" y2="15.5" stroke="#800020" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.5" />
        <rect x="14"   y="20"   width="3.5" height="3" rx="0.8" fill="white" fillOpacity="0.65" />
        <rect x="18.3" y="20"   width="3.5" height="3" rx="0.8" fill="white" fillOpacity="0.65" />
        <rect x="22.5" y="20"   width="3.5" height="3" rx="0.8" fill="white" fillOpacity="0.65" />
        <rect x="14"   y="24.5" width="3.5" height="3" rx="0.8" fill="white" fillOpacity="0.65" />
        <rect x="18.3" y="24.5" width="3.5" height="3" rx="0.8" fill="white" fillOpacity="0.65" />
        <rect x="22.5" y="24.5" width="3.5" height="3" rx="0.8" fill="white" fillOpacity="0.65" />
        <rect x="14" y="29" width="12" height="2" rx="0.8" fill="white" fillOpacity="0.85" />
      </g>
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <VolaLogo />
            <span className="font-serif text-2xl font-bold text-zinc-900">Volaleads</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#services"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium"
            >
              How It Works
            </Link>
            <Link
              href="/contact"
              className="text-sm text-zinc-900 font-semibold transition-colors"
            >
              Contact
            </Link>
            <Button asChild className="bg-[#800020] hover:bg-[#9a0028] text-white font-semibold px-6">
              <Link href="/builder">Book Demo</Link>
            </Button>
          </nav>
          <Button
            asChild
            size="sm"
            className="md:hidden bg-[#800020] hover:bg-[#9a0028] text-white font-semibold"
          >
            <Link href="/builder">Demo</Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 bg-zinc-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #800020 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#800020]/50 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-[1.1] mb-4">
              Get in <span className="text-[#cc2244]">Touch</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto">
              Have a question or ready to get started? Reach out — we respond fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Card */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-lg mx-auto"
          >
            <div className="border border-zinc-200 rounded-2xl p-10 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#800020]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#800020]" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-0.5">
                    Email Us
                  </p>
                  <h2 className="font-serif text-xl font-bold text-zinc-900">Direct Contact</h2>
                </div>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-8">
                We&apos;re here to help you grow your service business. Whether you have questions
                about our tools, pricing, or just want to see a demo — drop us a line and
                we&apos;ll get back to you promptly.
              </p>

              <a
                href="mailto:rayndaula@gmail.com"
                className="flex items-center justify-between w-full bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl px-6 py-4 font-semibold transition-colors group"
              >
                <span>rayndaula@gmail.com</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="mt-6 pt-6 border-t border-zinc-100 text-center">
                <p className="text-sm text-zinc-400">
                  Prefer a quick walkthrough?
                </p>
                <Button asChild className="mt-3 bg-[#800020] hover:bg-[#9a0028] text-white font-semibold w-full">
                  <Link href="/builder">
                    Book a Free Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2.5">
              <VolaLogo />
              <span className="font-serif text-xl font-bold text-white">Volaleads</span>
            </Link>
            <p className="text-zinc-500 text-sm text-center">
              &copy; {new Date().getFullYear()} Volaleads. Built for home service companies that move fast.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-zinc-500 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-zinc-500 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-sm text-zinc-500 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
