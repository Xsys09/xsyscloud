import type { Metadata } from 'next'
import { Rajdhani, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const rajdhani = Rajdhani({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Aladdin // Xsys — IT Engineer & Developer',
    template: '%s | Xsys',
  },
  description:
    'IT Systems Engineer and Service Desk Team Leader based in Iloilo, Philippines. Writing about infrastructure, cloud, and automation.',
  keywords: [
    'IT Engineer', 'Systems Administrator', 'Next.js',
    'PowerShell', 'Azure', 'Cloud', 'Philippines', 'Iloilo',
  ],
  authors: [{ name: 'Aladdin', url: 'https://xsyscloud.vercel.app' }],
  openGraph: {
    title: 'Aladdin // Xsys',
    description: 'IT Systems Engineer & Developer',
    url: 'https://xsyscloud.vercel.app',
    siteName: 'XsysCloud',
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aladdin // Xsys',
    description: 'IT Systems Engineer & Developer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${ibmPlexMono.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
