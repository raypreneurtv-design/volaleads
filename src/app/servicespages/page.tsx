"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Zap, Phone, Mic, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
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

/* ── Demo: Instant Quote Generator ── */
function QuoteDemo() {
  const [submitted, setSubmitted] = useState(false);
  const [serviceType, setServiceType] = useState("HVAC Repair");
  const [propertySize, setPropertySize] = useState("1,500 sq ft");
  const [urgency, setUrgency] = useState("Standard");

  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
        <h3 className="font-semibold text-zinc-900 mb-5">Enter Job Details</h3>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wide block mb-1">
              Service Type
            </label>
            <select
              className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm text-zinc-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#800020]/30"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option>HVAC Repair</option>
              <option>Plumbing Emergency</option>
              <option>Electrical Inspection</option>
              <option>Roof Repair</option>
              <option>General Handyman</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wide block mb-1">
              Property Size
            </label>
            <select
              className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm text-zinc-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#800020]/30"
              value={propertySize}
              onChange={(e) => setPropertySize(e.target.value)}
            >
              <option>Under 1,000 sq ft</option>
              <option>1,500 sq ft</option>
              <option>2,000 sq ft</option>
              <option>3,000+ sq ft</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wide block mb-1">
              Urgency
            </label>
            <div className="flex gap-2">
              {["Standard", "Urgent", "Emergency"].map((u) => (
                <button
                  key={u}
                  onClick={() => setUrgency(u)}
                  className={`flex-1 border rounded-lg px-2 py-2 text-xs font-medium transition-colors ${
                    urgency === u
                      ? "border-[#800020] text-[#800020] bg-[#800020]/5"
                      : "border-zinc-200 text-zinc-600 hover:border-[#800020] hover:text-[#800020]"
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>
          <Button
            className="w-full bg-[#800020] hover:bg-[#9a0028] text-white font-semibold"
            onClick={() => setSubmitted(true)}
          >
            Generate Quote
            <Zap className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-[#800020]/40 rounded-2xl p-6 shadow-lg shadow-[#800020]/5"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-[#800020] uppercase tracking-widest">Quote Generated</span>
            <span className="text-xs text-zinc-400">in 1.2 seconds</span>
          </div>
          <div className="font-serif text-2xl font-bold text-zinc-900 mb-1">Estimate: $285 – $420</div>
          <p className="text-sm text-zinc-500 mb-4">
            {serviceType} · {propertySize} · {urgency}
          </p>
          <div className="space-y-2 border-t border-zinc-100 pt-4">
            {[
              ["Labor (2–3 hrs @ $95/hr)", "$190–$285"],
              ["Parts & materials", "$65–$90"],
              ["Service call fee", "$30"],
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="text-zinc-600">{label}</span>
                <span className="font-medium text-zinc-900">{val}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-[#800020]/5 rounded-lg text-xs text-zinc-600">
            <CheckCircle2 className="inline h-3.5 w-3.5 text-[#800020] mr-1.5" />
            Sent to customer in under 2 minutes — automatically.
          </div>
        </motion.div>
      ) : (
        <div className="bg-zinc-50 border border-dashed border-zinc-300 rounded-2xl p-6 flex items-center justify-center min-h-[220px]">
          <p className="text-zinc-400 text-sm text-center">Your AI-generated quote will appear here instantly.</p>
        </div>
      )}
    </div>
  );
}

/* ── Demo: AI Receptionist ── */
function ReceptionistDemo() {
  const [started, setStarted] = useState(false);

  const messages = [
    { from: "caller", text: "Hi, I need someone to look at my AC unit — it stopped working this morning." },
    { from: "ai", text: "I'm sorry to hear that! We can absolutely help. Is this for a residential or commercial property?" },
    { from: "caller", text: "Residential. It's a 3-bedroom house in Austin." },
    { from: "ai", text: "Got it. We have a technician available today at 2 PM or 4 PM. Which works better for you?" },
    { from: "caller", text: "2 PM works great." },
    { from: "ai", text: "Perfect! I've booked you for 2 PM today. You'll receive a confirmation text shortly. Our tech will call 30 minutes before arrival. Is there anything else?" },
  ];

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="bg-zinc-900 px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#800020] flex items-center justify-center">
            <Phone className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-white text-sm font-semibold">Volaleads AI Receptionist</p>
            <p className="text-zinc-400 text-xs">Incoming call · answering...</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-medium">Live</span>
          </div>
        </div>

        {!started ? (
          <div className="p-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#800020]/10 flex items-center justify-center mb-4">
              <Phone className="h-7 w-7 text-[#800020]" />
            </div>
            <p className="text-zinc-600 text-sm mb-5">See how Volaleads handles a real customer call</p>
            <Button className="bg-[#800020] hover:bg-[#9a0028] text-white font-semibold" onClick={() => setStarted(true)}>
              Start Demo Call
            </Button>
          </div>
        ) : (
          <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.35 }}
                className={`flex ${msg.from === "ai" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                    msg.from === "ai"
                      ? "bg-zinc-100 text-zinc-800 rounded-tl-none"
                      : "bg-[#800020] text-white rounded-tr-none"
                  }`}
                >
                  {msg.from === "ai" && (
                    <span className="text-xs font-semibold text-[#800020] block mb-0.5">AI Receptionist</span>
                  )}
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Demo: Answer Machine Accuracy ── */
function AnswerMachineDemo() {
  const [transcribed, setTranscribed] = useState(false);

  return (
    <div className="max-w-lg mx-auto space-y-4">
      <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Mic className="h-4 w-4 text-[#800020]" />
            <span className="text-sm font-semibold text-zinc-700">Voicemail · (512) 555-0198</span>
          </div>
          <span className="text-xs text-zinc-400">0:47</span>
        </div>
        {/* Fake waveform */}
        <div className="h-10 bg-zinc-50 rounded-lg flex items-center px-3 gap-[2px] mb-4 overflow-hidden">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="w-1 bg-zinc-300 rounded-full flex-shrink-0"
              style={{ height: `${[6,14,22,18,10,26,30,20,12,8,24,28,16,10,20,14,18,26,30,8,12,22,18,16,24,10,28,20,14,8,18,26,22,12,16,28,10,20,14,24,18,8,30,22,16,12,20,10][i] || 8}px` }}
            />
          ))}
        </div>
        <Button
          className="w-full bg-[#800020] hover:bg-[#9a0028] text-white font-semibold"
          onClick={() => setTranscribed(true)}
        >
          <Mic className="mr-2 h-4 w-4" />
          Transcribe Voicemail
        </Button>
      </div>

      {transcribed && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-[#800020]/40 rounded-2xl p-5 shadow-lg shadow-[#800020]/5"
        >
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="h-4 w-4 text-[#800020]" />
            <span className="text-xs font-bold text-[#800020] uppercase tracking-widest">Transcribed</span>
          </div>
          <p className="text-zinc-700 text-sm leading-relaxed mb-4">
            &ldquo;Hi, this is Marcus calling from Oak Hills. I&apos;ve got a water heater that&apos;s been leaking for about two days now. Not a huge emergency but I&apos;d love to get someone out this week if possible. Can you call me back at 512-555-0198? Thanks a lot.&rdquo;
          </p>
          <div className="border-t border-zinc-100 pt-3 space-y-1.5">
            {[
              ["Caller", "Marcus, Oak Hills"],
              ["Issue", "Leaking water heater"],
              ["Urgency", "Non-emergency, this week"],
              ["Callback", "(512) 555-0198"],
            ].map(([label, val]) => (
              <div key={label} className="flex gap-3 text-xs">
                <span className="font-semibold text-zinc-500 w-20 flex-shrink-0">{label}:</span>
                <span className="text-zinc-700">{val}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 p-2.5 bg-[#800020]/5 rounded-lg text-xs text-zinc-600">
            <CheckCircle2 className="inline h-3.5 w-3.5 text-[#800020] mr-1.5" />
            Auto-response sent — lead captured and routed to your dashboard.
          </div>
        </motion.div>
      )}
    </div>
  );
}

/* ── Demo: Smart Invoice System ── */
function InvoiceDemo() {
  const [created, setCreated] = useState(false);

  return (
    <div className="max-w-lg mx-auto space-y-4">
      <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
        <h3 className="font-semibold text-zinc-900 mb-4 text-sm">Job Completed — Create Invoice</h3>
        <div className="space-y-3 mb-5">
          {[
            ["Customer", "Sarah T. · (737) 555-0142"],
            ["Job Type", "HVAC Annual Tune-Up"],
            ["Date", "Today · 2:00 PM"],
            ["Labor + Parts", "$185.00"],
          ].map(([label, val]) => (
            <div key={label} className="flex justify-between text-sm border-b border-zinc-100 pb-2 last:border-0">
              <span className="text-zinc-500">{label}</span>
              <span className="font-medium text-zinc-800">{val}</span>
            </div>
          ))}
        </div>
        <Button
          className="w-full bg-[#800020] hover:bg-[#9a0028] text-white font-semibold"
          onClick={() => setCreated(true)}
        >
          <FileText className="mr-2 h-4 w-4" />
          Generate &amp; Send Invoice
        </Button>
      </div>

      {created && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-[#800020]/40 rounded-2xl p-5 shadow-lg shadow-[#800020]/5"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#800020]" />
              <span className="text-xs font-bold text-[#800020] uppercase tracking-widest">Invoice Sent</span>
            </div>
            <span className="text-xs text-zinc-400">Delivered in 0.8s</span>
          </div>
          <div className="border border-zinc-100 rounded-xl p-4 bg-zinc-50">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-bold text-zinc-900">INV-2024-0847</p>
                <p className="text-xs text-zinc-400">Due in 7 days</p>
              </div>
              <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">Pending</span>
            </div>
            <div className="space-y-1 text-sm mb-3">
              <div className="flex justify-between"><span className="text-zinc-500">HVAC Tune-Up</span><span>$145.00</span></div>
              <div className="flex justify-between"><span className="text-zinc-500">Filter replacement</span><span>$40.00</span></div>
            </div>
            <div className="border-t border-zinc-200 pt-2 flex justify-between font-bold text-zinc-900">
              <span>Total</span>
              <span>$185.00</span>
            </div>
          </div>
          <p className="mt-3 text-xs text-zinc-500 text-center">
            Payment link sent to (737) 555-0142 via text &amp; email
          </p>
        </motion.div>
      )}
    </div>
  );
}

/* ── Service sections config ── */
const sections = [
  {
    id: "instant-quote",
    icon: Zap,
    label: "Instant Quote Generator",
    tag: "Win First",
    headline: "Get a Professional Quote Out in Under 2 Minutes",
    description:
      "Be the first contractor to respond and you win the job. Try our quote generator below — enter a few details and see exactly what your customer would receive.",
    Demo: QuoteDemo,
  },
  {
    id: "ai-receptionist",
    icon: Phone,
    label: "AI Receptionist",
    tag: "Never Miss a Call",
    headline: "Your Business Answers Every Call, 24/7",
    description:
      "No missed calls. No lost leads. Your AI receptionist qualifies callers, books appointments, and handles inquiries while you're on the job.",
    Demo: ReceptionistDemo,
  },
  {
    id: "answer-machine",
    icon: Mic,
    label: "Answer Machine Accuracy",
    tag: "Zero Missed Messages",
    headline: "Every Voicemail Becomes a Followed-Up Lead",
    description:
      "AI listens, transcribes, and extracts key lead info from every voicemail — then routes it to you instantly. Try the transcription demo below.",
    Demo: AnswerMachineDemo,
  },
  {
    id: "smart-invoice",
    icon: FileText,
    label: "Smart Invoice System",
    tag: "Get Paid Faster",
    headline: "Send Invoices the Second the Job Is Done",
    description:
      "Automated invoicing that sends, follows up, and tracks payments. Stop chasing money and get paid the moment you walk off the job site.",
    Demo: InvoiceDemo,
  },
];

export default function ServicesPagesPage() {
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
            <Link href="/#services" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">
              Services
            </Link>
            <Link href="/#how-it-works" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">
              How It Works
            </Link>
            <Link href="/contact" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">
              Contact
            </Link>
            <Button asChild className="bg-[#800020] hover:bg-[#9a0028] text-white font-semibold px-6">
              <Link href="/builder">Book Demo</Link>
            </Button>
          </nav>
          <Button asChild size="sm" className="md:hidden bg-[#800020] hover:bg-[#9a0028] text-white font-semibold">
            <Link href="/builder">Demo</Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-44 md:pb-16 bg-zinc-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(circle, #800020 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#800020]/50 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-[1.1] mb-4">
              Try Our Tools — <span className="text-[#cc2244]">Free Demos</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-8">
              See exactly how each Volaleads tool works before you commit to anything.
            </p>
            {/* Quick-jump nav */}
            <div className="flex flex-wrap justify-center gap-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-4 py-1.5 rounded-full border border-zinc-700 text-zinc-400 text-sm hover:border-[#800020] hover:text-[#cc2244] transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Demo Sections */}
      {sections.map((section, i) => {
        const Icon = section.icon;
        const Demo = section.Demo;
        const isEven = i % 2 === 0;

        return (
          <section
            key={section.id}
            id={section.id}
            className={`py-24 md:py-32 ${isEven ? "bg-white" : "bg-zinc-50"} scroll-mt-24`}
          >
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
              >
                {/* Section header */}
                <div className="mb-12 text-center">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#800020]/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[#800020]" />
                    </div>
                    <span className="text-xs font-bold text-[#800020] uppercase tracking-widest">{section.tag}</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-zinc-900 mb-3">
                    {section.headline}
                  </h2>
                  <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed">{section.description}</p>
                </div>

                {/* Interactive demo */}
                <Demo />

                {/* CTA */}
                <div className="mt-10 text-center">
                  <p className="text-sm text-zinc-400 mb-3">Ready to use this for real?</p>
                  <Button asChild className="bg-[#800020] hover:bg-[#9a0028] text-white font-semibold px-8">
                    <Link href="/builder">
                      Get Full Access Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

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
