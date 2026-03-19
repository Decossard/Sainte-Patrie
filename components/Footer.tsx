import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>Sainte-Patrie &mdash; by DSDC</p>
        <p>Updated March 2026 &middot; <Link href="/privacy">Privacy</Link></p>
        <div className="footer-translate">
          <div id="google_translate_element" />
        </div>
      </div>
    </footer>
  )
}
