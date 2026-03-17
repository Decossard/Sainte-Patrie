# Sainte-Patrie

Website for **Sainte-Patrie**, Haiti's first planned city — a new urban development outside Port-au-Prince, designed for stable governance, reliable services, and a functioning economy. Led by Haitians, built for everyday life.

**Live site:** [sainte-patrie.com](https://sainte-patrie.com)

---

## About the Project

Sainte-Patrie is developed by **DSDC**, a Haitian-founded development corporation. The city is designed to offer what Port-au-Prince cannot: a functioning urban alternative with planned infrastructure, consistent public services, and an economy built to grow.

The website presents the project, invites institutional partners, and collects input from the public through a survey.

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — project overview and vision |
| `/faq` | Frequently asked questions about governance, services, and the city |
| `/founders` | Invitation for founding institutions to contribute |
| `/team` | The founder and the organization behind the project |
| `/survey` | Public survey to gather input from interested parties |
| `/privacy` | Privacy policy |

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Global CSS with CSS custom properties
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
├── faq/                # FAQ page
├── founders/           # Founding institutions page
├── team/               # Team page
├── survey/             # Public survey
└── privacy/            # Privacy policy
components/
├── Header.tsx          # Site header with navigation
└── Footer.tsx          # Site footer
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

General enquiries: [contact@sainte-patrie.com](mailto:contact@sainte-patrie.com)
Founding institutions: [founders@sainte-patrie.com](mailto:founders@sainte-patrie.com)
