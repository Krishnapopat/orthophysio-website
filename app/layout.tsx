import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OrthoPhysio Equipments - Professional Physiotherapy Equipment',
  description: 'Leading manufacturer of high-quality physiotherapy equipment for rehabilitation centers, hospitals, and clinics. Specialized equipment for cerebral palsy, hand therapy, and comprehensive rehabilitation.',
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/logo.jpeg', sizes: '180x180', type: 'image/jpeg' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' }
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=4" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico?v=4" type="image/x-icon" />
        <link rel="icon" href="/favicon-16x16.png?v=4" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png?v=4" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-192x192.png?v=4" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.jpeg?v=4" sizes="180x180" />
        <link rel="apple-touch-icon" href="/favicon-192x192.png?v=4" sizes="192x192" />
        <meta name="msapplication-TileImage" content="/favicon-192x192.png?v=4" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
