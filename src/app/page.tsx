"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Zap, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Generation",
    description: "Claude AI crafts compelling copy and designs tailored to your business in seconds.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Go from idea to published landing page in under 60 seconds.",
  },
  {
    icon: Target,
    title: "Built for Home Services",
    description: "Optimized templates for plumbers, electricians, HVAC, landscapers, and more.",
  },
];

const benefits = [
  "Professional designs that convert",
  "Mobile-responsive layouts",
  "SEO-optimized content",
  "Integrated lead capture forms",
  "Custom domain support",
  "Analytics dashboard",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="VolaLeads Logo"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <span className="font-serif text-2xl font-bold text-foreground">VolaLeads</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/login" className="text-muted-foreground hover:text-foreground transition-colors">
              Sign In
            </Link>
            <Button asChild>
              <Link href="/builder">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-maroon-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-maroon-100/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Create Stunning Landing Pages{" "}
                <span className="text-primary">in Seconds</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                VolaLeads uses AI to generate beautiful, high-converting landing pages
                for home service businesses. No design skills required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link href="/builder">
                    Start Building Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8">
                  <Link href="#demo">Watch Demo</Link>
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                No credit card required. Generate your first page free.
              </p>
            </motion.div>

            {/* Logo Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Elegant frame */}
                <div className="absolute inset-0 border-2 border-maroon-600/30 rounded-2xl transform rotate-3" />
                <div className="absolute inset-0 border-2 border-gold-400/20 rounded-2xl transform -rotate-3" />

                {/* Main card with burgundy aesthetic */}
                <div className="relative bg-gradient-to-br from-maroon-50/80 via-background to-gold-50/50 rounded-2xl p-6 h-full flex flex-col items-center justify-center border border-maroon-200/50 shadow-2xl shadow-maroon-900/10">
                  <div className="relative w-64 h-64 mb-4 animate-float">
                    <Image
                      src="/logo.jpg"
                      alt="VolaLeads - Elegant Lead Generation"
                      fill
                      className="object-contain drop-shadow-xl"
                      priority
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-maroon-800 mb-2">Elegant by Design</h3>
                  <p className="text-maroon-600/80 text-center">
                    Classic sophistication meets modern AI technology
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 border border-maroon-300/30 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border border-gold-400/30 rounded-full" />
                  <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 bg-gold-400/20 rounded-full blur-sm" />
                  <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 bg-maroon-400/20 rounded-full blur-sm" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-gradient-to-br from-maroon-900/90 via-maroon-800/85 to-maroon-900/90 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gold-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-maroon-600 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose VolaLeads?
            </h2>
            <p className="text-lg text-maroon-100/90 max-w-2xl mx-auto">
              We combine the elegance of professional design with the power of AI
              to help you capture more leads.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all border-white/20 hover:border-gold-400/50 hover:shadow-xl hover:shadow-gold-400/10">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gold-400/20 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-gold-300" />
                    </div>
                    <CardTitle className="font-serif text-xl text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-maroon-100/80">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-maroon-50/30 to-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-maroon-100/20 via-transparent to-transparent opacity-60" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Everything You Need to{" "}
                <span className="text-maroon-700">Convert Visitors</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our AI understands what makes home service businesses successful online.
                Every page is optimized for conversions.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-maroon-100/30 hover:border-maroon-200 transition-colors"
                  >
                    <CheckCircle2 className="h-5 w-5 text-maroon-600 flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-maroon-800 via-maroon-700 to-maroon-900 rounded-2xl border border-maroon-600/30 flex items-center justify-center shadow-2xl shadow-maroon-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
                <div className="text-center p-8 relative z-10">
                  <div className="w-20 h-20 rounded-full bg-gold-400/20 flex items-center justify-center mx-auto mb-4 border border-gold-400/30">
                    <Zap className="h-10 w-10 text-gold-400" />
                  </div>
                  <p className="font-serif text-xl text-white">Live Preview Demo</p>
                  <p className="text-maroon-200 mt-2">Coming soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-950 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-maroon-600/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-maroon-100/90 mb-8 max-w-2xl mx-auto">
              Join thousands of home service professionals who trust VolaLeads
              to generate leads and grow their business.
            </p>
            <Button
              size="lg"
              asChild
              className="text-lg px-8 bg-gold-500 hover:bg-gold-400 text-maroon-950 font-semibold shadow-lg shadow-gold-500/20 hover:shadow-gold-400/30 transition-all"
            >
              <Link href="/builder">
                Create Your First Page
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-maroon-950 border-t border-maroon-800/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="VolaLeads Logo"
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
              <span className="font-serif text-xl font-bold text-white">VolaLeads</span>
            </div>
            <p className="text-maroon-300 text-sm">
              &copy; {new Date().getFullYear()} VolaLeads. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-maroon-300 hover:text-gold-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-maroon-300 hover:text-gold-400 transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-sm text-maroon-300 hover:text-gold-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
