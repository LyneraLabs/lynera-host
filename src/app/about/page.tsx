import type { Metadata } from 'next'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { aboutConfig } from '@/config/about'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Lynera Hosting and our mission',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            {aboutConfig.hero.title}
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {aboutConfig.hero.description}
          </p>
        </div>
      </section>

      {/* Mission */}
      <Section centered>
        <div className="max-w-3xl mx-auto">
          <Card>
            <h2 className="text-3xl font-bold text-secondary mb-4 text-center">
              {aboutConfig.mission.title}
            </h2>
            <p className="text-lg text-gray-700 text-center">
              {aboutConfig.mission.content}
            </p>
          </Card>
        </div>
      </Section>

      {/* Values */}
      <Section
        title="Our Values"
        subtitle="What drives us every day"
        centered
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutConfig.values.map((value, index) => (
            <Card key={index}>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Story */}
      <Section centered>
        <div className="max-w-3xl mx-auto">
          <Card>
            <h2 className="text-3xl font-bold text-secondary mb-4 text-center">
              {aboutConfig.story.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutConfig.story.content}
            </p>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section
        title="Frequently Asked Questions"
        centered
        className="bg-white"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          {aboutConfig.faq.map((item, index) => (
            <Card key={index}>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                {item.question}
              </h3>
              <p className="text-gray-600">{item.answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <section id="contact" className="bg-gradient-to-r from-secondary to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you 24/7
          </p>
          <a
            href="mailto:support@lynerahosting.com"
            className="inline-block bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>
    </>
  )
}
