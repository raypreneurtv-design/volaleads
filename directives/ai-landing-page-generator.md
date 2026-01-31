# Directive: AI Landing Page Generator Build

## Goal
Build a production-ready SaaS application that generates custom landing pages with programmatic videos (Remotion) and AI chatbots in 60 seconds. Target: local businesses, consultants, agencies at $49-299/month.

## Inputs
- Next.js 14 + TypeScript as framework
- Tailwind CSS + shadcn/ui for styling
- Remotion for video generation
- Claude API for content generation
- n8n webhook for chatbot backend
- Stripe for payments
- Supabase/Prisma for database

## Execution

### Phase 1: Foundation
1. Run `npx create-next-app@14` with TypeScript, Tailwind, App Router
2. Install dependencies: `npm install @remotion/player remotion react-hook-form zod next-auth prisma stripe sonner lucide-react`
3. Run `npx shadcn@latest init` and add components
4. Set up folder structure per implementation plan

### Phase 2: Pages & Components
Build in order:
1. Layout (Header, Footer, SEO)
2. Landing page sections
3. Builder with form + preview
4. Remotion video player
5. Chatbot widget
6. Auth pages
7. Dashboard
8. Pricing/Templates

### Phase 3: Backend
1. Set up Prisma schema
2. Create API routes
3. Integrate Claude API
4. Set up n8n webhook
5. Configure Stripe

## Outputs
- Fully functional Next.js application
- ~77 files, ~10,000 lines of code
- Production-ready with SEO, accessibility, performance

## Edge Cases
- **Remotion fails to load**: Show static fallback image with business name
- **Claude API rate limit**: Queue requests, show "generating..." state
- **Chat webhook timeout**: Retry 3x, then show error message
- **Stripe webhook failure**: Log and retry, email alert
- **Database connection issues**: Show maintenance page

## Environment Variables Required
```
ANTHROPIC_API_KEY
N8N_WEBHOOK_URL
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
DATABASE_URL
NEXTAUTH_SECRET
NEXTAUTH_URL
GOOGLE_CLIENT_ID (optional)
GOOGLE_CLIENT_SECRET (optional)
NEXT_PUBLIC_APP_URL
```

## Success Criteria
- [ ] Lighthouse SEO score 90+
- [ ] All forms validate and submit correctly
- [ ] Video player loads without errors
- [ ] Chatbot sends/receives messages
- [ ] Auth flow works end-to-end
- [ ] Site can be created and published
- [ ] Mobile responsive on all pages
- [ ] No console errors in production
