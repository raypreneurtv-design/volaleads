# Implementation Plan: Ultimate AI Landing Page Generator

## Vision
Build the most advanced AI landing page generator that surpasses landingsite.com and competitors by combining:
- **60-second generation** with Claude AI
- **Programmatic video creation** with Remotion (unique differentiator)
- **AI chatbot integration** for lead capture
- **One-click publishing** with custom domains

## Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Framework | Next.js 14 (App Router) | SSR, API routes, performance |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS + shadcn/ui | Rapid UI development |
| Video | Remotion | Programmatic video generation |
| AI | Claude API (Anthropic) | Content generation |
| Chatbot | n8n webhook | Conversation backend |
| Database | Supabase (PostgreSQL) | Data persistence |
| ORM | Prisma | Database queries |
| Auth | NextAuth.js | Authentication |
| Payments | Stripe | Subscriptions |
| Hosting | Vercel | Deployment |
| Storage | Supabase Storage | Assets, videos |

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │ Landing │  │ Builder │  │Dashboard│  │Templates│        │
│  │  Page   │  │  Wizard │  │         │  │ Gallery │        │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘        │
│       │            │            │            │              │
│  ┌────┴────────────┴────────────┴────────────┴────┐        │
│  │              Shared Components                  │        │
│  │  (Header, Footer, ChatWidget, VideoPlayer)     │        │
│  └─────────────────────┬───────────────────────────┘        │
└────────────────────────┼────────────────────────────────────┘
                         │
┌────────────────────────┼────────────────────────────────────┐
│                    API Layer                                 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │ /api/   │  │ /api/   │  │ /api/   │  │ /api/   │        │
│  │generate │  │ sites   │  │ webhook │  │payments │        │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘        │
└───────┼───────────┼───────────┼───────────┼─────────────────┘
        │           │           │           │
┌───────┼───────────┼───────────┼───────────┼─────────────────┐
│       ▼           ▼           ▼           ▼                 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │ Claude  │  │Supabase │  │   n8n   │  │ Stripe  │        │
│  │   API   │  │   DB    │  │ Webhook │  │   API   │        │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘        │
│                    External Services                         │
└─────────────────────────────────────────────────────────────┘
```

## Folder Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── forgot-password/page.tsx
│   ├── (dashboard)/
│   │   ├── dashboard/page.tsx
│   │   ├── sites/[id]/page.tsx
│   │   ├── sites/[id]/edit/page.tsx
│   │   ├── analytics/page.tsx
│   │   └── settings/page.tsx
│   ├── (marketing)/
│   │   ├── page.tsx (landing)
│   │   ├── pricing/page.tsx
│   │   ├── templates/page.tsx
│   │   └── features/page.tsx
│   ├── builder/
│   │   └── page.tsx
│   ├── preview/[id]/
│   │   └── page.tsx
│   ├── api/
│   │   ├── generate/route.ts
│   │   ├── sites/route.ts
│   │   ├── sites/[id]/route.ts
│   │   ├── chat/route.ts
│   │   ├── video/render/route.ts
│   │   ├── auth/[...nextauth]/route.ts
│   │   └── webhooks/stripe/route.ts
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/ (shadcn components)
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Sidebar.tsx
│   ├── builder/
│   │   ├── BuilderWizard.tsx
│   │   ├── BusinessInfoForm.tsx
│   │   ├── StyleSelector.tsx
│   │   ├── PreviewPanel.tsx
│   │   └── SectionEditor.tsx
│   ├── landing/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PricingSection.tsx
│   │   └── CTASection.tsx
│   ├── video/
│   │   ├── VideoPlayer.tsx
│   │   ├── VideoComposition.tsx
│   │   └── templates/
│   │       ├── BusinessIntro.tsx
│   │       ├── ProductShowcase.tsx
│   │       └── Testimonial.tsx
│   ├── chat/
│   │   ├── ChatWidget.tsx
│   │   ├── ChatMessage.tsx
│   │   └── ChatInput.tsx
│   └── shared/
│       ├── LoadingSpinner.tsx
│       ├── ErrorBoundary.tsx
│       └── SEOHead.tsx
├── lib/
│   ├── prisma.ts
│   ├── supabase.ts
│   ├── stripe.ts
│   ├── claude.ts
│   ├── auth.ts
│   └── utils.ts
├── hooks/
│   ├── useChat.ts
│   ├── useSite.ts
│   ├── useVideo.ts
│   └── useSubscription.ts
├── types/
│   ├── site.ts
│   ├── user.ts
│   └── video.ts
├── remotion/
│   ├── Root.tsx
│   ├── compositions/
│   │   ├── BusinessIntro.tsx
│   │   ├── ProductShowcase.tsx
│   │   └── Testimonial.tsx
│   └── components/
│       ├── AnimatedText.tsx
│       ├── LogoReveal.tsx
│       └── BackgroundVideo.tsx
└── styles/
    └── themes/
        ├── modern.ts
        ├── classic.ts
        └── bold.ts
```

## Database Schema

```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  image         String?
  password      String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  subscription  Subscription?
  sites         Site[]
  conversations Conversation[]
}

model Subscription {
  id                 String   @id @default(cuid())
  userId             String   @unique
  user               User     @relation(fields: [userId], references: [id])
  stripeCustomerId   String   @unique
  stripePriceId      String
  stripeSubscriptionId String @unique
  status             String
  currentPeriodEnd   DateTime
  createdAt          DateTime @default(now())
  updatedAt          DateTime @updatedAt
}

model Site {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])

  // Business Info
  businessName    String
  businessType    String
  description     String
  tagline         String?
  phone           String?
  email           String?
  address         String?

  // Content (AI Generated)
  heroTitle       String?
  heroSubtitle    String?
  features        Json?
  testimonials    Json?
  aboutText       String?
  ctaText         String?

  // Styling
  theme           String   @default("modern")
  primaryColor    String   @default("#3B82F6")
  secondaryColor  String   @default("#1E40AF")
  fontFamily      String   @default("Inter")

  // Video
  videoEnabled    Boolean  @default(true)
  videoTemplate   String?
  videoUrl        String?

  // Chatbot
  chatEnabled     Boolean  @default(true)
  chatGreeting    String?
  chatContext     String?

  // Publishing
  subdomain       String?  @unique
  customDomain    String?  @unique
  published       Boolean  @default(false)
  publishedAt     DateTime?

  // Meta
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  conversations   Conversation[]
  analytics       Analytics[]
}

model Conversation {
  id        String    @id @default(cuid())
  siteId    String
  site      Site      @relation(fields: [siteId], references: [id])
  visitorId String?
  userId    String?
  user      User?     @relation(fields: [userId], references: [id])
  messages  Message[]
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}

model Message {
  id             String       @id @default(cuid())
  conversationId String
  conversation   Conversation @relation(fields: [conversationId], references: [id])
  role           String       // "user" | "assistant"
  content        String
  createdAt      DateTime     @default(now())
}

model Analytics {
  id        String   @id @default(cuid())
  siteId    String
  site      Site     @relation(fields: [siteId], references: [id])
  event     String   // "pageview" | "click" | "chat_start" | "video_play"
  data      Json?
  visitorId String?
  createdAt DateTime @default(now())
}

model Template {
  id          String   @id @default(cuid())
  name        String
  description String
  thumbnail   String
  category    String
  config      Json     // Default site configuration
  premium     Boolean  @default(false)
  createdAt   DateTime @default(now())
}
```

## Competitive Advantages Over landingsite.com

| Feature | landingsite.com | Our Solution |
|---------|-----------------|--------------|
| Generation Time | ~2-5 min | **60 seconds** |
| Video Content | None | **AI-generated Remotion videos** |
| AI Chatbot | Basic or none | **Context-aware Claude chatbot** |
| Customization | Limited | **Full code access + visual editor** |
| Video Templates | None | **5+ animated templates** |
| Real-time Preview | Delayed | **Instant preview** |
| Multi-language | Limited | **Claude-powered translation** |
| Lead Capture | Forms only | **Chat + Forms + Video CTA** |

## Phases

### Phase 1: Foundation (Days 1-2)
- [x] Project setup with Next.js 14
- [ ] Tailwind + shadcn/ui configuration
- [ ] Remotion integration
- [ ] Database schema + Prisma setup
- [ ] Environment configuration

### Phase 2: Core UI (Days 3-5)
- [ ] Marketing landing page
- [ ] Builder wizard (multi-step form)
- [ ] Real-time preview panel
- [ ] Dashboard layout
- [ ] Authentication pages

### Phase 3: AI Integration (Days 6-8)
- [ ] Claude API for content generation
- [ ] n8n chatbot webhook
- [ ] Chat widget component
- [ ] Content streaming

### Phase 4: Video System (Days 9-11)
- [ ] Remotion compositions
- [ ] Video player component
- [ ] Server-side rendering
- [ ] Video template library

### Phase 5: Backend & Publishing (Days 12-14)
- [ ] Site CRUD API
- [ ] Subdomain routing
- [ ] Custom domain support
- [ ] Stripe integration

### Phase 6: Polish & Launch (Days 15-17)
- [ ] Analytics dashboard
- [ ] SEO optimization
- [ ] Performance tuning
- [ ] Testing & bug fixes
- [ ] Documentation

## Success Metrics
- Lighthouse Performance: 90+
- Lighthouse SEO: 95+
- Time to First Byte: <200ms
- Generation Time: <60 seconds
- Video Render Time: <30 seconds
- Chat Response Time: <2 seconds

## Environment Variables
```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="LandingForge"

# Database
DATABASE_URL=postgresql://...

# Auth
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# AI
ANTHROPIC_API_KEY=

# Chatbot
N8N_WEBHOOK_URL=

# Payments
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# Storage
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```
