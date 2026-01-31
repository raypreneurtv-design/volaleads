"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Zap, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

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
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-xl">V</span>
            </div>
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
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
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

            {/* Tango Dancer Illustration Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Elegant frame */}
                <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl transform rotate-3" />
                <div className="absolute inset-0 border-2 border-secondary/20 rounded-2xl transform -rotate-3" />

                {/* Main card with tango aesthetic */}
                <div className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl p-8 h-full flex flex-col items-center justify-center border border-border shadow-xl">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 animate-float">
                    <span className="text-6xl">💃</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Elegant by Design</h3>
                  <p className="text-muted-foreground text-center">
                    Classic sophistication meets modern AI technology
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 border border-primary/20 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border border-secondary/20 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose VolaLeads?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                <Card className="h-full bg-card hover:shadow-lg transition-shadow border-border">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
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
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Everything You Need to{" "}
                <span className="text-primary">Convert Visitors</span>
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
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
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
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-10 w-10 text-primary" />
                  </div>
                  <p className="font-serif text-xl text-foreground">Live Preview Demo</p>
                  <p className="text-muted-foreground mt-2">Coming soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of home service professionals who trust VolaLeads
              to generate leads and grow their business.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg px-8"
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
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold">V</span>
              </div>
              <span className="font-serif text-xl font-bold text-foreground">VolaLeads</span>
            </div>
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} VolaLeads. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
