import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Samuel Pulgarin | Desarrollador de Software',
  description: 'Portafolio de Samuel Pulgarin - Desarrollador de Software Full-Stack con experiencia en React.js, Next.js, Django, PostgreSQL y mas.',
  keywords: ['Samuel Pulgarin', 'Desarrollador', 'Software', 'React', 'Next.js', 'Full-Stack', 'Portfolio'],
  authors: [{ name: 'Samuel Pulgarin' }],
  openGraph: {
    title: 'Samuel Pulgarin | Desarrollador de Software',
    description: 'Portafolio de Samuel Pulgarin - Desarrollador Full-Stack',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
