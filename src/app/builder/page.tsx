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

interface FormData {
  businessName: string;
  businessType: string;
  location: string;
  phone: string;
  email: string;
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
    location: "",
    phone: "",
    email: "",
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
          type: formData.businessType,
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

  const canProceedStep1 = formData.businessName && formData.businessType && formData.location;
  const canProceedStep2 = true; // Optional fields

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold">V</span>
            </div>
            <span className="font-serif text-xl font-bold text-foreground">VolaLeads</span>
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
          {/* Step 1: Business Info */}
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
                    We&apos;ll use this information to create a tailored landing page.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      placeholder="e.g., Johnson Plumbing"
                      value={formData.businessName}
                      onChange={(e) => updateFormData("businessName", e.target.value)}
                    />
                  </div>

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

                  <div className="space-y-2">
                    <Label htmlFor="location">Service Area *</Label>
                    <Input
                      id="location"
                      placeholder="e.g., Austin, TX"
                      value={formData.location}
                      onChange={(e) => updateFormData("location", e.target.value)}
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button
                      onClick={() => setStep(2)}
                      disabled={!canProceedStep1}
                    >
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 2: Additional Details */}
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
                  <CardTitle className="font-serif text-2xl">Additional Details</CardTitle>
                  <CardDescription>
                    Help us make your landing page even more effective. (Optional)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
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

          {/* Step 3: Preview */}
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
                          {(generatedContent.services as Array<{title: string; description: string}>).map((service, i) => (
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
