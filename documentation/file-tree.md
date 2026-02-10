# File Tree Structure

Complete file tree of the Lynera Hosting starter project.

```
lynera-host/
├── .env.example                    # Environment variables template
├── .gitignore                      # Git ignore rules
├── README.md                       # Main project README
├── important-information.md        # Architecture & important info
├── next.config.js                  # Next.js configuration
├── package.json                    # NPM dependencies & scripts
├── package-lock.json               # Locked dependency versions
├── postcss.config.js               # PostCSS configuration for Tailwind
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
│
├── agent/                          # Agent documentation
│   └── rules.md                   # Development rules for future agents
│
├── documentation/                  # Project documentation
│   └── 000.md                     # Complete user guide
│
├── src/                           # Source code
│   ├── app/                       # Next.js App Router
│   │   ├── globals.css           # Global styles & Tailwind directives
│   │   ├── layout.tsx            # Root layout (Navbar + Footer)
│   │   ├── page.tsx              # Home/Landing page
│   │   │
│   │   ├── about/                # About Us page
│   │   │   └── page.tsx
│   │   │
│   │   ├── pricing/              # Pricing page
│   │   │   └── page.tsx
│   │   │
│   │   ├── order/                # Order configuration page
│   │   │   └── page.tsx
│   │   │
│   │   └── api/                  # API routes (Serverless Functions)
│   │       └── create-checkout-session/
│   │           └── route.ts      # Stripe checkout API (placeholder)
│   │
│   ├── components/               # Reusable React components
│   │   ├── AddonCard.tsx        # Individual add-on selector
│   │   ├── Button.tsx           # Reusable button component
│   │   ├── Card.tsx             # Card container component
│   │   ├── FeatureList.tsx      # Feature list with checkmarks
│   │   ├── Footer.tsx           # Site footer with navigation
│   │   ├── Navbar.tsx           # Main navigation bar
│   │   ├── OrderSummary.tsx     # Order summary sidebar
│   │   ├── PricingCard.tsx      # Individual pricing plan card
│   │   └── Section.tsx          # Page section wrapper
│   │
│   ├── config/                   # Configuration files (EDIT THESE!)
│   │   ├── about.ts             # About page content
│   │   ├── addons.ts            # Add-ons catalog with compatibility
│   │   ├── hardware.ts          # Hardware specifications
│   │   ├── pricing.ts           # Pricing plans configuration
│   │   └── site.ts              # Site-wide settings
│   │
│   ├── lib/                      # Utility functions
│   │   ├── checkout.ts          # Stripe checkout helpers
│   │   └── utils.ts             # General utilities (cn function)
│   │
│   └── types/                    # TypeScript type definitions
│       └── stripe.ts            # Stripe-related types
│
└── node_modules/                 # Dependencies (not in repo)
```

## Key Files Explained

### Configuration Files

- **`.env.example`** - Template for environment variables (Stripe keys, site URL)
- **`next.config.js`** - Next.js settings (React strict mode)
- **`tailwind.config.ts`** - Tailwind customization (brand colors)
- **`tsconfig.json`** - TypeScript compiler options
- **`postcss.config.js`** - Tailwind CSS processing

### Source Structure

#### `src/app/` - Pages
- **`page.tsx`** - Home page (landing)
- **`layout.tsx`** - Root layout (wraps all pages with Navbar/Footer)
- **`globals.css`** - Global styles, Tailwind imports, CSS variables
- **`about/page.tsx`** - About Us page
- **`pricing/page.tsx`** - Pricing plans page
- **`order/page.tsx`** - Interactive order builder (client component)
- **`api/create-checkout-session/route.ts`** - Stripe API route (placeholder)

#### `src/components/` - UI Components
All components are reusable and type-safe:
- **Navigation**: `Navbar.tsx`, `Footer.tsx`
- **Layout**: `Button.tsx`, `Card.tsx`, `Section.tsx`
- **Business Logic**: `PricingCard.tsx`, `AddonCard.tsx`, `OrderSummary.tsx`
- **Lists**: `FeatureList.tsx`

#### `src/config/` - Business Configuration
**⚠️ EDIT THESE FILES TO CUSTOMIZE YOUR SITE**
- **`pricing.ts`** - Define hosting plans (4 plans included)
- **`addons.ts`** - Configure add-ons (8 add-ons with compatibility)
- **`hardware.ts`** - Hardware specifications (6 specs)
- **`about.ts`** - About content (mission, values, FAQ)
- **`site.ts`** - Site settings (navigation, footer, metadata)

#### `src/lib/` - Utilities
- **`checkout.ts`** - Stripe integration helpers:
  - `createCheckoutPayload()` - Builds Stripe line items
  - `calculateTotal()` - Computes order total
  - `isAddonCompatible()` - Validates add-on compatibility
- **`utils.ts`** - General utilities (className merger)

#### `src/types/` - TypeScript Definitions
- **`stripe.ts`** - Stripe-related type definitions

### Documentation

- **`README.md`** - Main project overview with quick start
- **`important-information.md`** - Architecture, tech stack, features
- **`agent/rules.md`** - Development guidelines for future agents
- **`documentation/000.md`** - Complete user guide with tutorials

## File Sizes (Approximate)

```
Total Source Code:     ~30 KB
Configuration Files:   ~15 KB
Components:           ~15 KB
Documentation:        ~40 KB
Dependencies:         ~200 MB (node_modules)
```

## Files You'll Edit Most

1. **`src/config/pricing.ts`** - Update plans and prices
2. **`src/config/addons.ts`** - Add/modify add-ons
3. **`src/config/about.ts`** - Change about content
4. **`src/config/site.ts`** - Modify navigation and footer
5. **`tailwind.config.ts`** - Change brand colors
6. **`.env`** - Set up environment variables (create from .env.example)

## Files You Shouldn't Modify (Usually)

- `package.json` - Unless adding new dependencies
- `tsconfig.json` - TypeScript config is optimal
- `next.config.js` - Next.js config is minimal and correct
- Components - Unless customizing UI behavior
- `src/lib/checkout.ts` - Core logic is solid

## Adding New Pages

To add a new page:

1. Create folder: `src/app/your-page/`
2. Add file: `src/app/your-page/page.tsx`
3. Export component: `export default function YourPage() { ... }`
4. Add to navigation in `src/config/site.ts`

Example:
```typescript
// src/app/docs/page.tsx
export default function DocsPage() {
  return <div>Documentation content</div>
}
```

## Adding New Components

1. Create file: `src/components/YourComponent.tsx`
2. Define interface for props
3. Export component
4. Import where needed

Example:
```typescript
// src/components/YourComponent.tsx
interface YourComponentProps {
  title: string
}

export function YourComponent({ title }: YourComponentProps) {
  return <div>{title}</div>
}
```

## Git Ignore

The `.gitignore` file excludes:
- `node_modules/` - Dependencies
- `.next/` - Build output
- `.env` - Environment variables (secrets)
- `*.log` - Log files
- `.DS_Store` - macOS files

## Build Output

Running `npm run build` creates:
- `.next/` folder with optimized production build
- Static HTML for pre-renderable pages
- JavaScript bundles
- CSS files

This folder is automatically excluded from Git.
