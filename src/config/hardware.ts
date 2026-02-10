export interface HardwareSpec {
  id: string
  title: string
  description: string
  icon?: string
}

export const hardwareSpecs: HardwareSpec[] = [
  {
    id: 'cpu',
    title: 'Enterprise CPUs',
    description: 'Latest generation AMD Ryzen and Intel Xeon processors with high clock speeds',
  },
  {
    id: 'ram',
    title: 'DDR4 RAM',
    description: 'High-speed ECC memory for stable and reliable performance',
  },
  {
    id: 'storage',
    title: 'NVMe Storage',
    description: 'Ultra-fast NVMe SSDs with RAID protection for your data',
  },
  {
    id: 'network',
    title: 'Global Network',
    description: 'Multiple data centers with 10Gbps uplinks and DDoS protection',
  },
  {
    id: 'location',
    title: 'Strategic Locations',
    description: 'Servers in North America, Europe, and Asia for low latency',
  },
  {
    id: 'uptime',
    title: 'High Availability',
    description: 'Redundant infrastructure with automatic failover systems',
  },
]
