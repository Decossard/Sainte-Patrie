'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let rafId: number
    let ticking = false

    function update() {
      setScrolled(window.scrollY > 40)
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        rafId = requestAnimationFrame(update)
        ticking = true
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <header className={scrolled ? 'header-scrolled' : undefined}>
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
