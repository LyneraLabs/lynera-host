export function getServiceSlug(serviceName: string): string {
  const slugMap: { [key: string]: string } = {
    'VPS Hosting': 'vps',
    'cPanel Hosting': 'cpanel',
    'Minecraft Hosting': 'minecraft',
    'Bot Hosting (Discord)': 'bot'
  };
  
  return slugMap[serviceName] || serviceName.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
}

export function calculateSavings(monthlyPrice: number, yearlyPrice: number): number {
  return (monthlyPrice * 12) - yearlyPrice;
}

export function calculateSavingsPercentage(monthlyPrice: number, yearlyPrice: number): number {
  const annualCost = monthlyPrice * 12;
  return Math.round(((annualCost - yearlyPrice) / annualCost) * 100);
}
