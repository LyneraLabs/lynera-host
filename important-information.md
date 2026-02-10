# Lynera Hosting - Important Information

## Project Overview

This is a production-ready Next.js starter project for **Lynera Hosting**, a Minecraft server hosting company. The application provides a complete foundation for selling hosting plans and add-ons through Stripe integration.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Font**: System font stack
- **Deployment**: Optimized for Vercel

## Brand Identity

### Colors
- **Primary**: `#e2adf2` (Light purple/pink)
- **Secondary**: `#654597` (Deep purple)

These colors are configured in:
- `tailwind.config.ts` (as Tailwind color classes)
- `src/app/globals.css` (as CSS variables)

## Project Structure

```
lynera-host/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home/Landing page
│   │   ├── pricing/           # Pricing page
│   │   ├── about/             # About Us page
│   │   ├── order/             # Order/Configuration page
│   │   ├── api/               # API route handlers
│   │   ├── layout.tsx         # Root layout with Navbar/Footer
│   │   └── globals.css        # Global styles & Tailwind
│   ├── components/            # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   ├── PricingCard.tsx
│   │   ├── FeatureList.tsx
│   │   ├── AddonCard.tsx
│   │   └── OrderSummary.tsx
│   ├── config/                # Configuration files
│   │   ├── site.ts           # Site-wide settings
│   │   ├── pricing.ts        # Pricing plans
│   │   ├── addons.ts         # Add-ons catalog
│   │   ├── hardware.ts       # Hardware specifications
│   │   └── about.ts          # About page content
│   ├── lib/                   # Utility functions
│   │   ├── checkout.ts       # Stripe checkout logic
│   │   └── utils.ts          # General utilities
│   └── types/                 # TypeScript type definitions
│       └── stripe.ts         # Stripe-related types
├── .env.example              # Environment variables template
└── package.json              # Dependencies and scripts
```

## Key Features

### 1. Configuration-Driven Content
All business data is centralized in `src/config/`:
- **Pricing Plans**: Define plans with features, prices, and Stripe IDs
- **Add-ons**: Configure add-ons with compatibility rules
- **Hardware**: Specify hardware features
- **Site Settings**: Navigation, footer, metadata
- **About Content**: Mission, values, FAQ

### 2. Stripe-Ready Architecture
- Placeholder Stripe Product IDs and Price IDs in all plans/add-ons
- `createCheckoutPayload()` function generates Stripe line items
- API route stub at `src/app/api/create-checkout-session/route.ts`
- Type-safe Stripe integration structure

### 3. Add-ons System
Advanced compatibility system:
- `requiresPlanIds`: Restrict add-ons to specific plans
- `incompatibleWith`: Prevent conflicting add-ons
- Automatic UI updates with disabled states and explanations

### 4. Responsive Design
- Mobile-first responsive layout
- Tailwind CSS utility classes
- Accessible navigation and forms
- Focus states and semantic HTML

## Environment Variables

Required environment variables (see `.env.example`):

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_...              # Server-side only
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...  # Client-side

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Customization Guide

### Updating Plans

Edit `src/config/pricing.ts`:

```typescript
export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small communities',
    priceMonthly: 9.99,
    features: ['2GB RAM', '2 CPU Cores', ...],
    stripeProductId: 'prod_xxx',  // From Stripe Dashboard
    stripePriceId: 'price_xxx',   // From Stripe Dashboard
  },
  // Add more plans...
]
```

### Adding New Add-ons

Edit `src/config/addons.ts`:

```typescript
export const addons: Addon[] = [
  {
    id: 'my-addon',
    name: 'My Addon',
    description: 'Description here',
    priceMonthly: 4.99,
    category: 'features',
    stripeProductId: 'prod_xxx',
    stripePriceId: 'price_xxx',
    requiresPlanIds: ['pro', 'enterprise'],  // Optional
    incompatibleWith: ['other-addon'],        // Optional
  },
]
```

### Modifying Hardware Specs

Edit `src/config/hardware.ts` to update the hardware overview section.

### Changing About Content

Edit `src/config/about.ts` to update mission, values, story, and FAQ.

## Stripe Integration (Next Steps)

To enable real checkout:

1. **Install Stripe SDK**:
   ```bash
   npm install stripe @stripe/stripe-js
   ```

2. **Update API Route** (`src/app/api/create-checkout-session/route.ts`):
   ```typescript
   import Stripe from 'stripe'
   
   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
     apiVersion: '2023-10-16',
   })
   
   export async function POST(req: NextRequest) {
     const body = await req.json()
     const { line_items, success_url, cancel_url } = body
     
     const session = await stripe.checkout.sessions.create({
       line_items,
       mode: 'subscription',
       success_url,
       cancel_url,
     })
     
     return NextResponse.json({ sessionId: session.id })
   }
   ```

3. **Update Order Page** to call the API and redirect to Stripe Checkout

4. **Create Products in Stripe Dashboard** and update IDs in config files

## Build & Deployment

### Local Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Vercel Deployment
1. Push to GitHub
2. Import repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

The project is configured for zero-config Vercel deployment with:
- Automatic API routes as Serverless Functions
- Static optimization where possible
- Environment variable support

## Important Notes

- **No Real Payments**: The checkout is currently a placeholder
- **Environment Variables**: Never commit `.env` files
- **Stripe IDs**: Replace placeholder IDs with real ones from Stripe Dashboard
- **Vercel Compatible**: Uses standard App Router patterns, no custom server
- **Type Safety**: Full TypeScript coverage for better DX

## Performance Considerations

- Static pages pre-rendered at build time
- Client components only where needed (Order page)
- Optimized CSS with Tailwind's purge
- Minimal JavaScript bundle

## Security Notes

- Stripe secret key is server-only (not exposed to client)
- Environment variables follow Next.js conventions
- No sensitive data in repository
- API routes use Next.js built-in protection
