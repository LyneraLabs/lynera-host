import Link from 'next/link'
import { siteConfig } from '@/config/site'

export function Navbar() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-secondary">
            {siteConfig.name}
          </Link>
          <div className="flex items-center gap-6">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-secondary transition-colors font-medium"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/order"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold transition-all"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
