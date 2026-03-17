import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found — Sainte-Patrie',
}

export default function NotFound() {
  return (
    <>
      <h1>404.</h1>

      <p className="subheading">This page doesn&rsquo;t exist.</p>

      <hr className="divider" />

      <p>
        The page you&rsquo;re looking for may have moved or never existed.
        You can return to the homepage or browse the site from the header above.
      </p>

      <Link className="cta" href="/">Back to Home &rarr;</Link>
    </>
  )
}
