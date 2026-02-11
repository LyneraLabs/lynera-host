# Client Dashboard - Stripe Integration Guide

## Overview

The Lynera Hosting client dashboard provides customers with a comprehensive view of their account and subscriptions, all integrated with Stripe for seamless billing management.

![Client Dashboard](https://github.com/user-attachments/assets/c8e7fa6e-cf69-484e-9e63-d16cef588d77)

## Features

### 1. Account Overview
- Customer email and name display
- Total active subscriptions count
- Monthly billing total at a glance
- Clean, organized layout

### 2. Active Subscriptions Management
- View all active, trialing, or past-due subscriptions
- See subscription status with color-coded badges
- Current billing period dates
- Auto-renewal information
- Pricing details per subscription

### 3. Payment Methods
- View all saved payment methods
- Default payment method indicator
- Card brand and last 4 digits display
- Quick access to manage payment methods

### 4. Invoice History
- Complete invoice listing with status
- Download PDF invoices
- View invoices online
- Invoice number and date tracking
- Payment status indicators

### 5. Stripe Customer Portal Integration
- One-click access to Stripe's hosted billing portal
- Manage subscriptions (upgrade, downgrade, cancel)
- Update payment methods securely
- View detailed billing history
- Update billing information

## Technical Implementation

### API Routes

#### `/api/dashboard-data`
**Method:** GET  
**Purpose:** Fetches customer data from Stripe

**Query Parameters:**
- `customerId` (required): Stripe Customer ID

**Response:**
```json
{
  "customer": {
    "id": "cus_...",
    "email": "customer@example.com",
    "name": "John Doe"
  },
  "subscriptions": [...],
  "invoices": [...],
  "paymentMethods": [...]
}
```

#### `/api/create-billing-portal-session`
**Method:** POST  
**Purpose:** Creates a Stripe Customer Portal session

**Request Body:**
```json
{
  "customerId": "cus_...",
  "returnUrl": "https://yourdomain.com/dashboard"
}
```

**Response:**
```json
{
  "url": "https://billing.stripe.com/session/..."
}
```

### Components

All dashboard components follow the agent rules and are fully typed:

- **`AccountOverview.tsx`** - Displays account summary
- **`SubscriptionList.tsx`** - Lists all subscriptions
- **`InvoiceHistory.tsx`** - Shows invoice history table
- **`PaymentMethods.tsx`** - Displays payment methods

### Configuration

Dashboard settings are managed in `/src/config/dashboard.ts`:

```typescript
export const dashboardConfig = {
  title: 'Client Dashboard',
  description: 'Manage your Lynera Hosting account and subscriptions',
  sections: {
    overview: { ... },
    subscriptions: { ... },
    billing: { ... },
    invoices: { ... },
  },
}
```

### Type Definitions

TypeScript types are defined in `/src/types/dashboard.ts`:

- `DashboardData` - Main dashboard data structure
- `DashboardSubscription` - Subscription details
- `DashboardInvoice` - Invoice information
- `DashboardPaymentMethod` - Payment method data

## Setup Instructions

### 1. Configure Stripe

Ensure you have the following environment variables set:

```env
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 2. Enable Customer Portal in Stripe

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/settings/billing/portal)
2. Navigate to Settings → Customer Portal
3. Enable the Customer Portal
4. Configure which features customers can access:
   - Cancel subscriptions
   - Update payment methods
   - View invoices
   - Update billing information

### 3. Authentication Integration (Production)

The current implementation uses a demo mode where customers manually enter their Stripe Customer ID. For production, you should:

1. **Implement Authentication**
   - Use NextAuth.js, Clerk, or your preferred auth provider
   - Store the Stripe Customer ID in your user database
   - Link user accounts to Stripe customers during checkout

2. **Modify Dashboard Page**
   - Replace the manual customer ID input with authenticated user data
   - Automatically fetch the customer ID from the session
   - Add proper authorization checks

Example with session:
```typescript
// In dashboard/page.tsx
const session = await getServerSession()
const customerId = session.user.stripeCustomerId

useEffect(() => {
  if (customerId) {
    fetchDashboardData(customerId)
  }
}, [customerId])
```

### 4. Create Customers During Checkout

When processing orders, create Stripe customers:

```typescript
// In create-checkout-session/route.ts
const customer = await stripe.customers.create({
  email: userEmail,
  name: userName,
  metadata: {
    userId: userId,
  },
})

// Store customer.id in your database
await db.users.update({
  where: { id: userId },
  data: { stripeCustomerId: customer.id },
})
```

## Demo Mode

The dashboard includes a demo mode for testing:

1. Navigate to `/dashboard`
2. Enter a Stripe Customer ID (e.g., `cus_...`)
3. Click "Load Dashboard"
4. View all customer data and test features

## Usage Flow

### Customer Journey

1. **New Customer**
   - Orders a hosting plan from `/order` page
   - Completes Stripe checkout
   - Account created with Stripe Customer ID

2. **Accessing Dashboard**
   - Logs into account
   - Navigates to "Dashboard" in navigation
   - Automatically loads their data

3. **Managing Subscriptions**
   - Views active subscriptions
   - Clicks "Manage Billing & Subscriptions"
   - Redirected to Stripe Customer Portal
   - Makes changes (upgrade, cancel, etc.)
   - Returns to dashboard

4. **Viewing Invoices**
   - Scrolls to Invoice History section
   - Clicks "View" or "PDF" for any invoice
   - Downloads or views invoice

## Customization

### Styling

All components use Tailwind CSS following the project's brand colors:
- Primary: `#e2adf2`
- Secondary: `#654597`

### Adding Features

To add new dashboard features:

1. Create new component in `/src/components/`
2. Add configuration in `/src/config/dashboard.ts`
3. Update types in `/src/types/dashboard.ts`
4. Import and use in `/src/app/dashboard/page.tsx`

### Modifying Data Display

To change what data is displayed:

1. Update the API route in `/src/app/api/dashboard-data/route.ts`
2. Add new fields to types in `/src/types/dashboard.ts`
3. Update components to display new data

## Security Considerations

### Best Practices Implemented

1. **Server-Side API Keys**
   - `STRIPE_SECRET_KEY` never exposed to client
   - All Stripe API calls made from server-side routes

2. **Customer Data Protection**
   - Customer ID required for all data fetches
   - No sensitive data exposed in URLs
   - Stripe Customer Portal handles sensitive operations

3. **Production Requirements**
   - Add authentication before production deployment
   - Implement authorization checks
   - Validate customer ID ownership
   - Rate limit API endpoints
   - Add CSRF protection

### Recommended Security Enhancements

```typescript
// Add middleware to verify user owns customer ID
export async function middleware(req: NextRequest) {
  const session = await getSession(req)
  const customerId = req.nextUrl.searchParams.get('customerId')
  
  if (session.user.stripeCustomerId !== customerId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }
  
  return NextResponse.next()
}
```

## Testing

### Manual Testing

1. **Create Test Customer**
   ```bash
   stripe customers create --email="test@example.com" --name="Test User"
   ```

2. **Create Test Subscription**
   ```bash
   stripe subscriptions create \
     --customer=cus_... \
     --items[][price]=price_...
   ```

3. **Test Dashboard**
   - Enter test customer ID in dashboard
   - Verify all data displays correctly
   - Test Billing Portal link

### Automated Testing (Future)

Consider adding tests for:
- API route responses
- Component rendering
- Data formatting
- Error handling

## Troubleshooting

### Common Issues

**Issue:** "Stripe not configured" error  
**Solution:** Ensure `STRIPE_SECRET_KEY` is set in environment variables

**Issue:** "Customer not found"  
**Solution:** Verify the customer ID exists in your Stripe account

**Issue:** Billing Portal link doesn't work  
**Solution:** Enable Customer Portal in Stripe Dashboard settings

**Issue:** No subscriptions showing  
**Solution:** Ensure customer has active subscriptions in Stripe

### Debug Mode

Enable debug logging:
```typescript
// In dashboard-data/route.ts
console.log('Fetching data for customer:', customerId)
console.log('Subscriptions found:', subscriptions.data.length)
```

## Future Enhancements

Potential features to add:

1. **Usage Metrics**
   - Server uptime
   - Player count graphs
   - Resource usage charts

2. **Support Integration**
   - Live chat widget
   - Ticket system
   - FAQ search

3. **Server Management**
   - Start/stop controls
   - File manager
   - Mod installer

4. **Notifications**
   - Email alerts for renewals
   - Payment failure notifications
   - Server status updates

## Support

For questions or issues:
- Check the main [documentation](./000.md)
- Review [Stripe API documentation](https://stripe.com/docs/api)
- Contact support via `/about` page

---

**Note:** This dashboard is designed to keep customers within the Lynera ecosystem while leveraging Stripe's powerful billing infrastructure. The seamless integration provides a professional experience while reducing development complexity.
