import type { Metadata } from 'next'
import Script from 'next/script'
import FaqClient from './FaqClient'

export const metadata: Metadata = {
  title: 'FAQ — Sainte-Patrie | Haiti Planned City & Charter City Questions',
  description: 'Answers to the most common questions about Sainte-Patrie — Haiti\'s first planned city: governance, services, economy, Port-au-Prince, charter cities, diaspora participation, and implementation.',
  keywords: 'Haiti planned city FAQ, charter city Haiti, Port-au-Prince, new city Haiti, Haiti governance, Haiti urban development, Sainte-Patrie FAQ, DSDC',
  openGraph: {
    type: 'website',
    siteName: 'Sainte-Patrie',
    title: 'FAQ — Sainte-Patrie | Haiti Planned City Questions',
    description: "Answers to the most common questions about Sainte-Patrie — Haiti's first planned city: governance, services, Port-au-Prince, charter cities, and how the city will work.",
    url: 'https://sainte-patrie.com/faq',
  },
  twitter: {
    card: 'summary',
    title: 'FAQ — Sainte-Patrie | Haiti Planned City Questions',
    description: "Common questions about Sainte-Patrie — Haiti's first planned city: governance, services, Port-au-Prince, charter cities, and how the city will work.",
  },
  alternates: { canonical: 'https://sainte-patrie.com/faq' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Where will Sainte-Patrie be located?', acceptedAnswer: { '@type': 'Answer', text: "The city is planned for the northeast of Haiti, in the Grand Nord, a region with real assets in coastal geography, agricultural land, and proximity to Atlantic trade routes. The goal is to strengthen the region's capacity to attract private investment, expand economic opportunity, and build the institutional depth that allows growth to compound over time rather than remain concentrated in a single place." } },
    { '@type': 'Question', name: 'What is Sainte-Patrie?', acceptedAnswer: { '@type': 'Answer', text: "Sainte-Patrie is a new city being developed in Haiti with one practical purpose: to build an urban environment where institutions function reliably, services operate consistently, and economic opportunity can grow in a stable setting. The project focuses on designing governance, infrastructure, and a service-oriented economy together from the beginning. The goal is a functioning city that contributes to Haiti's long-term development by demonstrating that stable urban life is achievable outside of Port-au-Prince." } },
    { '@type': 'Question', name: 'Will Sainte-Patrie remain part of Haiti?', acceptedAnswer: { '@type': 'Answer', text: "Yes. Sainte-Patrie will remain fully part of Haiti and will operate under the country's constitutional and legal framework. National laws, national courts, and national sovereignty continue to apply." } },
    { '@type': 'Question', name: 'Is Sainte-Patrie a private city?', acceptedAnswer: { '@type': 'Answer', text: "No. Sainte-Patrie will not be a private city. The city will be built and operated through partnerships between public authorities and private operators, but authority over the city will not rest with private hands. Governance will be public. The legal framework will be Haitian." } },
    { '@type': 'Question', name: 'Is Sainte-Patrie a charter city like the one proposed by Paul Romer?', acceptedAnswer: { '@type': 'Answer', text: "No. Sainte-Patrie is not a charter city in the sense originally proposed by Paul Romer. Romer's concept often involved external administrative arrangements or international guarantors. Sainte-Patrie operates within Haiti's constitutional framework and under Haitian sovereignty. Authority remains with Haitian institutions and democratic municipal government." } },
    { '@type': 'Question', name: 'Will the city operate as a special economic zone?', acceptedAnswer: { '@type': 'Answer', text: "No. Sainte-Patrie is not intended to function as a traditional special economic zone. Special economic zones usually create separate regulatory regimes focused primarily on export manufacturing or tax incentives. Sainte-Patrie instead focuses on building a functioning city where institutions, services, and the local economy operate reliably, based on long-term urban development rather than a narrow enclave model." } },
    { '@type': 'Question', name: 'What kind of jobs will Sainte-Patrie create?', acceptedAnswer: { '@type': 'Answer', text: "Sainte-Patrie is designed to generate employment primarily through a service-oriented urban economy. Jobs are expected to emerge across sectors such as tourism, hospitality, healthcare, education, professional services, construction, retail, logistics, and digital services. A functioning city also creates continuous demand for small and medium-sized enterprises that support daily life. Jobs in a service economy tend to compound: more residents create more demand for services, which creates more employment, which attracts more residents." } },
  ],
}

export default function Faq() {
  return (
    <>
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FaqClient />
    </>
  )
}
