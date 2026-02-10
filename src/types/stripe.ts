export interface StripeLineItem {
  price: string // Stripe Price ID
  quantity: number
}

export interface CheckoutPayload {
  line_items: StripeLineItem[]
  mode: 'subscription' | 'payment'
  success_url: string
  cancel_url: string
}
