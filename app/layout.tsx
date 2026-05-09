import type { Metadata } from 'next'
import '@fontsource/rajdhani/400.css'
import '@fontsource/rajdhani/600.css'
import '@fontsource/rajdhani/700.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import '@fontsource/ibm-plex-mono/700.css'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
