"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Mic, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

/* ── Brand logo: 45° tilted calculator with speed lines ── */
function VolaLogo({ className }: { className?: string }) {
  return (
    <svg width="38" height="38" viewBox="-4 -4 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Speed lines trailing to the left */}
      <line x1="-3" y1="17" x2="5"  y2="17" stroke="#800020" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="-3" y1="21" x2="7"  y2="21" stroke="#800020" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />
      <line x1="-3" y1="25" x2="9"  y2="25" stroke="#800020" strokeWidth="1"   strokeLinecap="round" opacity="0.4" />
      {/* Calculator at -45° */}
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

/* ── Decorative background calculator (no speed lines, mono-color) ── */
function CalcBg({ size = 120, color = "#800020", className }: { size?: number; color?: string; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-4 -4 48 48"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none absolute ${className ?? ""}`}
    >
      <g transform="rotate(-45 20 20)">
        <rect x="12" y="8"  width="16" height="24" rx="3"   fill={color} />
        <rect x="14" y="10" width="12" height="7"  rx="1.5" fill={color} fillOpacity="0.55" />
        <rect x="14"   y="20"   width="3.5" height="3" rx="0.8" fill={color} fillOpacity="0.5" />
        <rect x="18.3" y="20"   width="3.5" height="3" rx="0.8" fill={color} fillOpacity="0.5" />
        <rect x="22.5" y="20"   width="3.5" height="3" rx="0.8" fill={color} fillOpacity="0.5" />
        <rect x="14"   y="24.5" width="3.5" height="3" rx="0.8" fill={color} fillOpacity="0.5" />
        <rect x="18.3" y="24.5" width="3.5" height="3" rx="0.8" fill={color} fillOpacity="0.5" />
        <rect x="22.5" y="24.5" width="3.5" height="3" rx="0.8" fill={color} fillOpacity="0.5" />
        <rect x="14" y="29" width="12" height="2" rx="0.8" fill={color} fillOpacity="0.7" />
      </g>
    </svg>
  );
}

/* ── Service card: Instant Quote Generator custom icon ── */
function QuoteCalcIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="1" y="3" width="16" height="22" rx="3" fill="currentColor" />
      <rect x="3" y="5" width="12" height="6.5" rx="1.5" fill="white" fillOpacity="0.95" />
      <line x1="5" y1="8.5" x2="13" y2="8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="5" y1="10" x2="13" y2="10" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
      <line x1="10.5" y1="10.5" x2="13" y2="10.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6" />
      <rect x="3" y="14" width="3.5" height="2.5" rx="0.8" fill="white" fillOpacity="0.6" />
      <rect x="7.3" y="14" width="3.5" height="2.5" rx="0.8" fill="white" fillOpacity="0.6" />
      <rect x="11.5" y="14" width="3.5" height="2.5" rx="0.8" fill="white" fillOpacity="0.6" />
      <rect x="3" y="17.5" width="3.5" height="2.5" rx="0.8" fill="white" fillOpacity="0.6" />
      <rect x="7.3" y="17.5" width="3.5" height="2.5" rx="0.8" fill="white" fillOpacity="0.6" />
      <rect x="11.5" y="17.5" width="3.5" height="2.5" rx="0.8" fill="white" fillOpacity="0.6" />
      <rect x="3" y="21" width="12" height="2.5" rx="0.8" fill="white" fillOpacity="0.85" />
      <path d="M 19 1 Q 17 1 17 3 L 17 9 Q 17 11 19 11 L 20 11 L 18.5 13.5 L 22 11 L 25 11 Q 27 11 27 9 L 27 3 Q 27 1 25 1 Z" fill="white" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      <circle cx="20" cy="6" r="1" fill="currentColor" />
      <circle cx="22.5" cy="6" r="1" fill="currentColor" />
      <circle cx="25" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

const services = [
  {
    icon: QuoteCalcIcon,
    title: "Instant Quote Generator",
    tag: "Win First",
    slug: "instant-quote",
    mostValuable: true,
    description:
      "Deliver accurate, professional quotes to customers in under 2 minutes. Be first to respond and close the job before your competitor even calls back.",
  },
  {
    icon: Phone,
    title: "AI Receptionist",
    tag: "Never Miss a Call",
    slug: "ai-receptionist",
    mostValuable: false,
    description:
      "24/7 intelligent call answering that qualifies leads, schedules jobs, and handles inquiries. Your business never sleeps — even when you do.",
  },
  {
    icon: Mic,
    title: "Answer Machine Accuracy",
    tag: "Zero Missed Messages",
    slug: "answer-machine",
    mostValuable: false,
    description:
      "AI that listens, transcribes, and responds to every voicemail with precision. Every message becomes a followed-up lead — automatically.",
  },
  {
    icon: FileText,
    title: "Smart Invoice System",
    tag: "Get Paid Faster",
    slug: "smart-invoice",
    mostValuable: false,
    description:
      "Automated invoicing that sends, follows up, and tracks payments. Stop chasing money manually and get paid the moment the job is done.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect in Minutes",
    description:
      "Plug Volaleads into your existing phone number and workflow. No tech skills required — we handle the setup.",
  },
  {
    number: "02",
    title: "AI Handles the Speed Work",
    description:
      "Every call, quote request, and voicemail is captured and responded to instantly — while you're still on the previous job.",
  },
  {
    number: "03",
    title: "You Close More Jobs",
    description:
      "Show up as the fastest, most professional company in your market. Convert more leads and get paid without chasing.",
  },
];

const stats = [
  { value: "95%", label: "Call Answer Rate" },
  { value: "<2 min", label: "Quote Delivery" },
  { value: "3x", label: "Lead Conversion" },
  { value: "24/7", label: "Always On" },
];

const guarantees = [
  "No contracts",
  "Setup in minutes",
  "Works with any phone",
  "Live dashboard",
  "Cancel anytime",
  "Free onboarding",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Header ── */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <VolaLogo />
            <span className="font-serif text-2xl font-bold text-zinc-900">Volaleads</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">Services</Link>
            <Link href="#how-it-works" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">How It Works</Link>
            <Link href="/contact" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">Contact</Link>
            <Button asChild className="bg-[#800020] hover:bg-[#9a0028] text-white font-semibold px-6">
              <Link href="/builder">Book Demo</Link>
            </Button>
          </nav>
          <Button asChild size="sm" className="md:hidden bg-[#800020] hover:bg-[#9a0028] text-white font-semibold">
            <Link href="/builder">Demo</Link>
          </Button>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 bg-zinc-950 text-white overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(circle, #800020 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#800020]/50 to-transparent" />

        {/* Background calc decorations */}
        <CalcBg size={300} color="white" className="-right-20 -top-10 opacity-[0.03]" />
        <CalcBg size={90}  color="white" className="left-6 bottom-12 opacity-[0.05]" />
        <CalcBg size={48}  color="#cc2244" className="right-[38%] bottom-10 opacity-[0.07]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Speed Wins Leads.{" "}
              <span className="text-[#cc2244]">We Automate</span>{" "}
              Your Response.
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Scale your service business without living on your phone. Our automation captures quotes and converts leads 24/7 so you can focus on the work while we handle the wins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" asChild className="bg-[#800020] hover:bg-[#9a0028] text-white font-semibold text-base px-8 py-6 shadow-lg shadow-[#800020]/25 transition-all">
                <Link href="/builder">Get Instant Demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-[#800020] text-[#cc2244] hover:bg-transparent hover:border-[#9a0028] text-base px-8 py-6">
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-800">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-zinc-900 px-6 py-6 text-center">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-[#cc2244] mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="relative py-24 md:py-32 bg-white overflow-hidden">
        {/* Background calc decorations */}
        <CalcBg size={260} color="#800020" className="-right-20 -bottom-20 opacity-[0.03]" />
        <CalcBg size={52}  color="#800020" className="left-4 top-14 opacity-[0.04]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#800020] font-semibold uppercase tracking-widest text-sm mb-3">Four Tools. Zero Missed Leads.</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-900">Every Tool Built for Speed</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group rounded-2xl p-8 transition-all duration-300 ${
                  service.mostValuable
                    ? "border-2 border-[#800020] hover:shadow-xl hover:shadow-[#800020]/10"
                    : "border border-zinc-200 hover:border-[#800020]/40 hover:shadow-xl hover:shadow-[#800020]/5"
                }`}
              >
                {service.mostValuable && (
                  <div className="flex justify-end -mt-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#800020] text-white text-xs font-bold uppercase tracking-wide">★ Most Valuable</span>
                  </div>
                )}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#800020]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#800020]/15 transition-colors">
                    <service.icon className="h-6 w-6 text-[#800020]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-zinc-900 mb-1">{service.title}</h3>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#800020]/8 text-[#800020] text-xs font-semibold mb-3">{service.tag}</span>
                    <p className="text-zinc-600 leading-relaxed mb-4">{service.description}</p>
                    <Button asChild size="sm" className="bg-[#800020] hover:bg-[#9a0028] text-white font-semibold">
                      <Link href={`/servicespages#${service.slug}`}>
                        Run a Speed Test (Free) <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="relative py-24 md:py-32 bg-zinc-900 text-white overflow-hidden">
        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#800020 1px, transparent 1px), linear-gradient(90deg, #800020 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* Background calc decorations */}
        <CalcBg size={380} color="white" className="left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-[0.025]" />
        <CalcBg size={44}  color="white" className="left-8 top-8 opacity-[0.06]" />
        <CalcBg size={68}  color="#cc2244" className="right-10 bottom-10 opacity-[0.07]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#cc2244] font-semibold uppercase tracking-widest text-sm mb-3">Simple Setup. Instant Results.</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold">From First Call to Paid Invoice</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="font-serif text-7xl font-bold text-[#cc2244] mb-4 leading-none select-none">{step.number}</div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="max-w-xl mx-auto"
          >
            <div className="grid grid-cols-2 gap-3">
              {guarantees.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-[#cc2244] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 md:py-32 bg-[#800020] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 15% 50%, #ffffff 0%, transparent 55%), radial-gradient(circle at 85% 50%, #ffffff 0%, transparent 55%)" }} />
        <div className="absolute top-0 left-0 w-full h-px bg-white/15" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-black/20" />

        {/* Background calc decorations */}
        <CalcBg size={170} color="white" className="right-6 top-6 opacity-[0.09]" />
        <CalcBg size={80}  color="white" className="left-10 bottom-10 opacity-[0.1]" />
        <CalcBg size={36}  color="white" className="left-1/2 top-8 opacity-[0.06]" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Stop Losing Jobs to<br className="hidden sm:block" /> Slow Response Times
            </h2>
            <p className="text-lg text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
              Every lead you miss is a job your competitor is closing. Let Volaleads be your 24/7 AI lead capture engine — always on, always fast, always professional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-[#800020] hover:bg-zinc-100 font-bold text-base px-8 py-6 shadow-lg">
                <Link href="/builder">Get Started Free <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/50">No setup fees &nbsp;·&nbsp; Cancel anytime &nbsp;·&nbsp; 30-day guarantee</p>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative py-12 bg-zinc-950 border-t border-zinc-800 overflow-hidden">
        <CalcBg size={120} color="white" className="-right-8 -bottom-8 opacity-[0.04]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2.5">
              <VolaLogo />
              <span className="font-serif text-xl font-bold text-white">Volaleads</span>
            </Link>
            <p className="text-zinc-500 text-sm text-center">
              &copy; {new Date().getFullYear()} Volaleads. Built for home service companies that move fast.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-zinc-500 hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="text-sm text-zinc-500 hover:text-white transition-colors">Terms</Link>
              <Link href="/contact" className="text-sm text-zinc-500 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
