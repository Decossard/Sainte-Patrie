import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://sainte-patrie.com'),
  authors: [{ name: 'DSDC' }],
  other: {
    'geo.region': 'HT',
    'geo.placename': 'Haiti',
    'geo.position': '18.9712;-72.2852',
    'ICBM': '18.9712, -72.2852',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">
          <div className="container">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
