# Task Tracker: AI Landing Page Generator

## Current Sprint: Foundation Setup

### Active Tasks

#### Task 1: Project Initialization
- **Status**: In Progress
- **Priority**: Critical
- **Description**: Set up Next.js 14 with TypeScript, Tailwind, and App Router

**Subtasks**:
- [x] Create project with `npx create-next-app@14`
- [ ] Configure TypeScript strict mode
- [ ] Set up path aliases
- [ ] Install core dependencies
- [ ] Configure ESLint + Prettier

#### Task 2: UI Framework Setup
- **Status**: Pending
- **Priority**: High
- **Description**: Initialize shadcn/ui and configure Tailwind

**Subtasks**:
- [ ] Run `npx shadcn@latest init`
- [ ] Add essential components (button, input, card, dialog, etc.)
- [ ] Configure color themes
- [ ] Set up dark mode support
- [ ] Create base layout components

#### Task 3: Remotion Integration
- **Status**: Pending
- **Priority**: High
- **Description**: Set up Remotion for programmatic video generation

**Subtasks**:
- [ ] Install Remotion packages
- [ ] Configure Remotion with Next.js
- [ ] Create base video composition
- [ ] Build VideoPlayer component
- [ ] Set up server-side rendering

#### Task 4: Database Setup
- **Status**: Pending
- **Priority**: High
- **Description**: Configure Supabase + Prisma

**Subtasks**:
- [ ] Create Supabase project
- [ ] Initialize Prisma
- [ ] Define schema models
- [ ] Run initial migration
- [ ] Set up Prisma client

#### Task 5: Authentication
- **Status**: Pending
- **Priority**: Medium
- **Description**: Implement NextAuth.js

**Subtasks**:
- [ ] Install NextAuth
- [ ] Configure providers (credentials, Google)
- [ ] Create auth API routes
- [ ] Build login/register pages
- [ ] Add session management

---

## Backlog

### Phase 2: Core Features

#### Task 6: Marketing Landing Page
- **Priority**: High
- **Components needed**:
  - Hero section with video background
  - Features grid
  - Testimonials carousel
  - Pricing cards
  - CTA section
  - Footer

#### Task 7: Builder Wizard
- **Priority**: Critical
- **Components needed**:
  - Multi-step form
  - Business info collection
  - Style/theme selector
  - Content preview
  - Generation trigger

#### Task 8: Real-time Preview
- **Priority**: High
- **Features**:
  - Live preview panel
  - Device switching (desktop/tablet/mobile)
  - Theme switcher
  - Section reordering

#### Task 9: Dashboard
- **Priority**: Medium
- **Components needed**:
  - Site list with thumbnails
  - Analytics overview
  - Quick actions
  - Subscription status

### Phase 3: AI Integration

#### Task 10: Claude Content Generation
- **Priority**: Critical
- **Endpoints**:
  - POST /api/generate - Full site generation
  - POST /api/generate/section - Single section
  - POST /api/generate/refine - Content refinement

#### Task 11: Chatbot System
- **Priority**: High
- **Components**:
  - ChatWidget (floating button + panel)
  - Message bubbles
  - Typing indicator
  - n8n webhook integration

### Phase 4: Video System

#### Task 12: Video Compositions
- **Priority**: High
- **Templates**:
  - BusinessIntro - Logo reveal + tagline
  - ProductShowcase - Features animation
  - Testimonial - Quote animation
  - CTA - Call-to-action with motion

#### Task 13: Video Rendering
- **Priority**: Medium
- **Features**:
  - Server-side rendering API
  - Progress tracking
  - CDN storage
  - Thumbnail generation

### Phase 5: Publishing

#### Task 14: Site Publishing
- **Priority**: High
- **Features**:
  - Subdomain generation
  - Custom domain support
  - SSL configuration
  - DNS instructions

#### Task 15: Stripe Integration
- **Priority**: High
- **Features**:
  - Pricing plans
  - Checkout flow
  - Subscription management
  - Webhook handling

---

## Completed Tasks

### Setup Phase
- [x] Project planning
- [x] Architecture design
- [x] Database schema design
- [x] Create implementation_plan.md
- [x] Create task.md

### Foundation Phase
- [x] Create Next.js 14 project with TypeScript
- [x] Configure Tailwind + shadcn/ui
- [x] Install all core dependencies (Remotion, Claude SDK, auth, payments, etc.)
- [x] Set up Prisma with full database schema
- [x] Create environment variable template

### Core Components Built
- [x] Header component with auth state
- [x] Footer component
- [x] Landing page (Hero, Features, Pricing, CTA sections)
- [x] Chat widget component
- [x] Video player component (Remotion)
- [x] Builder wizard (3-step form)
- [x] Dashboard page
- [x] Login/Register pages

### API Routes Created
- [x] /api/auth/[...nextauth] - Authentication
- [x] /api/auth/register - User registration
- [x] /api/sites - Site CRUD
- [x] /api/sites/[id] - Individual site operations
- [x] /api/generate - AI content generation
- [x] /api/chat - Chatbot endpoint

### Lib/Utils Created
- [x] prisma.ts - Database client
- [x] claude.ts - AI content generation
- [x] stripe.ts - Payment handling
- [x] supabase.ts - Storage
- [x] auth.ts - Authentication config

### Remotion Setup
- [x] Root composition
- [x] BusinessIntro video template

---

## Notes

### Dependencies to Install
```bash
# Core
npm install @remotion/player @remotion/cli remotion
npm install @anthropic-ai/sdk
npm install next-auth @prisma/client prisma
npm install stripe @stripe/stripe-js
npm install @supabase/supabase-js

# UI
npm install react-hook-form zod @hookform/resolvers
npm install sonner lucide-react
npm install framer-motion
npm install @radix-ui/react-* (via shadcn)

# Utils
npm install clsx tailwind-merge
npm install date-fns
npm install nanoid
```

### Key Decisions Made
1. **Next.js 14 App Router** over Pages for better streaming + server components
2. **Supabase** over Firebase for PostgreSQL + better Prisma integration
3. **Remotion** for videos - unique differentiator, no competitors use this
4. **n8n** for chatbot - flexible, can integrate with any AI backend
5. **shadcn/ui** over other libraries - copy-paste components, full control

### Risks & Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| Remotion bundle size | High | Lazy load, separate bundle |
| Claude API costs | Medium | Caching, rate limiting |
| Video render time | Medium | Queue system, progress UI |
| Subdomain complexity | Low | Use Vercel's subdomain feature |

---

## Daily Standups

### Day 1
- **Done**: Project planning, documentation, full foundation setup
- **Doing**: Moving to Phase 2 - Core features
- **Blockers**: None
- **Notes**: Build passes, ready for database connection and testing

---

## Next Steps (Priority Order)
1. Set up Supabase project and add DATABASE_URL
2. Run prisma migrate to create tables
3. Add ANTHROPIC_API_KEY for AI features
4. Test the builder flow end-to-end
5. Add more Remotion video templates
6. Implement Stripe checkout flow
7. Add site preview/publish functionality

---

*Last Updated: 2026-01-29*
