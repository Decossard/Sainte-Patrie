// © DSDC — The Decossard Socio-Economic Development Corporation
// https://sainte-patrie.com

import type { Metadata } from 'next'
import Script from 'next/script'
import SurveyForm from './SurveyForm'

export const metadata: Metadata = {
  title: 'Survey — Sainte-Patrie | Share Your Perspective on Haiti's Future',
  description: 'Six questions to help us understand who is paying attention to Sainte-Patrie and why. No account required, no personal data collected.',
  robots: { index: false, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Sainte-Patrie',
    title: 'Survey — Sainte-Patrie | Share Your Perspective on Haiti's Future',
    description: 'Six questions to help us understand who is paying attention to Sainte-Patrie and why. No account required, no personal data collected.',
    url: 'https://sainte-patrie.com/survey',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Survey — Sainte-Patrie | Share Your Perspective on Haiti's Future',
    description: 'Six questions to help us understand who is paying attention to Sainte-Patrie and why.',
  },
  alternates: { canonical: 'https://sainte-patrie.com/survey' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Survey — Sainte-Patrie',
  url: 'https://sainte-patrie.com/survey',
  description: 'Six questions to help us understand who is paying attention to Sainte-Patrie and why. No account required, no personal data collected.',
  publisher: { '@type': 'Organization', name: 'DSDC', url: 'https://sainte-patrie.com' },
}

export default function Survey() {
  return (
    <>
      <Script id="schema-survey" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="hero">
        <h1>Six Questions.</h1>
        <p className="subheading">
          These six questions help us understand who is following Sainte-Patrie and why. We collect your name, email address, and answers &mdash; nothing beyond that.
        </p>
      </div>
      <SurveyForm />
    </>
  )
}
