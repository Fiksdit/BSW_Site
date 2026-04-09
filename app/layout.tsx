import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Balanced State Wellness LLC | Yoga & Professional Development | Sedalia & Warrensburg, MO',
  description: 'Yoga classes, mindset training, breathwork, and consulting services in Sedalia and Warrensburg, MO. Led by Dr. Nikki Freeman, Ed.D. — YTT 200, Pilates & Enlifted certified.',
  keywords: [
    'yoga classes Sedalia MO',
    'yoga Warrensburg MO',
    'balanced state wellness',
    'Dr. Nikki Freeman',
    'mindset training',
    'breathwork',
    'professional development Missouri',
    'pilates Sedalia',
    'hot yoga Sedalia',
    'wellness consulting',
    'teambuilding workshops',
    'hatha yoga',
    'reformer pilates',
    'yoga instructor Sedalia',
  ],
  openGraph: {
    title: 'Balanced State Wellness LLC | Yoga & Professional Development',
    description: 'Yoga classes, mindset training, breathwork, and consulting in Sedalia and Warrensburg, MO. Led by Dr. Nikki Freeman, Ed.D.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Balanced State Wellness LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Balanced State Wellness LLC',
    description: 'Yoga classes and professional development in Sedalia & Warrensburg, MO.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
