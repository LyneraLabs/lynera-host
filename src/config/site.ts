export const siteConfig = {
  name: 'Lynera Hosting',
  description: 'Premium Minecraft server hosting with unbeatable performance',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/lynerahosting',
    github: 'https://github.com/LyneraLabs/lynera-host',
  },
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Pricing',
      href: '/pricing',
    },
    {
      title: 'Dashboard',
      href: '/dashboard',
    },
    {
      title: 'About',
      href: '/about',
    },
  ],
  footerNav: [
    {
      title: 'Product',
      items: [
        { title: 'Pricing', href: '/pricing' },
        { title: 'Order', href: '/order' },
        { title: 'Dashboard', href: '/dashboard' },
      ],
    },
    {
      title: 'Company',
      items: [
        { title: 'About Us', href: '/about' },
      ],
    },
    {
      title: 'Support',
      items: [
        { title: 'Documentation', href: '/documentation/000.md' },
        { title: 'Contact', href: '/about#contact' },
      ],
    },
  ],
}
