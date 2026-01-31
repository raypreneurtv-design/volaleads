import { NextRequest, NextResponse } from "next/server";
import { generateLandingPageContent, BusinessInfo } from "@/lib/claude";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const businessInfo: BusinessInfo = {
      name: body.name,
      type: body.type,
      location: body.location,
      phone: body.phone,
      email: body.email,
      services: body.services,
      tagline: body.tagline,
    };

    // Validate required fields
    if (!businessInfo.name || !businessInfo.type || !businessInfo.location) {
      return NextResponse.json(
        { error: "Missing required fields: name, type, and location are required" },
        { status: 400 }
      );
    }

    const content = await generateLandingPageContent(businessInfo);

    return NextResponse.json(content);
  } catch (error) {
    console.error("Generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}
