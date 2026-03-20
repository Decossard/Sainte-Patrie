'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const FILL_DISTANCE = 160 // px over which background fades in

export default function Header() {
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let rafId: number
    let ticking = false

    function update() {
      const fill = Math.min(window.scrollY / FILL_DISTANCE, 1)
      headerRef.current?.style.setProperty('--header-fill', fill.toFixed(3))
      setScrolled(fill > 0.6)
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
    <header ref={headerRef} className={scrolled ? 'header-scrolled' : undefined}>
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
