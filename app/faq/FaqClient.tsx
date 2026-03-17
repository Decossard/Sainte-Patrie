'use client'

import { useRef, useState } from 'react'

function FaqItem({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <details className="faq-item">
      <summary className="faq-question">{question}</summary>
      <div className="faq-body">{children}</div>
    </details>
  )
}

export default function FaqClient() {
  const [expanded, setExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  function toggleAll() {
    const details = containerRef.current?.querySelectorAll('details.faq-item')
    if (!details) return
    const anyOpen = Array.from(details).some((d) => (d as HTMLDetailsElement).open)
    details.forEach((d) => { (d as HTMLDetailsElement).open = !anyOpen })
    setExpanded(!anyOpen)
  }

  return (
    <div ref={containerRef}>
      <h1>Frequently Asked<br />Questions.</h1>

      <p className="subheading">
        Straightforward answers about what Sainte-Patrie is,
        how it works, and what it means for Haiti.
      </p>

      <nav className="toc" aria-label="Jump to section">
        <p className="toc-label">Jump to</p>
        <ol className="toc-list">
          <li><a href="#about">About the Project</a></li>
          <li><a href="#kind-of-city">What Kind of City This Is</a></li>
          <li><a href="#people">What This Means for People</a></li>
          <li><a href="#services">Services and Quality of Life</a></li>
          <li><a href="#governance">Governance and Legal Structure</a></li>
          <li><a href="#economy">Economy, Jobs, and Private Sector</a></li>
          <li><a href="#national">National Role and Decentralization</a></li>
          <li><a href="#inclusion">Inclusion and Equal Opportunity</a></li>
          <li><a href="#diaspora">Diaspora Participation</a></li>
          <li><a href="#environment">Environment and Climate</a></li>
          <li><a href="#implementation">Development and Implementation</a></li>
          <li><a href="#context">Context and Comparisons</a></li>
        </ol>
      </nav>

      <button className="faq-toggle-btn" onClick={toggleAll} aria-expanded={expanded} aria-controls="faq-sections">
        {expanded ? 'Collapse all' : 'Expand all'}
      </button>

      <div id="faq-sections">

      {/* 1. About the Project */}
      <section id="about">
        <p className="faq-section-title">1 &mdash; About the Project</p>

        <FaqItem question="What is Sainte-Patrie?">
          <p className="faq-answer">Sainte-Patrie is a new city being developed in Haiti with one practical purpose: to build an urban environment where institutions function reliably, services operate consistently, and economic opportunity can grow in a stable setting.</p>
          <p className="faq-answer">The project focuses on designing governance, infrastructure, and a service-oriented economy together from the beginning, rather than adding them piecemeal as the city grows. Most urban problems in developing cities come from systems that were never coordinated in the first place.</p>
          <p className="faq-answer">The goal is straightforward: a functioning city that contributes to Haiti&rsquo;s long-term development by demonstrating that stable urban life is achievable outside of Port-au-Prince.</p>
        </FaqItem>

        <FaqItem question="Why is Sainte-Patrie being developed?">
          <p className="faq-answer">The reason for building Sainte-Patrie is concrete: Haiti needs a second city with the institutional reliability to support stable economic and civic life. This project is designed to create one.</p>
          <p className="faq-answer">Haiti&rsquo;s capital has absorbed a disproportionate share of the country&rsquo;s population, investment, and public resources over many decades. That concentration has placed real strain on infrastructure in Port-au-Prince while leaving other parts of the country underserved. Building a new urban center designed around functioning systems provides an opportunity to show how cities can operate more effectively elsewhere.</p>
          <p className="faq-answer">The project therefore aims to strengthen Haiti by expanding the geography of opportunity and demonstrating what accountable local governance looks like in practice.</p>
        </FaqItem>

        <FaqItem question="Why build a new city instead of fixing existing ones?">
          <p className="faq-answer">Improving existing Haitian cities is necessary and important. Sainte-Patrie is not a substitute for that work and is not intended to draw attention or resources away from it.</p>
          <p className="faq-answer">Building from the ground up offers a different kind of opportunity. When a city is designed before its institutions, infrastructure, and governance systems are in place, those systems can be coordinated from the start rather than reformed after decades of accumulated complexity. That is not a criticism of existing cities. It is simply a different entry point.</p>
          <p className="faq-answer">When functioning urban systems exist somewhere in Haiti, the question shifts from whether reliable cities are possible to how that approach can be replicated elsewhere. Sainte-Patrie is designed to answer the first part of that question.</p>
        </FaqItem>

        <FaqItem question="What approach guides the development of Sainte-Patrie?">
          <p className="faq-answer">The project is guided by a simple principle: safety of every kind is the foundation that everything else is built on.</p>
          <p className="faq-answer">Safety allows people to plan. Planning requires certainty about what the rules are and what tomorrow holds. Certainty produces predictability. And predictability is what builds the kind of confidence that leads people to invest, to stay, and to build. Sainte-Patrie is designed around that chain, in sequence, because confidence cannot be manufactured directly. It has to follow from conditions that earn it.</p>
          <p className="faq-answer">This is why the city is designed to be safe not only physically but legally, economically, and civically. A resident should know what to expect from government. A business should be able to rely on its contracts. A family should be able to plan ahead. When those conditions hold, confidence follows on its own.</p>
        </FaqItem>
      </section>

      {/* 2. What Kind of City This Is */}
      <section id="kind-of-city">
        <p className="faq-section-title">2 &mdash; What Kind of City This Is</p>

        <FaqItem question="Is Sainte-Patrie a private city?">
          <p className="faq-answer">No. Sainte-Patrie will not be a private city.</p>
          <p className="faq-answer">The city will be built and operated through partnerships between public authorities and private operators, but authority over the city will not rest with private hands. Governance will be public. The legal framework will be Haitian. The city will belong to its residents, not to its developers.</p>
          <p className="faq-answer">That distinction matters because it determines who the city is ultimately accountable to.</p>
        </FaqItem>

        <FaqItem question="Will Sainte-Patrie remain part of Haiti?">
          <p className="faq-answer">Yes. Sainte-Patrie will remain fully part of Haiti and will operate under the country&rsquo;s constitutional and legal framework.</p>
          <p className="faq-answer">The city is designed to work in partnership with the Haitian state and its institutions. National laws, national courts, and national sovereignty continue to apply. Sainte-Patrie is therefore not a separate jurisdiction or an autonomous territory.</p>
          <p className="faq-answer">Haitian sovereignty is not divided by Sainte-Patrie&rsquo;s creation. The city adds to what Haiti can offer its citizens; it does not operate outside the national framework that governs every city in the country.</p>
        </FaqItem>

        <FaqItem question={'Is Sainte-Patrie a \u201Ccharter city\u201D like the one proposed by Paul Romer?'}>
          <p className="faq-answer">No. Sainte-Patrie is not a charter city in the sense originally proposed by Paul Romer.</p>
          <p className="faq-answer">Romer&rsquo;s concept often involved external administrative arrangements or international guarantors. Sainte-Patrie is designed differently. It operates within Haiti&rsquo;s constitutional framework and under Haitian sovereignty. While the project focuses on strong local governance and clear institutional rules, authority remains with Haitian institutions and democratic municipal government.</p>
        </FaqItem>

        <FaqItem question="Will the city operate as a special economic zone?">
          <p className="faq-answer">No. Sainte-Patrie is not intended to function as a traditional special economic zone.</p>
          <p className="faq-answer">Special economic zones usually create separate regulatory regimes focused primarily on export manufacturing or tax incentives. Sainte-Patrie instead focuses on building a functioning city where institutions, services, and the local economy operate reliably. The goal is long-term urban development based on stable institutions and a service-oriented economy rather than a narrow enclave model.</p>
        </FaqItem>
      </section>

      {/* 3. What This Means for People */}
      <section id="people">
        <p className="faq-section-title">3 &mdash; What This Means for People</p>

        <FaqItem question="What kind of jobs will Sainte-Patrie create?">
          <p className="faq-answer">Sainte-Patrie is designed to generate employment primarily through a service-oriented urban economy.</p>
          <p className="faq-answer">As the city grows, jobs are expected to emerge across sectors such as tourism, hospitality, healthcare, education, professional services, construction, retail, logistics, and digital services. A functioning city also creates continuous demand for small and medium-sized enterprises that support daily life, from local commerce to technical services.</p>
          <p className="faq-answer">Jobs in a service economy tend to compound: more residents create more demand for services, which creates more employment, which attracts more residents. Sainte-Patrie is designed to start that cycle.</p>
        </FaqItem>

        <FaqItem question="What types of homes will be built in Sainte-Patrie?">
          <p className="faq-answer">Sainte-Patrie is planned as a city of safe, walkable neighborhoods with homes of different sizes and price levels.</p>
          <p className="faq-answer">Residential areas will include apartments, townhouses, and family homes organized around streets, public spaces, and local services. The objective is to create neighborhoods where people can live close to work, schools, healthcare, and everyday amenities. Designing housing in this way helps support community life while allowing the city to grow in an orderly and accessible manner.</p>
        </FaqItem>

        <FaqItem question="Will housing be available for both purchase and rent?">
          <p className="faq-answer">Yes. Housing in Sainte-Patrie is expected to include both homes for purchase and homes for rent. Providing both options allows residents with different financial situations and life stages to find suitable housing. A mix of housing options helps ensure that the city remains accessible and adaptable as its population grows.</p>
        </FaqItem>

        <FaqItem question="Who will be able to live in Sainte-Patrie?">
          <p className="faq-answer">Sainte-Patrie is intended to be a public city open to people who choose to live and work there.</p>
          <p className="faq-answer">Residents may include Haitian families, professionals, students, entrepreneurs, workers, and members of the Haitian diaspora who wish to return or spend time in the country. As in any city, people who live in Sainte-Patrie will be expected to follow the laws and regulations that apply within the city. What makes a city&rsquo;s population diverse is not selection but openness.</p>
        </FaqItem>

        <FaqItem question="How will the city support families and everyday life?">
          <p className="faq-answer">Sainte-Patrie is designed to make everyday life more predictable for families.</p>
          <p className="faq-answer">Service operators in the city are expected to work under contracts with defined standards. When a family moves to Sainte-Patrie, the services they depend on are not provided on a best-effort basis. They are delivered against written commitments that the city has the authority to enforce. Predictability is what turns a place to live into a place to build a life.</p>
        </FaqItem>
      </section>

      {/* 4. Services and Quality of Life */}
      <section id="services">
        <p className="faq-section-title">4 &mdash; Services and Quality of Life</p>

        <FaqItem question="How will Sainte-Patrie provide reliable basic services?">
          <p className="faq-answer">Sainte-Patrie is designed so that basic services are planned and operated as integrated urban systems from the outset, rather than installed in isolation as demand arises.</p>
          <p className="faq-answer">Most service failures in rapidly growing cities happen when infrastructure is built without coordination between water, power, waste, and mobility networks. By designing these systems together from the start, the city can reduce the cycle of breakdown and neglect that tends to follow unplanned urban growth. Service operators work under performance contracts with defined standards for uptime and quality. Reliability is enforced rather than assumed.</p>
        </FaqItem>

        <FaqItem question="What kinds of services will the city provide?">
          <p className="faq-answer">Like any functioning city, Sainte-Patrie is expected to provide the essential services that support everyday life.</p>
          <p className="faq-answer">These include water supply, electricity, waste management, transportation, public safety, healthcare access, education, administrative services, and digital connectivity. Public spaces, parks, and community facilities also form part of the urban environment. None of these services works well in isolation. The value of each is tied to the others functioning at the same time. That is why Sainte-Patrie is designed to deliver them as a coordinated whole.</p>
        </FaqItem>

        <FaqItem question="How will residents access government services and administration?">
          <p className="faq-answer">Public administration in Sainte-Patrie is designed to be accessible through clear, standardized, and time-bound procedures.</p>
          <p className="faq-answer">Tasks such as permits, licenses, registrations, documentation, and payments are intended to follow one predictable administrative process: the same steps, the same fees, the same timeline, regardless of who is asking. There is no need to navigate multiple offices or rely on personal connections to get things done. A city becomes more trustworthy when residents can deal with government as a predictable system rather than as a personal negotiation.</p>
        </FaqItem>

        <FaqItem question="How will healthcare services work in the city?">
          <p className="faq-answer">Residents of Sainte-Patrie will have access to healthcare facilities within the city, rather than having to travel to a distant center or navigate an unpredictable system.</p>
          <p className="faq-answer">The model emphasizes primary care and prevention so that routine health needs are addressed locally and promptly. As the city grows, healthcare capacity is designed to expand alongside the population. Reliable healthcare strengthens family stability and helps ensure that health concerns do not become barriers to participation in education, work, and community life.</p>
        </FaqItem>

        <FaqItem question="How will Sainte-Patrie support education, skills development, and talent retention?">
          <p className="faq-answer">Education in Sainte-Patrie is designed to connect directly with real opportunities rather than leaving students to navigate a gap between school and employment.</p>
          <p className="faq-answer">Schools and training programs are expected to align with the practical needs of the city&rsquo;s economy, preparing students for roles in services, healthcare, administration, technology, and other sectors that support urban life. When the city, its schools, and its economy reinforce one another, talent is more likely to remain and contribute to the city&rsquo;s long-term development.</p>
        </FaqItem>

        <FaqItem question="How will security and policing work in Sainte-Patrie?">
          <p className="faq-answer">Security and policing in Sainte-Patrie will remain under Haiti&rsquo;s national legal and institutional framework. The Haitian National Police will continue to play the central role in maintaining law and order, just as they do in other cities across the country.</p>
          <p className="faq-answer">The city&rsquo;s role is to create the physical and administrative conditions that allow national policing to function well: well-lit streets, orderly public spaces, and an administration that residents can approach through predictable channels.</p>
        </FaqItem>
      </section>

      {/* 5. Governance and Legal Structure */}
      <section id="governance">
        <p className="faq-section-title">5 &mdash; Governance and Legal Structure</p>

        <FaqItem question="What will be the legal status of Sainte-Patrie?">
          <p className="faq-answer">Sainte-Patrie is intended to be formally established as a commune under Haitian law, with the same legal standing as other municipalities in the country.</p>
          <p className="faq-answer">This means it will be responsible for its own services and will operate under the same laws that apply to every other commune in Haiti. Nothing about this structure requires special legislation or constitutional changes. That simplicity is deliberate. A legal design that is straightforward to understand is also straightforward to hold accountable.</p>
        </FaqItem>

        <FaqItem question="Who will govern the city?">
          <p className="faq-answer">Sainte-Patrie will be governed by a locally elected municipal government, just like other communes in Haiti. Residents will elect their municipal authorities, who will set policy, represent the population, and define the direction of the commune. A government chosen by the people it serves has a direct stake in making the city work for them.</p>
        </FaqItem>

        <FaqItem question="How is Sainte-Patrie designed to prevent institutional breakdown over time?">
          <p className="faq-answer">Public institutions in Sainte-Patrie are built around clear rules that continue to function even when leadership changes.</p>
          <p className="faq-answer">The root cause of institutional breakdown is usually that functions depend on particular people rather than on written procedures. Sainte-Patrie addresses this by defining administrative procedures, service responsibilities, and operational standards in advance. When a new administration takes office, it inherits those procedures already in operation. Changing leadership does not restart the system.</p>
        </FaqItem>

        <FaqItem question="How will the city reduce corruption and favoritism in public administration?">
          <p className="faq-answer">Most administrative decisions in Sainte-Patrie are structured so they do not depend on personal discretion.</p>
          <p className="faq-answer">Permits, licenses, registrations, and other public procedures are intended to follow fixed requirements, published fees, and defined timelines. When an application meets the stated requirements, it should be approved. When authorities fail to act within the required timeframe, approval can occur automatically. By replacing discretionary processes with rule-based and auditable procedures, the city aims to make corruption structurally harder rather than merely punishable after the fact.</p>
        </FaqItem>

        <FaqItem question="How will the rule of law and justice work in Sainte-Patrie?">
          <p className="faq-answer">The rule of law in Sainte-Patrie will remain fully grounded in Haiti&rsquo;s national legal system. Haitian law applies in the city just as it does in other communes, and residents and businesses remain subject to the country&rsquo;s courts and legal institutions. There is no separate legal framework, no private arbitration system, and no foreign jurisdiction.</p>
          <p className="faq-answer">Judicial services are expected to be present locally as the city develops. For a small business pursuing an unpaid contract or a resident navigating a property question, a functioning local court presence is what turns legal rights from theoretical to real.</p>
        </FaqItem>
      </section>

      {/* 6. Economy, Jobs, and Private Sector Development */}
      <section id="economy">
        <p className="faq-section-title">6 &mdash; Economy, Jobs, and Private Sector Development</p>

        <FaqItem question="What kind of business environment does the city create?">
          <p className="faq-answer">The fundamental question any investor or entrepreneur asks before committing is whether the system itself can be trusted. Sainte-Patrie is designed to answer that question clearly.</p>
          <p className="faq-answer">Property rights are intended to be secure, contracts enforceable, and business rules stable and transparent. When the institutional environment is predictable at that level, firms can make long-term commitments with confidence rather than treating every decision as a short-term bet against an uncertain system.</p>
        </FaqItem>

        <FaqItem question="How will Sainte-Patrie make it easier to start and operate a business?">
          <p className="faq-answer">Starting a business in Sainte-Patrie is designed to follow a clear and predictable sequence with no ambiguity about what is required at each step.</p>
          <p className="faq-answer">Registration, licensing, and permits are intended to have published requirements, fixed fees, and defined timelines. An entrepreneur should know before they begin exactly what documentation is needed, what it costs, and how long each stage takes. When the entry process is transparent and standardized, more people can attempt it. That is how a city builds a broad and active business community rather than one limited to those with the right relationships.</p>
        </FaqItem>

        <FaqItem question="How will businesses survive and grow over time?">
          <p className="faq-answer">A business that gets off the ground still depends on conditions outside its own control. When those conditions are unpredictable, firms cannot plan beyond the immediate term.</p>
          <p className="faq-answer">Sainte-Patrie is specifically designed to maintain the infrastructure and contractual environment that running businesses depend on: consistent electricity and water supply, reliable connectivity, and agreements that can be enforced when a supplier, tenant, or partner does not meet their obligations. When the operating environment is stable and holds over time, businesses invest longer, hire more, and contribute more to the city&rsquo;s economic life.</p>
        </FaqItem>

        <FaqItem question="Will economic growth in Sainte-Patrie be inclusive?">
          <p className="faq-answer">Yes. The city&rsquo;s development model is intended to support broad participation in economic opportunity.</p>
          <p className="faq-answer">A functioning urban environment creates demand at every level simultaneously: professional services, healthcare, education, retail, logistics, construction, and local commerce. Inclusion in Sainte-Patrie is not a separate program. It is what happens when the systems that govern access to jobs, housing, and services apply the same rules to everyone.</p>
        </FaqItem>
      </section>

      {/* 7. National Role and Decentralization */}
      <section id="national">
        <p className="faq-section-title">7 &mdash; National Role and Decentralization</p>

        <FaqItem question="Will Sainte-Patrie compete with or replace Port-au-Prince?">
          <p className="faq-answer">No. Sainte-Patrie is not intended to compete with or replace Port-au-Prince.</p>
          <p className="faq-answer">Port-au-Prince is a metropolitan area of several million residents and will remain Haiti&rsquo;s political and economic center for the foreseeable future. The purpose of Sainte-Patrie is to complement the capital by creating another functioning urban center that helps relieve pressure on Port-au-Prince while supporting balanced national development.</p>
        </FaqItem>

        <FaqItem question="How will Sainte-Patrie contribute to Haiti's decentralization?">
          <p className="faq-answer">Sainte-Patrie is designed to contribute to decentralization by building a commune that can govern itself, fund its own services, and operate with institutional depth outside of Port-au-Prince.</p>
          <p className="faq-answer">A functioning second urban center gives the country something concrete: a proven alternative model for how a Haitian city can operate. That is the contribution. Not competition with the capital, but the existence of another city that works.</p>
        </FaqItem>

        <FaqItem question="Will the city be connected to the rest of the country and the region?">
          <p className="faq-answer">Yes. Sainte-Patrie is intended to function as a connected city, not an isolated enclave.</p>
          <p className="faq-answer">Transportation links, trade, tourism, education, and business activity are expected to connect the city with other communes in Haiti and with broader regional markets. Because Sainte-Patrie is designed to fund its own services and govern its own affairs, its resilience does not depend entirely on what happens elsewhere.</p>
        </FaqItem>

        <FaqItem question="Will regional integration weaken Haiti's sovereignty?">
          <p className="faq-answer">No. Regional integration does not change Haiti&rsquo;s sovereignty. Economic connections with regional markets and international partners are a commercial relationship, not a transfer of authority. They occur under the full oversight of the Haitian state and do not alter the legal or political framework within which the city operates.</p>
        </FaqItem>
      </section>

      {/* 8. Inclusion and Equal Opportunity */}
      <section id="inclusion">
        <p className="faq-section-title">8 &mdash; Inclusion and Equal Opportunity</p>

        <FaqItem question="How will Sainte-Patrie ensure equal opportunity for residents?">
          <p className="faq-answer">The same rules and procedures apply to everyone who lives and works in Sainte-Patrie.</p>
          <p className="faq-answer">Unequal treatment most often enters through discretion: a step in a process where someone can decide informally who qualifies and who does not. Sainte-Patrie is designed to eliminate those steps. When every step in a process has a stated criterion and a defined result, there is no moment where a gatekeeper can apply personal judgment. Access becomes a matter of meeting the requirements, not of knowing the right people.</p>
        </FaqItem>

        <FaqItem question="How will the city promote gender equality and inclusion?">
          <p className="faq-answer">Gender equality and inclusion are supported primarily through institutions that apply the same rights and obligations to all residents.</p>
          <p className="faq-answer">When access to employment, public spaces, and services follows standardized procedures with no discretionary steps, the informal gatekeeping that most often excludes women and families has nowhere to enter. The practical test is not whether the rules treat everyone equally on paper. It is whether women and families can actually show up, take part, and build a life in the city without navigating barriers that formal rules do not see.</p>
        </FaqItem>

        <FaqItem question="Will migrants, returnees, and diaspora members have the same rights and responsibilities as other residents?">
          <p className="faq-answer">Yes. People who live and work in Sainte-Patrie are expected to interact with the same institutions under the same rules. Returnees, migrants, and members of the diaspora do not operate under separate legal systems or special privileges. The intention is to integrate diverse populations through common institutions rather than parallel structures. Belonging is based on participation in shared civic life rather than origin or background.</p>
        </FaqItem>
      </section>

      {/* 9. Diaspora Participation */}
      <section id="diaspora">
        <p className="faq-section-title">9 &mdash; Diaspora Participation</p>

        <FaqItem question="Why is the Haitian diaspora important to the development of Sainte-Patrie?">
          <p className="faq-answer">The Haitian diaspora represents one of the country&rsquo;s greatest assets. Millions of Haitians living abroad send billions of dollars home each year and carry skills and professional experience across many fields. That combination of financial capacity, professional knowledge, and deep connection to the country represents an asset that few countries of comparable size can claim.</p>
        </FaqItem>

        <FaqItem question="How can Haitians in the diaspora participate in Sainte-Patrie?">
          <p className="faq-answer">Members of the diaspora will be able to participate in different ways as the city develops. Some may choose to invest in businesses or housing. Others may contribute their professional expertise, support local institutions, or collaborate with organizations operating in the city. The goal is to create conditions where the diaspora can contribute to Haiti&rsquo;s development through opportunity rather than obligation.</p>
        </FaqItem>

        <FaqItem question="Why has it been difficult for the Haitian diaspora to invest in Haiti in the past?">
          <p className="faq-answer">Many members of the diaspora want to invest or contribute to Haiti&rsquo;s development, but they often face significant barriers. These can include unclear property rights, complex administrative procedures, limited infrastructure, and concerns about security or institutional reliability. These are not abstract obstacles. They are the practical realities that have made long-term commitment difficult for people who genuinely wanted to contribute.</p>
        </FaqItem>

        <FaqItem question="How will Sainte-Patrie create better conditions for diaspora participation?">
          <p className="faq-answer">What discourages diaspora participation is rarely a lack of will. It is the absence of conditions that make investment and contribution worth the risk.</p>
          <p className="faq-answer">When a city controls its own revenue, sets its own budget, and administers its own services, diaspora members investing in it are not dependent on decisions made elsewhere. Sainte-Patrie is designed to create that kind of local accountability, where the people responsible for the city&rsquo;s performance are also the people answerable to those who live and invest in it.</p>
        </FaqItem>

        <FaqItem question="How is this initiative different from past projects involving the Haitian diaspora?">
          <p className="faq-answer">Many previous initiatives relied on goodwill and individual efforts but were limited by weak institutions and fragmented coordination.</p>
          <p className="faq-answer">Sainte-Patrie focuses first on building the institutional foundation that allows development to occur: reliable governance, clear rules, and transparent administration. The difference is not intention. It is structure.</p>
        </FaqItem>
      </section>

      {/* 10. Environment, Natural Capital, and Climate */}
      <section id="environment">
        <p className="faq-section-title">10 &mdash; Environment, Natural Capital, and Climate</p>

        <FaqItem question="How will Sainte-Patrie protect the environment and surrounding ecosystems?">
          <p className="faq-answer">Environmental protection in Sainte-Patrie is built into the planning from the start, not addressed after development has already caused damage.</p>
          <p className="faq-answer">Land use planning and zoning are expected to keep development away from sensitive coastal zones, watersheds, and natural habitats. Organizing the city in compact and walkable neighborhoods limits the footprint of urban growth and reduces pressure on surrounding landscapes. Treating natural areas as long-term public assets means they are protected not only for environmental reasons, but because a city surrounded by degraded land and unreliable water sources is a city with a serious long-term liability.</p>
        </FaqItem>

        <FaqItem question="How will the city address climate risks and ensure sustainable development?">
          <p className="faq-answer">Haiti is highly exposed to flooding, hurricanes, and the erosion that follows when watersheds and coastal zones are not protected. Sainte-Patrie is intended to address these risks by building resilience directly into the city&rsquo;s land use, infrastructure, and urban design from the beginning.</p>
          <p className="faq-answer">A city that ignores climate risk does not become cheaper to build. It becomes more expensive to maintain and more fragile over time. Resilience is therefore not a separate sustainability goal but a core part of building something durable.</p>
        </FaqItem>
      </section>

      {/* 11. Development and Implementation */}
      <section id="implementation">
        <p className="faq-section-title">11 &mdash; Development and Implementation</p>

        <FaqItem question="When will Sainte-Patrie be built?">
          <p className="faq-answer">Sainte-Patrie will be developed gradually through multiple phases rather than appearing all at once.</p>
          <p className="faq-answer">The early phase is focused on the legal and institutional groundwork: establishing the commune&rsquo;s formal status, securing land, and putting in place the governance structures and infrastructure systems that everything else depends on. Construction of neighborhoods and arrival of residents follow once that foundation is verified and in place. The sequence is intentional. Each phase depends on the previous one being genuinely complete rather than merely begun.</p>
        </FaqItem>

        <FaqItem question="Where does the project stand today and what happens next?">
          <p className="faq-answer">The project is currently focused on building the legal, institutional, and planning foundations required before urban development can begin. This includes preparing governance frameworks, urban planning concepts, economic strategies, and the partnerships needed to support the city&rsquo;s creation.</p>
          <p className="faq-answer">The immediate next steps are establishing the commune&rsquo;s legal status in partnership with Haitian public authorities and identifying suitable land for the first urban districts. From there, development proceeds in phases as institutions, services, and population grow together. The measure of progress is not how fast ground is broken but how reliably each layer of the city functions before the next is added.</p>
        </FaqItem>

        <FaqItem question="Who will finance the construction and development of the city?">
          <p className="faq-answer">Sainte-Patrie is expected to be developed primarily through private investment, operating within a framework of public authority and oversight.</p>
          <p className="faq-answer">A city that works creates value. Land, housing, businesses, and services all become worth more when the surrounding institutions are reliable and infrastructure functions. That is what makes private investment rational here &mdash; not subsidy or goodwill, but the expectation that a well-governed urban environment will generate returns over time. The Haitian state and municipal authorities set the legal framework and maintain public oversight throughout. Private capital builds and operates; public authority governs.</p>
        </FaqItem>

        <FaqItem question="Where will the land for the city come from?">
          <p className="faq-answer">Identifying suitable land is part of the current development phase and will be done in partnership with the Haitian government.</p>
          <p className="faq-answer">The priority is state-owned land where development can proceed with minimal displacement and where infrastructure can be implemented effectively from the start. Working through official channels ensures that land acquisition is transparent, legally sound, and aligned with national interests. Getting the land question right at the beginning is one of the foundations the rest of the project depends on.</p>
        </FaqItem>
      </section>

      {/* 12. Context and Comparisons */}
      <section id="context">
        <p className="faq-section-title">12 &mdash; Context and Comparisons</p>

        <FaqItem question="What is happening in Port-au-Prince, and why does Haiti need a new urban center?">
          <p className="faq-answer">Port-au-Prince concentrates more than a third of Haiti&rsquo;s total population in a metropolitan area that was never designed at that scale. Decades of rural migration, compounded by disasters and institutional breakdown, have placed the capital under severe strain. Much of the city lacks reliable power, clean water, or functioning public services. In significant parts of Port-au-Prince, gang control of territory has displaced state authority and restricted movement and access to services for millions of residents.</p>
          <p className="faq-answer">Building a new urban center does not repair Port-au-Prince. It does something different: it gives Haiti a city where institutions work, services operate reliably, and families and businesses have a functioning alternative. A working second city also changes what is politically visible in the rest of the country by demonstrating concretely that Haitian cities can function.</p>
        </FaqItem>

        <FaqItem question="How does Sainte-Patrie relate to the global charter city and new city movement?">
          <p className="faq-answer">Charter cities and planned new cities have been discussed and attempted in various forms around the world &mdash; in Honduras, Rwanda, Saudi Arabia, and elsewhere. The common argument is that urban governance can sometimes be better redesigned from the ground up than reformed through existing institutions.</p>
          <p className="faq-answer">Sainte-Patrie draws on that tradition of thinking but operates within a different framework. It remains fully inside Haiti&rsquo;s constitutional and legal system, will be governed by elected Haitian municipal authorities, and is designed to function as a genuine public city rather than a private enclave or special economic zone. The governance model is derived from Haitian constitutional law, not imported from abroad.</p>
        </FaqItem>

        <FaqItem question={'How does Sainte-Patrie compare to other planned city projects, such as Pr\u00f3spera, Songdo, or NEOM?'}>
          <p className="faq-answer">Several new city and planned city projects have attracted attention in recent years. Pr&oacute;spera, in Honduras, operates under a special autonomous zone framework with its own legal system, distinct from national law. NEOM, in Saudi Arabia, is a state-backed megaproject financed by sovereign wealth. Songdo, in South Korea, was built on reclaimed land and developed as a smart city through public-private partnership.</p>
          <p className="faq-answer">Sainte-Patrie differs in one fundamental respect: it operates under Haiti&rsquo;s existing legal framework with no separate jurisdiction, no private governance, and no foreign legal authority. It is designed to be a public municipality governed by elected officials, subject to Haitian national law in the same way as any other city in the country. The goal is not a showcase or an enclave but a functioning ordinary city in one of the Caribbean&rsquo;s most challenging contexts.</p>
        </FaqItem>
      </section>

      </div>{/* end #faq-sections */}

      <hr className="divider" />

      <div className="risk-note">
        <p>The answers on this page reflect our current thinking and intentions. As Sainte-Patrie moves from planning into implementation, some details will be revised to reflect what we learn on the ground. We will update this page accordingly.</p>
      </div>

      <hr className="divider" />

      <h2>Contact</h2>
      <p>
        For general enquiries: <a href="mailto:contact@sainte-patrie.com">contact@sainte-patrie.com</a>
      </p>
    </div>
  )
}
