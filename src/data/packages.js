const packages = [
  {
    id: 'essential',
    name: 'Essential',
    description: 'Perfect for intimate sessions and smaller gatherings.',
    popular: false,
    features: [
      'Up to 3 hours of coverage',
      '1 photographer',
      'Online gallery',
      '30 edited images',
      '2-week delivery',
    ],
    price: '₦150,000',
  },
  {
    id: 'standard',
    name: 'Standard',
    description: 'Our most popular choice for complete coverage.',
    popular: true,
    features: [
      'Up to 8 hours of coverage',
      '2 photographers',
      'Online gallery + downloads',
      '100 edited images',
      '1-week delivery',
      'Engagement / pre-shoot session',
    ],
    price: '₦450,000',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'The full experience for clients who want everything.',
    popular: false,
    features: [
      'Full-day coverage (12+ hours)',
      '2 photographers + assistant',
      'Private online gallery',
      '250+ edited images',
      '48-hour sneak peek',
      'Premium photo album',
      'Drone coverage (where permitted)',
    ],
    price: '₦950,000',
  },
]

export default packages
