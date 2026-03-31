'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

const FILL_DISTANCE = 160

export default function Header() {
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let rafId: number
    let ticking = false

    function update() {
      const fill = Math.min(window.scrollY / FILL_DISTANCE, 1)
      headerRef.current?.style.setProperty('--header-fill', fill.toFixed(3))
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
    <header ref={headerRef}>
      <div className="header-blur" aria-hidden="true" />
      <div className="container">
        <Link href="/" className="site-name">Sainte-Patrie</Link>
        <nav>
          <a href="mailto:contact@sainte-patrie.com">Contact</a>
        </nav>
      </div>
    </header>
  )
}
