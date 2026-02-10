export interface Addon {
  id: string
  name: string
  description: string
  priceMonthly: number
  category: 'performance' | 'storage' | 'features' | 'support'
  stripeProductId: string
  stripePriceId: string
  requiresPlanIds?: string[]
  incompatibleWith?: string[]
}

export const addons: Addon[] = [
  {
    id: 'extra-ram-2gb',
    name: 'Extra RAM +2GB',
    description: 'Boost your server performance with additional RAM',
    priceMonthly: 5.99,
    category: 'performance',
    stripeProductId: 'prod_addon_ram_2gb_placeholder',
    stripePriceId: 'price_addon_ram_2gb_placeholder',
  },
  {
    id: 'extra-ram-4gb',
    name: 'Extra RAM +4GB',
    description: 'Significantly increase server capacity',
    priceMonthly: 9.99,
    category: 'performance',
    stripeProductId: 'prod_addon_ram_4gb_placeholder',
    stripePriceId: 'price_addon_ram_4gb_placeholder',
    incompatibleWith: ['extra-ram-2gb'],
  },
  {
    id: 'extra-storage-50gb',
    name: 'Extra Storage +50GB',
    description: 'More space for worlds, plugins, and backups',
    priceMonthly: 4.99,
    category: 'storage',
    stripeProductId: 'prod_addon_storage_50gb_placeholder',
    stripePriceId: 'price_addon_storage_50gb_placeholder',
  },
  {
    id: 'extra-storage-100gb',
    name: 'Extra Storage +100GB',
    description: 'Maximum storage for extensive server networks',
    priceMonthly: 7.99,
    category: 'storage',
    stripeProductId: 'prod_addon_storage_100gb_placeholder',
    stripePriceId: 'price_addon_storage_100gb_placeholder',
    incompatibleWith: ['extra-storage-50gb'],
  },
  {
    id: 'dedicated-ip',
    name: 'Dedicated IP',
    description: 'Your own unique IP address',
    priceMonthly: 3.99,
    category: 'features',
    stripeProductId: 'prod_addon_dedicated_ip_placeholder',
    stripePriceId: 'price_addon_dedicated_ip_placeholder',
    requiresPlanIds: ['gamer', 'pro', 'enterprise'],
  },
  {
    id: 'plugin-installer',
    name: 'Plugin Installer Pro',
    description: 'One-click installation for 1000+ plugins',
    priceMonthly: 2.99,
    category: 'features',
    stripeProductId: 'prod_addon_plugin_installer_placeholder',
    stripePriceId: 'price_addon_plugin_installer_placeholder',
  },
  {
    id: 'mysql-database',
    name: 'MySQL Database',
    description: 'Dedicated MySQL database for your server',
    priceMonthly: 4.99,
    category: 'features',
    stripeProductId: 'prod_addon_mysql_placeholder',
    stripePriceId: 'price_addon_mysql_placeholder',
  },
  {
    id: 'priority-support',
    name: 'Priority Support',
    description: 'Skip the queue with priority ticket handling',
    priceMonthly: 9.99,
    category: 'support',
    stripeProductId: 'prod_addon_priority_support_placeholder',
    stripePriceId: 'price_addon_priority_support_placeholder',
    requiresPlanIds: ['starter', 'gamer'],
  },
]

export const addonCategories = [
  { id: 'performance', name: 'Performance', description: 'Boost your server capabilities' },
  { id: 'storage', name: 'Storage', description: 'Expand your storage space' },
  { id: 'features', name: 'Features', description: 'Enhance functionality' },
  { id: 'support', name: 'Support', description: 'Premium assistance' },
] as const
