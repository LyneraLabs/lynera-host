# Lynera Hosting - Minecraft Server Hosting Platform

A production-ready Next.js starter project for hosting Minecraft servers with Stripe integration.

![Home Page](https://github.com/user-attachments/assets/ee3b3019-b0ed-432a-add1-a46a21ad3c3b)

## ✨ Features

- 🎨 **Modern Design** - Clean UI with brand colors (#e2adf2, #654597)
- ⚙️ **Configuration-Driven** - All content managed through TypeScript config files
- 💳 **Stripe-Ready** - Pre-built checkout flow structure for subscriptions
- 📊 **Client Dashboard** - Integrated Stripe customer portal for account management
- 🧩 **Smart Add-ons System** - Compatibility rules and automatic validation
- 📱 **Fully Responsive** - Mobile-first design with Tailwind CSS
- 🚀 **Vercel Optimized** - Zero-config deployment with serverless functions
- 🔒 **Type-Safe** - Complete TypeScript coverage
- ♿ **Accessible** - Semantic HTML and ARIA labels

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/LyneraLabs/lynera-host.git
cd lynera-host

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your values

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
lynera-host/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx        # Home/Landing
│   │   ├── pricing/        # Pricing plans
│   │   ├── about/          # About us
│   │   ├── order/          # Order configuration
│   │   ├── dashboard/      # Client dashboard
│   │   └── api/            # API routes
│   ├── components/         # Reusable React components
│   ├── config/             # Business configuration (EDIT THESE!)
│   │   ├── pricing.ts     # Pricing plans
│   │   ├── addons.ts      # Add-ons catalog
│   │   ├── hardware.ts    # Hardware specs
│   │   ├── about.ts       # About content
│   │   ├── dashboard.ts   # Dashboard settings
│   │   └── site.ts        # Site settings
│   ├── lib/               # Utility functions
│   └── types/             # TypeScript definitions
└── ...config files
```

## 🎨 Pages Overview

### Home Page
Landing page with hero section, feature highlights, and CTAs.

### Pricing Page
![Pricing Page](https://github.com/user-attachments/assets/348fd9a0-af38-46b2-bdce-e6cb2d22a6d5)

Displays all hosting plans with features, hardware overview, and add-ons teaser.

### About Page
![About Page](https://github.com/user-attachments/assets/3612977c-2de2-4fef-a4e6-ffe02ac26eb7)

Company mission, values, story, and comprehensive FAQ.

### Order Page
![Order Page](https://github.com/user-attachments/assets/73251fc3-e4a3-4a4e-9414-993c747b5398)

Interactive order builder with:
- Plan selection (prefills from query string)
- Add-on selection with compatibility validation
- Live order summary with monthly total
- Stripe checkout integration (placeholder)

### Dashboard Page
![Dashboard Page](https://github.com/user-attachments/assets/c8e7fa6e-cf69-484e-9e63-d16cef588d77)

Comprehensive client dashboard with:
- Account overview with subscription count and monthly total
- Active subscriptions management
- Payment methods display
- Invoice history with PDF downloads
- Stripe Customer Portal integration for billing management

Full guide: [documentation/dashboard.md](./documentation/dashboard.md)

## 🛠️ Customization

### 1. Update Pricing Plans

Edit `src/config/pricing.ts`:

```typescript
export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small communities',
    priceMonthly: 9.99,
    features: ['2GB RAM', '2 CPU Cores', '20GB Storage'],
    stripeProductId: 'prod_xxx', // Replace with real Stripe ID
    stripePriceId: 'price_xxx',  // Replace with real Stripe ID
  },
  // Add more plans...
]
```

### 2. Configure Add-ons

Edit `src/config/addons.ts`:

```typescript
export const addons: Addon[] = [
  {
    id: 'extra-ram-2gb',
    name: 'Extra RAM +2GB',
    description: 'Boost server performance',
    priceMonthly: 5.99,
    category: 'performance',
    stripeProductId: 'prod_xxx',
    stripePriceId: 'price_xxx',
    // Optional compatibility rules:
    requiresPlanIds: ['gamer', 'pro', 'enterprise'],
    incompatibleWith: ['extra-ram-4gb'],
  },
]
```

### 3. Update Brand Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#e2adf2',   // Your primary color
      secondary: '#654597', // Your secondary color
    },
  },
},
```

### 4. Modify Content

All page content is in `src/config/`:
- `site.ts` - Navigation, footer, metadata
- `hardware.ts` - Hardware specifications
- `about.ts` - About page content, mission, values, FAQ

## 💳 Stripe Integration

### Current State
The project includes Stripe-ready structure:
- ✅ Placeholder Product/Price IDs in configs
- ✅ Type-safe checkout payload builder
- ✅ API route stub with detailed TODOs
- ❌ Real Stripe integration (implement next)

### Implementation Steps

1. **Install Stripe SDK**:
   ```bash
   npm install stripe @stripe/stripe-js
   ```

2. **Get Stripe Keys**:
   - Create account at [stripe.com](https://stripe.com)
   - Get API keys from Dashboard → Developers → API Keys
   - Create Products and Prices in Dashboard

3. **Update Environment Variables**:
   ```env
   STRIPE_SECRET_KEY=sk_test_xxx
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
   ```

4. **Implement API Route**:
   See `src/app/api/create-checkout-session/route.ts` for detailed example

5. **Update Config Files**:
   Replace placeholder IDs with real Stripe Product/Price IDs

Full guide: [documentation/000.md](./documentation/000.md#stripe-integration)

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

The project is optimized for Vercel with:
- Automatic API routes as Serverless Functions
- Static page optimization
- Edge network distribution

### Environment Variables

Required in production:

```env
STRIPE_SECRET_KEY=sk_live_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🧪 Development

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Type checking
npm run build
```

## 📚 Documentation

- [Important Information](./important-information.md) - Architecture and key concepts
- [Agent Rules](./agent/rules.md) - Development guidelines
- [Full Documentation](./documentation/000.md) - Complete guide

## 🎯 Key Features Explained

### Configuration-Driven Content
All business data lives in `src/config/` TypeScript files. No hardcoded content in components means easy updates without touching React code.

### Add-ons Compatibility System
Smart validation with:
- **Plan Requirements**: Show add-ons only for compatible plans
- **Mutual Exclusivity**: Prevent conflicting selections
- **Automatic UI Updates**: Disabled states with explanations
- **Live Calculations**: Real-time total updates

### Vercel-Ready Architecture
- No custom Node.js server required
- API routes become Serverless Functions automatically
- Follows Next.js App Router best practices
- Environment variables follow Next.js/Vercel conventions

## 🔒 Security

- Stripe secret keys never exposed to client
- Environment variables properly scoped (NEXT_PUBLIC_ prefix)
- No secrets in repository
- Input validation on API routes
- Next.js built-in security features

## 🤝 Contributing

This is a starter template. Customize it for your needs:

1. Update branding and colors
2. Add your content in config files
3. Implement Stripe integration
4. Deploy to production

## 📄 License

This project is provided as-is for Lynera Hosting.

## 🙋 Support

- Documentation: [documentation/000.md](./documentation/000.md)
- Issues: [GitHub Issues](https://github.com/LyneraLabs/lynera-host/issues)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS