// © DSDC — The Decossard Socio-Economic Development Corporation
// https://sainte-patrie.com

'use client'

import Image from 'next/image'
import { useState } from 'react'

interface HeroBgProps {
  src: string
  opacity?: number
  objectPosition?: string
}

export default function HeroBg({ src, opacity = 0.15, objectPosition = 'center center' }: HeroBgProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="hero-bg" aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        priority
        quality={90}
        onLoad={() => setLoaded(true)}
        style={{
          objectFit: 'cover',
          objectPosition,
          opacity: loaded ? opacity : 0,
          transition: 'opacity 1.4s ease',
        }}
      />
    </div>
  )
}
