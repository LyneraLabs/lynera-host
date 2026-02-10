import Link from 'next/link'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'

const highlights = [
  {
    title: 'Instant Setup',
    description: 'Your server is ready in minutes. No technical knowledge required.',
    icon: '⚡',
  },
  {
    title: 'Enterprise Hardware',
    description: 'Latest generation CPUs, NVMe SSDs, and high-speed RAM for peak performance.',
    icon: '🚀',
  },
  {
    title: 'DDoS Protection',
    description: 'Advanced protection keeps your server online during attacks.',
    icon: '🛡️',
  },
  {
    title: '24/7 Support',
    description: 'Our expert team is always available to help you.',
    icon: '💬',
  },
  {
    title: 'Global Network',
    description: 'Multiple data centers worldwide for low latency.',
    icon: '🌍',
  },
  {
    title: 'Automatic Backups',
    description: 'Daily backups ensure your data is always safe.',
    icon: '💾',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Premium Minecraft Server Hosting
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Experience unbeatable performance with enterprise-grade hardware and 24/7 support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" variant="primary">
                  View Pricing
                </Button>
              </Link>
              <Link href="/order">
                <Button size="lg" variant="outline">
                  Order Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <Section
        title="Why Choose Lynera Hosting?"
        subtitle="Everything you need to run a successful Minecraft server"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index}>
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Server?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of communities powered by Lynera Hosting
          </p>
          <Link href="/order">
            <Button size="lg" className="bg-white text-secondary hover:bg-gray-100">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
