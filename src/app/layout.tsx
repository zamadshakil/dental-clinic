import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dallas Dental Care — Premium General & Cosmetic Dentistry in Dallas, TX',
  description: 'Dallas Dental Care offers world-class dental treatments at 1234 Preston Road, Dallas, TX. Services include dental implants, teeth whitening, veneers, Invisalign, and 24/7 same-day emergency dental care.',
  keywords: 'dentist Dallas TX, dental care Dallas, dental implants Dallas, teeth whitening Dallas, veneers Texas, Invisalign Dallas, emergency dentist Dallas, family dentistry Dallas, Dallas Dental Care',
  authors: [{ name: 'Dallas Dental Care' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://preview.dental.website.zamdevai.com/',
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Dallas',
    'geo.position': '32.9220;-96.8041',
    'ICBM': '32.9220, -96.8041',
  },
  openGraph: {
    type: 'website',
    url: 'https://preview.dental.website.zamdevai.com/',
    title: 'Dallas Dental Care — World-Class Dentistry in Dallas, Texas',
    description: 'Bespoke dental care for your family. From implants to cosmetic smile makeovers, experience advanced treatments in a modern, luxury setting.',
    images: [
      {
        url: 'https://preview.dental.website.zamdevai.com/images/Clinic.jpg',
        width: 1200,
        height: 630,
        alt: 'Dallas Dental Care Clinic Interior',
      },
    ],
    locale: 'en_US',
    siteName: 'Dallas Dental Care',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dallas Dental Care — Premium Family & Cosmetic Dentistry',
    description: 'Providing same-day emergency appointments and modern cosmetic restorations in Dallas, TX.',
    images: ['https://preview.dental.website.zamdevai.com/images/Clinic.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dentistSchema = {
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'MedicalClinic', 'LocalBusiness'],
    '@id': 'https://preview.dental.website.zamdevai.com/#organization',
    'name': 'Dallas Dental Care',
    'alternateName': 'Dallas Dental Care',
    'url': 'https://preview.dental.website.zamdevai.com',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://preview.dental.website.zamdevai.com/images/Serene%20Dental%20Aesthetics.png'
    },
    'image': [
      'https://preview.dental.website.zamdevai.com/images/Clinic.jpg'
    ],
    'description': 'Dallas Dental Care provides premier general, cosmetic, and emergency dentistry at Preston Road, Dallas, TX. Same-day emergency slots available.',
    'telephone': '+12145550187',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '1234 Preston Road',
      'addressLocality': 'Dallas',
      'addressRegion': 'TX',
      'postalCode': '75230',
      'addressCountry': {
        '@type': 'Country',
        'name': 'US'
      }
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 32.9220,
      'longitude': -96.8041
    },
    'hasMap': 'https://www.google.com/maps/place/1234+Preston+Rd,+Dallas,+TX+75230',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        'opens': '09:00',
        'closes': '17:00'
      }
    ],
    'openingHours': 'Mo-Sa 09:00-17:00',
    'medicalSpecialty': [
      'Cosmetic Dentistry',
      'Restorative Dentistry',
      'Orthodontics',
      'Implant Dentistry',
      'Endodontics',
      'Family Dentistry'
    ],
    'availableService': [
      { '@type': 'MedicalProcedure', 'name': 'General Dentistry', 'bodyLocation': 'Teeth' },
      { '@type': 'MedicalProcedure', 'name': 'Dental Implants', 'bodyLocation': 'Mouth' },
      { '@type': 'MedicalProcedure', 'name': 'Teeth Whitening', 'bodyLocation': 'Teeth' },
      { '@type': 'MedicalProcedure', 'name': 'Porcelain Veneers', 'bodyLocation': 'Teeth' },
      { '@type': 'MedicalProcedure', 'name': 'Invisalign Aligners', 'bodyLocation': 'Teeth' },
      { '@type': 'MedicalProcedure', 'name': 'Emergency Dental Care', 'bodyLocation': 'Mouth' },
      { '@type': 'MedicalProcedure', 'name': 'Family Dentistry', 'bodyLocation': 'Teeth' }
    ],
    'currenciesAccepted': 'USD',
    'paymentAccepted': 'Cash, Credit Card, Debit Card, Check, Insurance',
    'priceRange': '$$',
    'areaServed': [
      { '@type': 'City', 'name': 'Dallas' },
      { '@type': 'AdministrativeArea', 'name': 'Preston Hollow, Dallas' }
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '5.0',
      'bestRating': '5',
      'worstRating': '1',
      'ratingCount': '524',
      'reviewCount': '524'
    },
    'isAcceptingNewPatients': true,
    'smokingAllowed': false
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://preview.dental.website.zamdevai.com/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Services',
        'item': 'https://preview.dental.website.zamdevai.com/#services'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Why Choose Us',
        'item': 'https://preview.dental.website.zamdevai.com/#about'
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Dentists',
        'item': 'https://preview.dental.website.zamdevai.com/#dentists'
      },
      {
        '@type': 'ListItem',
        'position': 5,
        'name': 'Contact',
        'item': 'https://preview.dental.website.zamdevai.com/#contact'
      }
    ]
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" type="image/png" href="/images/Serene Dental Aesthetics.png" />
        <link rel="apple-touch-icon" href="/images/Serene Dental Aesthetics.png" />
        <meta name="theme-color" content="#002d5b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="bg-bg-light text-slate-900 font-display antialiased overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#002d5b] focus:text-white focus:px-6 focus:py-3 focus:rounded-lg focus:font-bold focus:shadow-xl focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
        <noscript>
          <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'var(--font-display), sans-serif' }}>
            <h1>Dallas Dental Care</h1>
            <p>Premium dental care in Dallas, Texas. Please enable JavaScript to view this website.</p>
            <p>Call us: <a href="tel:2145550187">(214) 555-0187</a></p>
          </div>
        </noscript>
      </body>
    </html>
  )
}
