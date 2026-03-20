// © DSDC — The Decossard Socio-Economic Development Corporation
// https://sainte-patrie.com

import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import HeroBg from '@/components/HeroBg'

export const metadata: Metadata = {
  title: 'Privacy Policy — Sainte-Patrie | DSDC',
  description: 'Privacy policy for Sainte-Patrie, operated by DSDC. Learn what data we collect, how we use it, and your rights.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://sainte-patrie.com/privacy' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy — Sainte-Patrie',
  url: 'https://sainte-patrie.com/privacy',
  description: 'Privacy policy for Sainte-Patrie, operated by DSDC — The Decossard Socio-Economic Development Corporation.',
  publisher: {
    '@type': 'Organization',
    name: 'DSDC — The Decossard Socio-Economic Development Corporation',
    url: 'https://sainte-patrie.com',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@sainte-patrie.com',
      contactType: 'customer support',
    },
  },
}

export default function Privacy() {
  return (
    <>
      <Script id="schema-privacy" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="hero">
        <HeroBg src="/hero-privacy.jpg" opacity={0.13} objectPosition="center center" />
        <h1>Privacy Policy.</h1>

        <p className="subheading">
          We collect limited information, only when you choose to share it. This page explains exactly what, why, and how.
        </p>
      </div>

      <hr className="divider" />

      <h2>Who We Are</h2>
      <p>
        This website is operated by DSDC, a Haitian-founded development corporation and the organization behind the Sainte-Patrie city project. For any questions about this policy or your data, contact us at <a href="mailto:contact@sainte-patrie.com">contact@sainte-patrie.com</a>.
      </p>

      <hr className="divider" />

      <h2>What We Collect</h2>
      <p>
        We collect personal information only when you voluntarily submit it through our survey form. This includes:
      </p>
      <ul className="bullet-list">
        <li>Your full name</li>
        <li>Your email address</li>
        <li>Your responses to the survey questions</li>
      </ul>
      <p>
        We do not collect any other personal data. This website sets no cookies, uses no analytics tools, and contains no tracking pixels or third-party advertising scripts. If you only browse the site without submitting a form, no information about you is collected.
      </p>

      <hr className="divider" />

      <h2>How We Collect It</h2>
      <p>
        Form submissions are handled by Formspree (formspree.io), a third-party form processing service. When you submit the survey, your data passes through Formspree&rsquo;s infrastructure before being delivered to us by email. Formspree&rsquo;s own privacy policy governs their handling of this data during transmission.
      </p>
      <p>
        We do not operate our own data servers. We receive your submission as an email and store it within our email system.
      </p>

      <hr className="divider" />

      <h2>Why We Collect It</h2>
      <p>
        We collect your name and email address to identify you and, where appropriate, follow up with you about the Sainte-Patrie project. Your survey responses help us understand who is paying attention to the project and why &mdash; specifically the concerns, priorities, and experiences of the Haitian diaspora.
      </p>
      <p>
        We do not use your information for marketing unrelated to Sainte-Patrie, and we do not share, sell, or transfer your personal information to any third party for commercial purposes.
      </p>

      <hr className="divider" />

      <h2>How Long We Keep It</h2>
      <p>
        We retain form submission data for as long as the Sainte-Patrie project is active and the information remains relevant to our work. If you request deletion of your data, we will remove it within 30 days.
      </p>

      <hr className="divider" />

      <h2>Who Has Access</h2>
      <p>
        Only members of the DSDC team directly involved in the Sainte-Patrie project have access to submitted data. Access is limited to those who need it to follow up with interested parties or to analyze project interest.
      </p>

      <hr className="divider" />

      <h2>Your Rights</h2>
      <p>
        Regardless of where you are located, you have the right to:
      </p>
      <ul className="bullet-list">
        <li>Request a copy of the personal data we hold about you</li>
        <li>Request correction of any inaccurate information</li>
        <li>Request deletion of your data at any time</li>
        <li>Withdraw your consent to be contacted</li>
        <li>Object to how your data is being used</li>
      </ul>
      <p>
        To exercise any of these rights, send a request to <a href="mailto:contact@sainte-patrie.com">contact@sainte-patrie.com</a>. We will respond within 30 days.
      </p>

      <hr className="divider" />

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy as the project evolves and our data practices change. The most recent version will always be available at this address. Material changes will be noted at the top of the page with an updated date.
      </p>
      <p style={{ fontSize: '0.88rem', color: 'var(--muted)', fontStyle: 'italic' }}>
        Last updated: March 2026
      </p>
    </>
  )
}
