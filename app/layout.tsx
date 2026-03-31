import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: '--font-sans' });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Formación Next.js en Español | Aprende Vibe Coding en 3 Horas | $297 | NJ · NY',
  description: 'Taller intensivo en vivo para latinos en USA. Aprende a construir y deployar landing pages profesionales con Next.js 15 y el método Vibe Coding. 3 horas de formación real. De cero a producción. Solo 50 estudiantes. $297 Early Bird. Garantía total.',
  generator: 'v0.app',
  keywords: ['Next.js', 'Vibe Coding', 'landing page', 'taller en vivo', 'latinos USA', 'NJ NY', 'freelance', 'desarrollo web', 'emprendimiento'],
  authors: [{ name: 'VibeLaunch' }],
  openGraph: {
    title: 'Formación Next.js en Español | Aprende Vibe Coding en 3 Horas | $297',
    description: 'Taller intensivo en vivo para latinos en USA. De cero a producción en 3 horas. Solo 50 estudiantes. $297 Early Bird. Garantía total.',
    type: 'website',
    url: 'https://vibelaunch.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formación Next.js en Español | Vibe Coding en 3 Horas',
    description: 'Taller intensivo en vivo para latinos en USA. De cero a producción. Solo 50 cupos. $297.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_geist.variable} ${_geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
