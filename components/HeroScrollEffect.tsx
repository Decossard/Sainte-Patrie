'use client'

import { useEffect } from 'react'

export default function HeroScrollEffect() {
  useEffect(() => {
    const root = document.documentElement
    let rafId: number
    let ticking = false
    let threshold = 0

    function computeThreshold() {
      const hero = document.querySelector<HTMLElement>('.hero')
      threshold = hero
        ? hero.offsetTop + hero.offsetHeight
        : window.innerHeight
    }

    function update() {
      const progress = Math.min(Math.max(window.scrollY / threshold, 0), 1)
      root.style.setProperty('--topo-opacity', (progress * 0.03).toFixed(4))
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        rafId = requestAnimationFrame(update)
        ticking = true
      }
    }

    function onResize() {
      computeThreshold()
      update()
    }

    computeThreshold()
    update()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(rafId)
      root.style.removeProperty('--topo-opacity')
    }
  }, [])

  return null
}
