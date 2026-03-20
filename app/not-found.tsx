import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found — Sainte-Patrie',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="hero" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1>404.</h1>
      <p className="subheading">This page doesn&rsquo;t exist.</p>
      <p className="subheading-note">
        The page you&rsquo;re looking for may have moved or never existed.
        Return to the homepage or navigate from the menu above.
      </p>
      <Link className="cta" href="/">Back to Home &rarr;</Link>
    </div>
  )
}
