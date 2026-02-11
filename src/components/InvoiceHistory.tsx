import { Card } from './Card'
import type { DashboardInvoice } from '@/types/dashboard'

interface InvoiceHistoryProps {
  invoices: DashboardInvoice[]
}

export function InvoiceHistory({ invoices }: InvoiceHistoryProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800'
      case 'open':
        return 'bg-blue-100 text-blue-800'
      case 'void':
        return 'bg-gray-100 text-gray-800'
      case 'uncollectible':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  if (invoices.length === 0) {
    return (
      <Card>
        <h2 className="text-2xl font-bold text-secondary mb-4">Invoice History</h2>
        <p className="text-gray-500">No invoices found.</p>
      </Card>
    )
  }

  return (
    <Card>
      <h2 className="text-2xl font-bold text-secondary mb-6">Invoice History</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">
                Invoice #
              </th>
              <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">
                Date
              </th>
              <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">
                Amount
              </th>
              <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">
                Status
              </th>
              <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b border-gray-100">
                <td className="py-3 px-2 font-mono text-sm">
                  {invoice.invoiceNumber || invoice.id.substring(0, 12)}
                </td>
                <td className="py-3 px-2 text-sm">{formatDate(invoice.date)}</td>
                <td className="py-3 px-2 text-sm font-semibold">
                  ${(invoice.amount / 100).toFixed(2)} {invoice.currency.toUpperCase()}
                </td>
                <td className="py-3 px-2">
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded ${getStatusColor(
                      invoice.status
                    )}`}
                  >
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </span>
                </td>
                <td className="py-3 px-2">
                  <div className="flex gap-2">
                    {invoice.hostedInvoiceUrl && (
                      <a
                        href={invoice.hostedInvoiceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary text-sm font-medium"
                      >
                        View
                      </a>
                    )}
                    {invoice.pdfUrl && (
                      <a
                        href={invoice.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary text-sm font-medium"
                      >
                        PDF
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
