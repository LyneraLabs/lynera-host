import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  title?: string
  subtitle?: string
  centered?: boolean
}

export function Section({ 
  children, 
  title, 
  subtitle, 
  centered = false,
  className, 
  ...props 
}: SectionProps) {
  return (
    <section className={cn('py-16', className)} {...props}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className={cn('mb-12', centered && 'text-center')}>
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
