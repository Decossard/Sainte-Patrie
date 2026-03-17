import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'The Team — Sainte-Patrie | DSDC Haiti City Development',
  description: 'Sainte-Patrie is developed by DSDC, a Haitian-founded development corporation led by McLynn Décossard. Meet the team building Haiti\'s first planned city outside Port-au-Prince.',
  keywords: 'DSDC Haiti, McLynn Décossard, Haiti planned city, Haiti city development, Sainte-Patrie team, Port-au-Prince, Haiti urban development',
  openGraph: {
    type: 'website',
    siteName: 'Sainte-Patrie',
    title: 'The Team — Sainte-Patrie | DSDC Haiti City Development',
    description: "Sainte-Patrie is developed by DSDC, a Haitian-founded development corporation. Meet the team building Haiti's first planned city.",
    url: 'https://sainte-patrie.com/team',
  },
  twitter: {
    card: 'summary',
    title: 'The Team — Sainte-Patrie | DSDC Haiti City Development',
    description: 'DSDC is the Haitian-founded development corporation behind Sainte-Patrie — Haiti\'s first planned city. Meet the founder.',
  },
  alternates: { canonical: 'https://sainte-patrie.com/team' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'The Team — Sainte-Patrie',
  url: 'https://sainte-patrie.com/team',
  description: 'Sainte-Patrie is being developed by DSDC, a Haitian-founded development corporation.',
  about: {
    '@type': 'Person',
    name: 'McLynn Hyaad Lomeih Décossard',
    jobTitle: 'Founder, DSDC',
    nationality: 'Haitian',
    description: 'For nearly a decade McLynn helped Haitian families navigate relocation abroad, advising them through complex cross-border decisions. He applied that study to Haiti, developing the governance framework behind Sainte-Patrie from Haitian constitutional law and international municipal practice.',
    worksFor: { '@type': 'Organization', name: 'DSDC', url: 'https://sainte-patrie.com' },
  },
}

export default function Team() {
  return (
    <>
      <Script id="schema-team" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <h1>The Work Started Here.</h1>

      <p className="subheading">
        Sainte-Patrie is being developed by DSDC, a Haitian-founded development corporation. DSDC designed the governance framework behind the city, holds its institutional architecture, and is responsible for bringing the right partners, capital, and expertise together to build it.
      </p>

      <hr className="divider" />

      <h2>The Founder</h2>

      <div className="team-person">
        <p className="team-person-name">McLynn Hyaad Lomeih D.</p>
        <p className="team-person-role">Founder, DSDC</p>
        <p>
          McLynn is Haitian. For nearly a decade he helped Haitian families navigate relocation abroad, advising them through complex cross-border decisions. That work was a long study in what institutions have to look like for people to trust them. He applied that study to Haiti.
        </p>
        <p>
          Sainte-Patrie is the result. A governance framework built from Haitian constitutional law, international municipal practice, and a clear-eyed understanding of what has failed before and why.
        </p>
      </div>

      <div className="intent-box">
        <h3>If You Belong in This Room</h3>
        <p>
          Sainte-Patrie is at the stage where the right early involvement shapes everything that follows.
        </p>
        <p>
          If you have relevant expertise, capital, or institutional weight and want to understand more, reach out directly.
        </p>
        <a className="email-cta" href="mailto:contact@sainte-patrie.com">Get in Touch &rarr;</a>
      </div>
    </>
  )
}
