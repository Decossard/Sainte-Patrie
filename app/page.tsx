// https://sainte-patrie.com

import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import HeroBg from '@/components/HeroBg'

export const metadata: Metadata = {
  title: "Sainte-Patrie — A Haitian City Designed to Work",
  description: "Sainte-Patrie is Haiti's first planned city — a new urban center outside Port-au-Prince, built for reliable services, safe neighborhoods, and long-term growth.",
  keywords: 'Haiti planned city, new city Haiti, Port-au-Prince, Haiti urban development, Haiti diaspora investment, Sainte-Patrie, Haiti city development, Haiti development project, second city Haiti, new city Caribbean',
  openGraph: {
    type: 'website',
    siteName: 'Sainte-Patrie',
    title: "Sainte-Patrie — A Haitian City Designed to Work",
    description: "A new Haitian city designed to offer what Port-au-Prince cannot: reliable services, safe neighborhoods, and a functioning urban economy. Led by Haitians.",
    url: 'https://sainte-patrie.com/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sainte-Patrie — A Haitian City Designed to Work",
    description: "A new Haitian city — built for reliable services, safe neighborhoods, and long-term growth outside Port-au-Prince.",
  },
  alternates: { canonical: 'https://sainte-patrie.com/' },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sainte-Patrie',
  url: 'https://sainte-patrie.com',
  description: "A new Haitian city designed for reliable services, safe neighborhoods, and long-term growth. Led by Haitians.",
  publisher: { '@type': 'Organization', name: 'Sainte-Patrie', url: 'https://sainte-patrie.com' },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sainte-Patrie',
  description: 'Haitian-founded initiative developing Sainte-Patrie, Haiti\'s first planned city.',
  url: 'https://sainte-patrie.com',
  contactPoint: { '@type': 'ContactPoint', email: 'contact@sainte-patrie.com', contactType: 'general' },
}

const citySchema = {
  '@context': 'https://schema.org',
  '@type': 'City',
  '@id': 'https://sainte-patrie.com/#city',
  name: 'Sainte-Patrie',
  description: "Haiti's first planned city — a new urban development designed for reliable infrastructure, quality services, and economic opportunity outside Port-au-Prince.",
  url: 'https://sainte-patrie.com',
  containedInPlace: { '@type': 'Country', name: 'Haiti', identifier: 'HT' },
  developer: { '@type': 'Organization', name: 'Sainte-Patrie', url: 'https://sainte-patrie.com' },
}

export default function Home() {
  return (
    <>
      <Script id="schema-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Script id="schema-city" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

      <div className="hero">
        <HeroBg src="/hero-map.jpg" opacity={0.2} objectPosition="62% center" />

        <h1>A Haitian City<br />Designed to Work.</h1>

        <p className="subheading">
          Led by Haitians and designed for reliable services, safe neighborhoods, and long-term growth.
        </p>
        <p className="subheading-note">
          The project framework is developed. The team is building the partnerships needed to move forward.
        </p>

        <Link className="cta" href="/survey">Take the Survey &rarr;</Link>

      </div>

      <hr className="divider" />

      <h2>For Haiti, By Design</h2>
      <p>
        Too often, when a place in Haiti is clean, organized,
        or functional, people say, &ldquo;This doesn&rsquo;t feel like Haiti.&rdquo;
        That mindset shows how low expectations have become. It&rsquo;s time to
        raise them. This city is meant to work from day one, for everyone.
      </p>
      <p>
        Port-au-Prince has carried the country&rsquo;s urban weight alone for too long &mdash; one city absorbing everything, while the rest of Haiti has been left without a functioning alternative. Sainte-Patrie exists to change that.
      </p>

      <div className="features">
        <div className="feature">
          <span className="feature-label">Planned</span>
          <p>
            Most cities in Haiti weren&rsquo;t planned. They just happened. Neighborhoods sprawl.
            Roads don&rsquo;t connect. Services come late, if they come at all. Instead,
            Sainte-Patrie will follow a real plan: clear zoning, mapped utilities, and
            coordinated growth. No improvising. No patchwork. Just a city that works the
            way it should.
          </p>
        </div>

        <div className="feature">
          <span className="feature-label">Secured</span>
          <p>
            In many places, people rush home before dark. Safety is uncertain, and danger
            is part of the routine. Here, safety won&rsquo;t rely on luck. Streets will be lit.
            Public spaces will be open and looked after. You should feel safe walking home.
            In Sainte-Patrie, you will.
          </p>
        </div>

        <div className="feature">
          <span className="feature-label">Powered</span>
          <p>
            Everyone in Haiti knows blackouts. Most homes rely on inverters, batteries, or
            fuel to get by. In Sainte-Patrie, power will be stable and always on &mdash; no
            outages, no guessing. It&rsquo;ll be part of the system, not something added later.
          </p>
        </div>

        <div className="feature">
          <span className="feature-label">Supplied</span>
          <p>
            A lot of families boil or buy their water. Some haul it by bucket. Clean,
            running tap water is rare. Here, water will be drinkable, pressurized, and
            reliably available in every home, with no interruptions.
          </p>
        </div>

        <div className="feature">
          <span className="feature-label">Maintained</span>
          <p>
            In most cities, trash piles up and public areas get ignored. Here, cleanliness
            is part of the system. Waste will be picked up regularly. Streets and parks will
            stay usable, because someone&rsquo;s responsible.
          </p>
        </div>

        <div className="feature">
          <span className="feature-label">Shaded</span>
          <p>
            Many cities don&rsquo;t make space for nature. Trees are cut. Parks are left to rot.
            In Sainte-Patrie, green space will be part of the layout from day one. They&rsquo;ll
            cool the streets, soak up rain, and make daily life better. They won&rsquo;t be
            decorations. They&rsquo;ll be part of how the city works.
          </p>
        </div>

        <div className="feature">
          <span className="feature-label">Serviced</span>
          <p>
            Too often, people are forced to fix what should already work: roads, power, water,
            everything. That weight falls on individuals, not systems. Sainte-Patrie is built
            to change that by making infrastructure work without constant fixes. The goal: a
            dependable, high standard of living, on par with what people expect in developed
            countries. In Sainte-Patrie, the basics won&rsquo;t just function. They&rsquo;ll last.
          </p>
        </div>
      </div>

      <h2>For Results, By Design</h2>
      <p>
        This isn&rsquo;t a dream. It&rsquo;s a plan: concrete, phased, and led by people who know
        the country and are ready to build. It won&rsquo;t happen overnight, but the standard
        is already set. It&rsquo;s proof we don&rsquo;t have to settle. Not anymore.
      </p>

      <Link className="cta" href="/survey">Take the Survey &rarr;</Link>

    </>
  )
}
