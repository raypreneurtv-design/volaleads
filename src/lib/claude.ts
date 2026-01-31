import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export interface BusinessInfo {
  name: string;
  type: string; // e.g., "plumber", "electrician", "hvac", "landscaper"
  location: string;
  phone?: string;
  email?: string;
  services?: string[];
  tagline?: string;
}

export interface GeneratedContent {
  headline: string;
  subheadline: string;
  heroDescription: string;
  services: Array<{
    title: string;
    description: string;
  }>;
  aboutText: string;
  ctaText: string;
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
  }>;
  seoTitle: string;
  seoDescription: string;
}

export async function generateLandingPageContent(
  businessInfo: BusinessInfo
): Promise<GeneratedContent> {
  const prompt = `You are an expert copywriter specializing in home service businesses. Generate compelling landing page content for the following business:

Business Name: ${businessInfo.name}
Business Type: ${businessInfo.type}
Location: ${businessInfo.location}
${businessInfo.phone ? `Phone: ${businessInfo.phone}` : ""}
${businessInfo.email ? `Email: ${businessInfo.email}` : ""}
${businessInfo.services?.length ? `Services: ${businessInfo.services.join(", ")}` : ""}
${businessInfo.tagline ? `Tagline: ${businessInfo.tagline}` : ""}

Generate the following content in JSON format:
{
  "headline": "A powerful, attention-grabbing headline (max 10 words)",
  "subheadline": "A supporting subheadline that expands on the headline (max 20 words)",
  "heroDescription": "A compelling paragraph for the hero section (2-3 sentences)",
  "services": [
    {
      "title": "Service name",
      "description": "Brief description of this service (1-2 sentences)"
    }
  ],
  "aboutText": "About the company paragraph (3-4 sentences, emphasize trust, experience, quality)",
  "ctaText": "Call-to-action button text (3-5 words)",
  "testimonials": [
    {
      "quote": "A realistic testimonial quote",
      "author": "Customer Name",
      "role": "Homeowner in [City]"
    }
  ],
  "seoTitle": "SEO-optimized page title (max 60 characters)",
  "seoDescription": "SEO meta description (max 160 characters)"
}

Generate 3-5 services based on the business type. Generate 3 testimonials. Make the content professional, trustworthy, and conversion-focused. Use local SEO best practices.`;

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2000,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const responseText = message.content[0].type === "text" ? message.content[0].text : "";

  // Extract JSON from response
  const jsonMatch = responseText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("Failed to parse generated content");
  }

  return JSON.parse(jsonMatch[0]) as GeneratedContent;
}

export async function refineContent(
  content: string,
  instruction: string
): Promise<string> {
  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1000,
    messages: [
      {
        role: "user",
        content: `Refine the following content based on this instruction: "${instruction}"\n\nOriginal content:\n${content}\n\nProvide only the refined content, no explanations.`,
      },
    ],
  });

  return message.content[0].type === "text" ? message.content[0].text : content;
}

export default anthropic;
