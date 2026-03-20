import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Sainte-Patrie — A Haitian City Designed to Work",
  description: "Sainte-Patrie is Haiti's first planned city — a new urban development outside Port-au-Prince, designed for stable governance, reliable services, and a functioning economy. Led by Haitians, built for everyday life.",
  keywords: 'Haiti planned city, new city Haiti, charter city Haiti, Port-au-Prince, Haiti urban development, Haiti diaspora investment, Sainte-Patrie, DSDC, Haiti development project, new city Caribbean',
  openGraph: {
    type: 'website',
    siteName: 'Sainte-Patrie',
    title: "Sainte-Patrie — A Haitian City Designed to Work",
    description: "A new city in Haiti — designed to offer what Port-au-Prince cannot: stable governance, reliable services, and a functioning urban economy. Led by Haitians.",
    url: 'https://sainte-patrie.com/',
  },
  twitter: {
    card: 'summary',
    title: "Sainte-Patrie — A Haitian City Designed to Work",
    description: "A new city in Haiti — designed to offer what Port-au-Prince cannot: stable governance, reliable services, and a functioning urban economy.",
  },
  alternates: { canonical: 'https://sainte-patrie.com/' },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sainte-Patrie',
  url: 'https://sainte-patrie.com',
  description: "A new Haitian city designed for reliable services, safe neighborhoods, and long-term growth. Led by Haitians, prepared for alignment with Haiti's next legitimate government.",
  keywords: 'Haiti planned city, charter city Haiti, new city Haiti, Port-au-Prince, Haiti urban development, Sainte-Patrie',
  publisher: { '@type': 'Organization', name: 'DSDC', url: 'https://sainte-patrie.com' },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DSDC',
  description: 'Haitian-founded development corporation designing and developing Sainte-Patrie, Haiti\'s first planned city.',
  url: 'https://sainte-patrie.com',
  keywords: 'Haiti planned city, new city Haiti, Haiti development, Port-au-Prince, charter city Haiti',
  contactPoint: { '@type': 'ContactPoint', email: 'contact@sainte-patrie.com', contactType: 'general' },
  founder: { '@type': 'Person', name: 'McLynn H. L. Décossard', jobTitle: 'Founder', nationality: 'Haitian' },
}

const citySchema = {
  '@context': 'https://schema.org',
  '@type': 'City',
  '@id': 'https://sainte-patrie.com/#city',
  name: 'Sainte-Patrie',
  description: "Haiti's first planned city — a new urban development designed for stable governance, reliable infrastructure, and economic opportunity outside Port-au-Prince.",
  url: 'https://sainte-patrie.com',
  containedInPlace: { '@type': 'Country', name: 'Haiti', identifier: 'HT' },
  developer: { '@type': 'Organization', name: 'DSDC', url: 'https://sainte-patrie.com' },
}

export default function Home() {
  return (
    <>
      <Script id="schema-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Script id="schema-city" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

      <div className="hero">
        <div className="hero-bg" aria-hidden="true">
          <Image
            src="/hero-map.jpg"
            alt=""
            fill
            priority
            quality={90}
            style={{ objectFit: 'cover', objectPosition: '62% center', opacity: 0.2 }}
          />
        </div>

        <h1>A Haitian City<br />Designed to Work.</h1>

        <p className="subheading">
          Led by Haitians and designed for reliable services, safe neighborhoods, and long-term growth.
        </p>
        <p className="subheading-note">
          The project framework is already developed and is being prepared for future alignment with Haiti&rsquo;s next legitimate government.
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

      <hr className="divider" />

      <div className="page-links">
        <Link className="page-link" href="/faq">
          <span className="page-link-label">Learn more</span>
          <span className="page-link-title">Frequently Asked Questions</span>
          <span className="page-link-desc">Everything about the project &mdash; governance, services, economy, and how the city will work.</span>
        </Link>
        <Link className="page-link" href="/founders">
          <span className="page-link-label">Get involved</span>
          <span className="page-link-title">Become a Founding Institution</span>
          <span className="page-link-desc">For institutions ready to contribute before success is guaranteed.</span>
        </Link>
        <Link className="page-link" href="/team">
          <span className="page-link-label">Who we are</span>
          <span className="page-link-title">The Team</span>
          <span className="page-link-desc">The person who started this, and who is being brought in to build it.</span>
        </Link>
      </div>

      <hr className="divider" />

      <h2>Contact</h2>
      <address className="contact-grid">
        <div className="contact-row">
          <span className="contact-label">Mailing</span>
          <span className="contact-value">
            3801 N Capital of Texas Hwy, Ste. E240-3366<br />
            Austin, TX&nbsp;78746
          </span>
        </div>
        <div className="contact-row">
          <span className="contact-label">Email</span>
          <span className="contact-value">
            <a href="mailto:contact@sainte-patrie.com">contact@sainte-patrie.com</a>
          </span>
        </div>
        <div className="contact-row">
          <span className="contact-label">Phone</span>
          <span className="contact-value">
            <a href="tel:+17375372424">(737) 537-2424</a>
          </span>
        </div>
      </address>
    </>
  )
}
