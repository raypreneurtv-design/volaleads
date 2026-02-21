"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

function VolaLogo() {
  return (
    <svg width="32" height="32" viewBox="-4 -4 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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

const businessTypes = [
  { value: "plumber", label: "Plumber" },
  { value: "electrician", label: "Electrician" },
  { value: "hvac", label: "HVAC" },
  { value: "landscaper", label: "Landscaper" },
  { value: "roofer", label: "Roofer" },
  { value: "painter", label: "Painter" },
  { value: "cleaner", label: "Cleaning Service" },
  { value: "handyman", label: "Handyman" },
  { value: "pest-control", label: "Pest Control" },
  { value: "pool-service", label: "Pool Service" },
  { value: "garage-door", label: "Garage Door" },
  { value: "locksmith", label: "Locksmith" },
  { value: "other", label: "Other" },
];

const serviceInterests = [
  { value: "instant-quote", label: "Instant Quote Generator" },
  { value: "ai-receptionist", label: "AI Receptionist" },
  { value: "answer-machine", label: "Answer Machine Accuracy" },
  { value: "smart-invoice", label: "Smart Invoice System" },
  { value: "all", label: "All Services (Full Suite)" },
  { value: "other", label: "Other / Not Sure Yet" },
];

const companySizes = [
  { value: "1-5", label: "1–5 people (just me or a small crew)" },
  { value: "6-20", label: "6–20 people" },
  { value: "21-50", label: "21–50 people" },
  { value: "51-100", label: "51–100 people" },
  { value: "100+", label: "100+ people" },
];

const revenueRanges = [
  { value: "under-100k", label: "Under $100,000 / year" },
  { value: "100k-500k", label: "$100,000 – $500,000 / year" },
  { value: "500k-1m", label: "$500,000 – $1,000,000 / year" },
  { value: "1m-5m", label: "$1,000,000 – $5,000,000 / year" },
  { value: "5m+", label: "$5,000,000+ / year" },
];

interface FormData {
  businessName: string;
  businessType: string;
  otherBusinessType: string;
  location: string;
  serviceInterest: string;
  otherServiceInterest: string;
  phone: string;
  email: string;
  companySize: string;
  estimatedRevenue: string;
  services: string;
  tagline: string;
}

export default function BuilderPage() {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<Record<string, unknown> | null>(null);
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    businessType: "",
    otherBusinessType: "",
    location: "",
    serviceInterest: "",
    otherServiceInterest: "",
    phone: "",
    email: "",
    companySize: "",
    estimatedRevenue: "",
    services: "",
    tagline: "",
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.businessName,
          type: formData.businessType === "other" ? formData.otherBusinessType : formData.businessType,
          location: formData.location,
          phone: formData.phone,
          email: formData.email,
          services: formData.services.split(",").map((s) => s.trim()).filter(Boolean),
          tagline: formData.tagline,
        }),
      });

      if (!response.ok) throw new Error("Generation failed");

      const data = await response.json();
      setGeneratedContent(data);
      setStep(3);
    } catch (error) {
      console.error("Generation error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const canProceedStep1 =
    formData.businessName.trim() !== "" &&
    formData.businessType !== "" &&
    formData.location.trim() !== "" &&
    formData.serviceInterest !== "" &&
    (formData.businessType !== "other" || formData.otherBusinessType.trim() !== "") &&
    (formData.serviceInterest !== "other" || formData.otherServiceInterest.trim() !== "");

  const canProceedStep2 =
    formData.companySize !== "" &&
    formData.estimatedRevenue !== "";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <VolaLogo />
            <span className="font-serif text-xl font-bold text-foreground">Volaleads</span>
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Step {step} of 3</span>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-muted">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: "33.33%" }}
          animate={{ width: `${(step / 3) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <main className="container mx-auto px-6 py-12 max-w-2xl">
        <AnimatePresence mode="wait">

          {/* ── Step 1: Business Info ── */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Tell us about your business</CardTitle>
                  <CardDescription>
                    We&apos;ll use this to tailor your Volaleads experience.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">

                  {/* Business Name */}
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      placeholder="e.g., Johnson Plumbing"
                      value={formData.businessName}
                      onChange={(e) => updateFormData("businessName", e.target.value)}
                    />
                  </div>

                  {/* Business Type */}
                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type *</Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) => updateFormData("businessType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Other business type — shown only when "Other" is selected */}
                  <AnimatePresence>
                    {formData.businessType === "other" && (
                      <motion.div
                        key="otherBusinessType"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2 overflow-hidden"
                      >
                        <Label htmlFor="otherBusinessType">
                          Please describe your business type *
                        </Label>
                        <Input
                          id="otherBusinessType"
                          placeholder="e.g., Window cleaning, Appliance repair…"
                          value={formData.otherBusinessType}
                          onChange={(e) => updateFormData("otherBusinessType", e.target.value)}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Service Area */}
                  <div className="space-y-2">
                    <Label htmlFor="location">Service Area *</Label>
                    <Input
                      id="location"
                      placeholder="e.g., Austin, TX"
                      value={formData.location}
                      onChange={(e) => updateFormData("location", e.target.value)}
                    />
                  </div>

                  {/* Service Interest */}
                  <div className="space-y-2">
                    <Label htmlFor="serviceInterest">What service are you looking for? *</Label>
                    <Select
                      value={formData.serviceInterest}
                      onValueChange={(value) => updateFormData("serviceInterest", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Volaleads service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceInterests.map((s) => (
                          <SelectItem key={s.value} value={s.value}>
                            {s.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Other service interest */}
                  <AnimatePresence>
                    {formData.serviceInterest === "other" && (
                      <motion.div
                        key="otherServiceInterest"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2 overflow-hidden"
                      >
                        <Label htmlFor="otherServiceInterest">
                          Tell us more about what you need *
                        </Label>
                        <Input
                          id="otherServiceInterest"
                          placeholder="e.g., Automated follow-up texts, custom CRM integration…"
                          value={formData.otherServiceInterest}
                          onChange={(e) => updateFormData("otherServiceInterest", e.target.value)}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-end pt-4">
                    <Button
                      onClick={() => {
                        if (canProceedStep1) {
                          window.location.href = "https://calendly.com/rayndaula/free-discovery-call";
                        }
                      }}
                      disabled={!canProceedStep1}
                    >
                      Continue to Book a Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* ── Step 2: Business Size & Details ── */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">About your business</CardTitle>
                  <CardDescription>
                    Help us understand the size and scale of your operation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">

                  {/* Company size */}
                  <div className="space-y-2">
                    <Label htmlFor="companySize">How many people are in your company? *</Label>
                    <Select
                      value={formData.companySize}
                      onValueChange={(value) => updateFormData("companySize", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select headcount range" />
                      </SelectTrigger>
                      <SelectContent>
                        {companySizes.map((s) => (
                          <SelectItem key={s.value} value={s.value}>
                            {s.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Estimated revenue */}
                  <div className="space-y-2">
                    <Label htmlFor="estimatedRevenue">What is your estimated annual revenue? *</Label>
                    <Select
                      value={formData.estimatedRevenue}
                      onValueChange={(value) => updateFormData("estimatedRevenue", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select revenue range" />
                      </SelectTrigger>
                      <SelectContent>
                        {revenueRanges.map((r) => (
                          <SelectItem key={r.value} value={r.value}>
                            {r.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wide font-medium">
                      Optional — helps us personalize your demo
                    </p>
                  </div>

                  {/* Phone + Email */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="info@yourbusiness.com"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Services offered */}
                  <div className="space-y-2">
                    <Label htmlFor="services">Services Offered</Label>
                    <Textarea
                      id="services"
                      placeholder="e.g., Drain cleaning, Water heater installation, Emergency repairs"
                      value={formData.services}
                      onChange={(e) => updateFormData("services", e.target.value)}
                      rows={3}
                    />
                    <p className="text-xs text-muted-foreground">Separate services with commas</p>
                  </div>

                  {/* Tagline */}
                  <div className="space-y-2">
                    <Label htmlFor="tagline">Tagline or Slogan</Label>
                    <Input
                      id="tagline"
                      placeholder="e.g., Your trusted local plumber since 1995"
                      value={formData.tagline}
                      onChange={(e) => updateFormData("tagline", e.target.value)}
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button
                      onClick={handleGenerate}
                      disabled={!canProceedStep2 || isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Generate Landing Page
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* ── Step 3: Preview ── */}
          {step === 3 && generatedContent && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm font-medium">Generated Successfully!</span>
                  </div>
                  <CardTitle className="font-serif text-2xl">Your Landing Page Preview</CardTitle>
                  <CardDescription>
                    Review your AI-generated content below. You can edit it before publishing.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4 p-6 bg-muted/30 rounded-lg border">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Headline</p>
                      <p className="font-serif text-xl font-bold">{generatedContent.headline as string}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Subheadline</p>
                      <p className="text-muted-foreground">{generatedContent.subheadline as string}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Description</p>
                      <p>{generatedContent.heroDescription as string}</p>
                    </div>
                    {Array.isArray(generatedContent.services) && generatedContent.services.length > 0 && (
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Services</p>
                        <ul className="space-y-2">
                          {(generatedContent.services as Array<{ title: string; description: string }>).map((service, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <div>
                                <span className="font-medium">{service.title}</span>
                                <span className="text-muted-foreground"> - {service.description}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={() => setStep(2)}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Edit Details
                    </Button>
                    <Button>
                      Publish Landing Page
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}
