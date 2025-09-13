import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gym Slot - CRM + Mobile App for Fitness Instructors',
  description: 'The integrated CRM and mobile app solution for fitness, yoga, and small class instructors. Schedule classes, manage bookings, and sync everything seamlessly.',
  keywords: 'fitness CRM, yoga booking system, class scheduling, fitness instructor app, gym management',
  authors: [{ name: 'Breakfree Digital Agency' }],
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/logo.svg', type: 'image/svg+xml', sizes: '32x32' },
    ],
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Gym Slot - CRM + Mobile App for Fitness Instructors',
    description: 'The integrated CRM and mobile app solution for fitness, yoga, and small class instructors.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gym-dark text-white`}>
        {children}
      </body>
    </html>
  )
}
