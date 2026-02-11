export interface DashboardSubscription {
  id: string
  planName: string
  status: 'active' | 'canceled' | 'past_due' | 'trialing' | 'incomplete' | 'incomplete_expired' | 'unpaid' | 'paused'
  currentPeriodStart: Date
  currentPeriodEnd: Date
  amount: number
  currency: string
  cancelAtPeriodEnd: boolean
}

export interface DashboardInvoice {
  id: string
  invoiceNumber: string
  status: 'paid' | 'open' | 'void' | 'uncollectible' | 'draft'
  amount: number
  currency: string
  date: Date
  pdfUrl?: string
  hostedInvoiceUrl?: string
}

export interface DashboardPaymentMethod {
  id: string
  type: string
  brand?: string
  last4?: string
  expiryMonth?: number
  expiryYear?: number
  isDefault: boolean
}

export interface DashboardData {
  customer: {
    id: string
    email: string
    name?: string
  }
  subscriptions: DashboardSubscription[]
  invoices: DashboardInvoice[]
  paymentMethods: DashboardPaymentMethod[]
}
