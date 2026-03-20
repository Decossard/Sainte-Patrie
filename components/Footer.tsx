import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">

            {/* Brand + Contact */}
            <div className="footer-brand">
              <p className="footer-name">Sainte-Patrie</p>
              <p className="footer-tagline">A Haitian city designed to work.</p>
              <address className="footer-contact">
                <p>
                  3801 N Capital of Texas Hwy, Ste. E240-3366<br />
                  Austin, TX&nbsp;78746
                </p>
                <p>
                  <a href="mailto:contact@sainte-patrie.com">contact@sainte-patrie.com</a>
                </p>
                <p>
                  <a href="tel:+17375372424">(737)&nbsp;537-2424</a>
                </p>
              </address>
            </div>

            {/* Navigation */}
            <nav className="footer-nav" aria-label="Footer navigation">
              <Link href="/">Home</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/team">Team</Link>
              <Link href="/founders">Join Us</Link>
              <Link href="/survey">Survey</Link>
            </nav>

            {/* Meta */}
            <div className="footer-meta">
              <p className="footer-updated">Updated March 2026</p>
              <div className="footer-translate">
                <div id="google_translate_element" />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 DSDC. All rights reserved.</p>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
