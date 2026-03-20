import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroScrollEffect from '@/components/HeroScrollEffect'

export const metadata: Metadata = {
  metadataBase: new URL('https://sainte-patrie.com'),
  authors: [{ name: 'DSDC — The Decossard Socio-Economic Development Corporation' }],
  openGraph: {
    images: [{ url: '/hero-map.jpg', width: 1200, alt: 'Historical map of northeastern Haiti' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/hero-map.jpg'],
  },
  other: {
    'geo.region': 'HT',
    'geo.placename': 'Haiti',
    'geo.position': '18.9712;-72.2852',
    'ICBM': '18.9712, -72.2852',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* © DSDC — The Decossard Socio-Economic Development Corporation | https://sainte-patrie.com */}
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <HeroScrollEffect />
        <Header />
        <main id="main-content">
          <div className="container">
            {children}
          </div>
        </main>
        <Footer />
        <Script id="google-translate-init" strategy="afterInteractive">{`
          window.googleTranslateElementInit = function() {
            new google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,fr,ht,es',
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            }, 'google_translate_element');
          }
        `}</Script>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
