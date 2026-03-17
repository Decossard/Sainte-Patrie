'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function onHover(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.classList.add('hovered')
}

function onUnhover(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.classList.remove('hovered')
}

export default function Header() {
  const pathname = usePathname()

  return (
    <header>
      <div className="container">
        <Link href="/" className="site-name" onMouseEnter={onHover} onMouseLeave={onUnhover}>
          Sainte-Patrie
        </Link>
        <nav>
          <Link href="/team" className={pathname === '/team' ? 'active' : undefined} onMouseEnter={onHover} onMouseLeave={onUnhover}>The Team</Link>
          <Link href="/founders" className={pathname === '/founders' ? 'active' : undefined} onMouseEnter={onHover} onMouseLeave={onUnhover}>Join Us</Link>
          <a href="mailto:contact@sainte-patrie.com" onMouseEnter={onHover} onMouseLeave={onUnhover}>Contact</a>
          <Link href="/faq" className={pathname === '/faq' ? 'active' : undefined} onMouseEnter={onHover} onMouseLeave={onUnhover}>FAQ</Link>
        </nav>
      </div>
    </header>
  )
}
