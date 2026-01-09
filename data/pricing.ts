export interface PricingTier {
  name: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  minValue?: number;
  maxValue?: number;
  baseUnit?: string;
}

export interface ServicePricing {
  name: string;
  description: string;
  tiers: PricingTier[];
  addons?: Addon[];
}

export interface Addon {
  name: string;
  description: string;
  priceMonthly: number;
  unit?: string;
}

export const vpsHostingPricing: ServicePricing = {
  name: "VPS Hosting",
  description: "Powerful virtual private servers with full root access and dedicated resources.",
  tiers: [
    {
      name: "Starter VPS",
      priceMonthly: 9.99,
      priceYearly: 99.99,
      minValue: 1,
      maxValue: 2,
      baseUnit: "CPU Cores",
      features: [
        "1-2 CPU Cores",
        "2-4 GB RAM",
        "30-50 GB SSD Storage",
        "1 TB Bandwidth",
        "Full Root Access",
        "99.9% Uptime SLA"
      ]
    },
    {
      name: "Professional VPS",
      priceMonthly: 24.99,
      priceYearly: 249.99,
      minValue: 2,
      maxValue: 4,
      baseUnit: "CPU Cores",
      features: [
        "2-4 CPU Cores",
        "4-8 GB RAM",
        "50-100 GB SSD Storage",
        "2 TB Bandwidth",
        "Full Root Access",
        "99.9% Uptime SLA",
        "Free Daily Backups"
      ]
    },
    {
      name: "Enterprise VPS",
      priceMonthly: 49.99,
      priceYearly: 499.99,
      minValue: 4,
      maxValue: 8,
      baseUnit: "CPU Cores",
      features: [
        "4-8 CPU Cores",
        "8-16 GB RAM",
        "100-200 GB SSD Storage",
        "5 TB Bandwidth",
        "Full Root Access",
        "99.99% Uptime SLA",
        "Free Daily Backups",
        "Priority Support"
      ]
    }
  ],
  addons: [
    {
      name: "Extra Storage",
      description: "Additional SSD storage space",
      priceMonthly: 5.99,
      unit: "per 50 GB"
    },
    {
      name: "Database Addon",
      description: "Managed MySQL/PostgreSQL database",
      priceMonthly: 9.99,
      unit: "per database"
    },
    {
      name: "Automated Backups",
      description: "Daily automated backups with 30-day retention",
      priceMonthly: 7.99,
      unit: "per server"
    },
    {
      name: "Server Migration",
      description: "Professional server migration service",
      priceMonthly: 29.99,
      unit: "one-time"
    }
  ]
};

export const cpanelHostingPricing: ServicePricing = {
  name: "cPanel Hosting",
  description: "Easy-to-use web hosting with the popular cPanel control panel.",
  tiers: [
    {
      name: "Basic cPanel",
      priceMonthly: 4.99,
      priceYearly: 49.99,
      minValue: 1,
      maxValue: 3,
      baseUnit: "Websites",
      features: [
        "1-3 Websites",
        "10-30 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "cPanel Control Panel",
        "Email Accounts"
      ]
    },
    {
      name: "Pro cPanel",
      priceMonthly: 9.99,
      priceYearly: 99.99,
      minValue: 3,
      maxValue: 10,
      baseUnit: "Websites",
      features: [
        "3-10 Websites",
        "30-100 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "cPanel Control Panel",
        "Unlimited Email Accounts",
        "Free Daily Backups"
      ]
    },
    {
      name: "Business cPanel",
      priceMonthly: 19.99,
      priceYearly: 199.99,
      minValue: 10,
      maxValue: 50,
      baseUnit: "Websites",
      features: [
        "10-50 Websites",
        "100-200 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "cPanel Control Panel",
        "Unlimited Email Accounts",
        "Free Daily Backups",
        "Priority Support",
        "Free CDN"
      ]
    }
  ],
  addons: [
    {
      name: "Extra Storage",
      description: "Additional SSD storage space",
      priceMonthly: 3.99,
      unit: "per 25 GB"
    },
    {
      name: "Premium Email",
      description: "Advanced email hosting with spam protection",
      priceMonthly: 2.99,
      unit: "per mailbox"
    },
    {
      name: "Dedicated IP",
      description: "Dedicated IP address for your hosting",
      priceMonthly: 4.99,
      unit: "per IP"
    },
    {
      name: "Site Installation",
      description: "Professional WordPress/Joomla installation",
      priceMonthly: 19.99,
      unit: "one-time"
    }
  ]
};

export const minecraftHostingPricing: ServicePricing = {
  name: "Minecraft Hosting",
  description: "Optimized Minecraft server hosting with instant setup and DDoS protection.",
  tiers: [
    {
      name: "Starter Minecraft",
      priceMonthly: 5.99,
      priceYearly: 59.99,
      minValue: 5,
      maxValue: 15,
      baseUnit: "Players",
      features: [
        "5-15 Players",
        "2 GB RAM",
        "10 GB SSD Storage",
        "DDoS Protection",
        "Instant Setup",
        "Mod Support",
        "Automatic Backups"
      ]
    },
    {
      name: "Pro Minecraft",
      priceMonthly: 12.99,
      priceYearly: 129.99,
      minValue: 15,
      maxValue: 40,
      baseUnit: "Players",
      features: [
        "15-40 Players",
        "4 GB RAM",
        "25 GB SSD Storage",
        "DDoS Protection",
        "Instant Setup",
        "Mod Support",
        "Automatic Backups",
        "MySQL Database"
      ]
    },
    {
      name: "Ultimate Minecraft",
      priceMonthly: 24.99,
      priceYearly: 249.99,
      minValue: 40,
      maxValue: 100,
      baseUnit: "Players",
      features: [
        "40-100 Players",
        "8 GB RAM",
        "50 GB SSD Storage",
        "DDoS Protection",
        "Instant Setup",
        "Mod Support",
        "Automatic Backups",
        "MySQL Database",
        "Priority Support",
        "Custom Plugins"
      ]
    }
  ],
  addons: [
    {
      name: "Extra RAM",
      description: "Additional RAM for better performance",
      priceMonthly: 3.99,
      unit: "per 1 GB"
    },
    {
      name: "Extra Storage",
      description: "Additional SSD storage space",
      priceMonthly: 2.99,
      unit: "per 10 GB"
    },
    {
      name: "Additional Database",
      description: "Extra MySQL database",
      priceMonthly: 2.99,
      unit: "per database"
    },
    {
      name: "Server Setup",
      description: "Professional Minecraft server setup and configuration",
      priceMonthly: 24.99,
      unit: "one-time"
    }
  ]
};

export const botHostingPricing: ServicePricing = {
  name: "Bot Hosting (Discord)",
  description: "Reliable 24/7 hosting for Discord bots with low latency and high uptime.",
  tiers: [
    {
      name: "Starter Bot",
      priceMonthly: 2.99,
      priceYearly: 29.99,
      minValue: 1,
      maxValue: 5,
      baseUnit: "Bots",
      features: [
        "1-5 Discord Bots",
        "512 MB RAM per bot",
        "5 GB SSD Storage",
        "24/7 Uptime",
        "DDoS Protection",
        "Automatic Restarts"
      ]
    },
    {
      name: "Pro Bot",
      priceMonthly: 7.99,
      priceYearly: 79.99,
      minValue: 5,
      maxValue: 15,
      baseUnit: "Bots",
      features: [
        "5-15 Discord Bots",
        "1 GB RAM per bot",
        "15 GB SSD Storage",
        "24/7 Uptime",
        "DDoS Protection",
        "Automatic Restarts",
        "MySQL Database"
      ]
    },
    {
      name: "Enterprise Bot",
      priceMonthly: 15.99,
      priceYearly: 159.99,
      minValue: 15,
      maxValue: 50,
      baseUnit: "Bots",
      features: [
        "15-50 Discord Bots",
        "2 GB RAM per bot",
        "50 GB SSD Storage",
        "24/7 Uptime",
        "DDoS Protection",
        "Automatic Restarts",
        "MySQL Database",
        "Priority Support",
        "Custom Domains"
      ]
    }
  ],
  addons: [
    {
      name: "Extra RAM",
      description: "Additional RAM per bot",
      priceMonthly: 1.99,
      unit: "per 512 MB"
    },
    {
      name: "Extra Storage",
      description: "Additional SSD storage space",
      priceMonthly: 1.99,
      unit: "per 5 GB"
    },
    {
      name: "Additional Database",
      description: "Extra database for your bots",
      priceMonthly: 2.99,
      unit: "per database"
    },
    {
      name: "Bot Installation",
      description: "Professional bot installation and setup",
      priceMonthly: 14.99,
      unit: "one-time"
    }
  ]
};

export const allServices = [
  vpsHostingPricing,
  cpanelHostingPricing,
  minecraftHostingPricing,
  botHostingPricing
];
