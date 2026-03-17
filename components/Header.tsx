'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header>
      <div className="container">
        <Link href="/" className="site-name">Sainte-Patrie</Link>
        <nav>
          <Link href="/team" className={pathname === '/team' ? 'active' : undefined}>The Team</Link>
          <Link href="/founders" className={pathname === '/founders' ? 'active' : undefined}>Join Us</Link>
          <a href="mailto:contact@sainte-patrie.com">Contact</a>
          <Link href="/faq" className={pathname === '/faq' ? 'active' : undefined}>FAQ</Link>
        </nav>
      </div>
    </header>
  )
}
