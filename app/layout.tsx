import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Courtney du Preez — Creative Director & Content Strategist',
  description:
    'Creative Director & Content Strategist specialising in sport, lifestyle and fashion brands. Based in Buenos Aires.',
  openGraph: {
    title: 'Courtney du Preez — Creative Director & Content Strategist',
    description:
      'Sport · Lifestyle · Fashion — Styled. Directed. Edited. Posted.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body className="bg-black text-white font-body antialiased">
        {children}
      </body>
    </html>
  )
}
