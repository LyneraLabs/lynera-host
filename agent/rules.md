# Agent Rules for Lynera Hosting Project

## General Development Rules

### Code Style & Quality
1. **TypeScript First**: Always use TypeScript with proper type definitions
2. **No Implicit Any**: Avoid `any` types; use proper interfaces and types
3. **Component Structure**: Keep components small, focused, and reusable
4. **Props Over State**: Prefer passing data through props when possible
5. **Named Exports**: Use named exports for components and utilities

### Configuration Management
1. **Never Hardcode**: All content must be in config files (`src/config/`)
2. **Type Safety**: Define interfaces for all config structures
3. **Separation**: Keep different concerns in separate config files
4. **Documentation**: Add comments for complex config structures

### Stripe Integration
1. **Placeholder IDs**: Use descriptive placeholder IDs (e.g., `prod_starter_placeholder`)
2. **Server-Side Secrets**: Never expose `STRIPE_SECRET_KEY` to client
3. **Type Safety**: Use proper types from `src/types/stripe.ts`
4. **Testing**: Test with Stripe test mode keys only

### Styling Rules
1. **Tailwind Utilities**: Use Tailwind classes, avoid inline styles
2. **Brand Colors**: Always use theme colors (`primary`, `secondary`)
3. **Responsive Design**: Mobile-first approach with `sm:`, `md:`, `lg:` breakpoints
4. **Accessibility**: Include proper ARIA labels and semantic HTML
5. **Focus States**: Ensure all interactive elements have visible focus states

### File Naming Conventions
1. **Components**: PascalCase (e.g., `PricingCard.tsx`)
2. **Config Files**: camelCase (e.g., `pricing.ts`)
3. **Utilities**: camelCase (e.g., `checkout.ts`)
4. **Pages**: lowercase for routes (e.g., `page.tsx`)

## Page-Specific Rules

### Home Page (`src/app/page.tsx`)
- Keep hero section prominent with clear CTAs
- Highlight cards should be config-driven
- Include both "View Pricing" and "Order Now" CTAs
- Maintain visual hierarchy with proper heading levels

### Pricing Page (`src/app/pricing/page.tsx`)
- Display all plans from `pricing.ts` config
- Show hardware overview from `hardware.ts` config
- Include add-ons teaser with link to order page
- Add FAQ section for common pricing questions

### Order Page (`src/app/order/page.tsx`)
- Must be a client component (`'use client'`)
- Wrap `useSearchParams()` in Suspense boundary
- Implement live total calculation
- Show compatibility warnings for add-ons
- Display clear order summary
- Handle plan prefill from query string (`?plan=planId`)

### About Page (`src/app/about/page.tsx`)
- All content from `about.ts` config
- Include mission, values, story sections
- Display comprehensive FAQ
- Add contact CTA at bottom

## Component Rules

### Reusable Components
1. **Props Interface**: Define clear prop interfaces
2. **Default Props**: Use default parameters where appropriate
3. **Children Pattern**: Support `children` prop when needed
4. **Composition**: Build complex UIs from simple components

### Button Component
- Support variants: `primary`, `secondary`, `outline`, `ghost`
- Support sizes: `sm`, `md`, `lg`
- Use proper TypeScript extending `HTMLButtonElement`

### Card Component
- Accept `className` for customization
- Use consistent padding and shadows
- Support hover states

### Form Components
- Always include labels
- Show validation errors clearly
- Support disabled states with visual feedback

## State Management Rules

1. **Local State First**: Use `useState` for component-specific state
2. **Avoid Prop Drilling**: Use composition and context when needed
3. **Derived State**: Calculate derived values instead of storing them
4. **Server State**: Fetch data at page level, not component level

## API Route Rules

### Route Handlers (`src/app/api/**/route.ts`)
1. **Named Exports**: Use `POST`, `GET`, etc. as named exports
2. **Type Safety**: Type request/response properly
3. **Error Handling**: Return appropriate HTTP status codes
4. **Validation**: Validate all incoming data
5. **Security**: Never expose secrets or sensitive data

### Stripe API Route
- Keep as placeholder until real integration
- Include comprehensive TODO comments
- Show example implementation in comments
- Return proper error messages

## Testing Guidelines (For Future Implementation)

1. **Unit Tests**: Test utility functions and helpers
2. **Component Tests**: Test components in isolation
3. **Integration Tests**: Test user flows
4. **E2E Tests**: Test critical paths (order flow)

## Deployment Rules (Vercel)

1. **No Custom Server**: Use standard Next.js patterns
2. **API Routes**: All backend logic as Route Handlers
3. **Environment Variables**: Use Vercel dashboard for secrets
4. **Build Check**: Always test `npm run build` before deploying
5. **Static Optimization**: Ensure pages are statically optimized where possible

## Performance Rules

1. **Code Splitting**: Dynamic imports for heavy components
2. **Image Optimization**: Use Next.js `<Image>` component when adding images
3. **Bundle Size**: Keep client JavaScript minimal
4. **CSS Optimization**: Let Tailwind purge unused styles

## Security Rules

1. **Environment Variables**: 
   - `NEXT_PUBLIC_*` for client-side values only
   - Plain names for server-only secrets
2. **Input Validation**: Validate all user inputs
3. **XSS Prevention**: Sanitize user-generated content
4. **CSRF Protection**: Use Next.js built-in protections

## Documentation Rules

1. **README**: Keep README.md updated with setup instructions
2. **Code Comments**: Add comments for complex logic only
3. **Config Comments**: Document config file structures
4. **API Docs**: Document all API routes with examples

## Git Workflow Rules

1. **Commit Messages**: Clear, descriptive commit messages
2. **Feature Branches**: Work on feature branches, not main
3. **Small Commits**: Commit logical units of work
4. **No Secrets**: Never commit `.env` files or secrets

## Customization Rules for Users

1. **Config Files**: Direct users to edit config files, not components
2. **Stripe IDs**: Provide clear instructions for replacing placeholder IDs
3. **Colors**: Show how to update brand colors in both Tailwind and CSS
4. **Content**: Make it easy to update text without touching code

## Breaking Change Prevention

1. **Config Structure**: Don't change config interfaces without migration guide
2. **Component APIs**: Keep component props backwards compatible
3. **File Structure**: Don't reorganize files without good reason
4. **Environment Variables**: Don't rename env vars without documentation

## Add-on System Rules

1. **Compatibility**: Always check and enforce `requiresPlanIds`
2. **Conflicts**: Properly handle `incompatibleWith` relationships
3. **UI Feedback**: Show clear reasons why add-ons are disabled
4. **Live Updates**: Update totals immediately on selection changes

## Future Enhancement Guidelines

When adding new features:
1. Maintain config-driven approach
2. Keep Stripe-ready structure
3. Ensure Vercel compatibility
4. Update documentation
5. Add TypeScript types
6. Test responsive design
7. Check accessibility
8. Verify build succeeds
