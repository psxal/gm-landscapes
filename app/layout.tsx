import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const SITE_URL = 'https://gmlandscapes.co.uk'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'GM Landscapes | Landscape Gardener Purley, Croydon & South London',
    template: '%s | GM Landscapes',
  },
  description:
    'GM Landscapes is a specialist landscape gardening company in Purley, Surrey. Bespoke decking, patios & paving, fencing, turfing and garden design across Croydon and South London. Free quotes, fully insured.',
  keywords: [
    'landscape gardener Purley',
    'decking installation Croydon',
    'garden fencing South London',
    'patio installation Surrey',
    'turfing Purley',
    'sleeper retaining walls Croydon',
    'garden design South London',
  ],
  authors: [{ name: 'GM Landscapes' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: 'GM Landscapes',
    title: 'GM Landscapes | Landscaping in Purley, Croydon & South London',
    description:
      'Bespoke decking, patios, fencing, turfing and garden design. Fully insured landscapers serving Purley, Croydon and South London. Free quotes.',
    images: [
      {
        url: '/portfolio/transformation-finished.png',
        width: 1200,
        height: 630,
        alt: 'A finished garden transformation with fresh turf and timber sleeper walls by GM Landscapes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GM Landscapes | Landscaping in Purley, Croydon & South London',
    description:
      'Bespoke decking, patios, fencing, turfing and garden design across Purley and South London.',
    images: ['/portfolio/transformation-finished.png'],
  },
  alternates: { canonical: SITE_URL },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1a2e35',
  width: 'device-width',
  initialScale: 1,
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'GM Landscapes',
  image: `${SITE_URL}/portfolio/transformation-finished.png`,
  description:
    'Specialist landscape gardening company offering decking, patios, fencing, turfing and garden design in Purley, Croydon and South London.',
  url: SITE_URL,
  telephone: '+447397336960',
  priceRange: '££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '48 Croftleigh Ave',
    addressLocality: 'Purley',
    addressRegion: 'Surrey',
    postalCode: 'CR8 4BT',
    addressCountry: 'GB',
  },
  areaServed: [
    'Purley',
    'Croydon',
    'Coulsdon',
    'Sanderstead',
    'Kenley',
    'Warlingham',
    'South London',
    'Surrey',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '6',
    bestRating: '5',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '08:00',
      closes: '18:00',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
