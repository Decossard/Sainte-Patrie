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
                  <a href="mailto:contact@sainte-patrie.com">contact@sainte-patrie.com</a>
                </p>
              </address>
            </div>

            {/* Translate — top right */}
            <div className="footer-translate-top">
              <div id="google_translate_element" />
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Sainte-Patrie. All rights reserved.</p>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
