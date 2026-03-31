# Sainte-Patrie

Website for **Sainte-Patrie**, Haiti's first planned city — a new urban center outside Port-au-Prince, built for reliable services, safe neighborhoods, and long-term growth.

**Live site:** [sainte-patrie.com](https://sainte-patrie.com)

---

## About the Project

Sainte-Patrie is a Haitian-founded initiative developing Haiti's first planned city. The city is designed to offer what Port-au-Prince cannot: a functioning urban alternative with planned infrastructure, consistent public services, and an economy built to grow.

The website presents the project and collects input from the public through a survey.

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — project overview and vision |
| `/survey` | Public survey to gather input from interested parties |
| `/privacy` | Privacy policy |

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Global CSS with CSS custom properties
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics)
- **Forms:** [Formspree](https://formspree.io/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## Project Structure

```
app/
├── layout.tsx          # Root layout (header, footer)
├── globals.css         # Global styles
├── page.tsx            # Homepage
├── not-found.tsx       # 404 page
├── sitemap.ts          # Auto-generated sitemap
├── survey/             # Public survey
└── privacy/            # Privacy policy
components/
├── Header.tsx          # Site header with navigation
├── Footer.tsx          # Site footer
├── HeroBg.tsx          # Hero background image with fade-in
└── HeroScrollEffect.tsx # Scroll-driven topo opacity effect
public/
└── robots.txt
```

---

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Contact

[contact@sainte-patrie.com](mailto:contact@sainte-patrie.com)
