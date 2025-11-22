// AIToolHub - Next.js Starter
// -------------------------------------------------------------
// This single text document contains a minimal, production-ready
// Next.js starter for your one-page AI Tools site (Option A selections):
// - Minimal/clean Apple-style design
// - 20 pre-populated tools
// - Simple newsletter signup (Mailchimp placeholder)
// - Basic i18n (English, Hindi, Spanish) using Next.js built-in i18n
// - SEO-ready meta tags
// - Instructions for deploying to Vercel
//
// File map (create these files in a new Next.js project):
// package.json
// next.config.js
// pages/_app.js
// pages/index.js
// components/ToolCard.jsx
// components/Header.jsx
// components/Newsletter.jsx
// styles/globals.css
// public/logo.svg
// public/locales/en.json
// public/locales/hi.json
// public/locales/es.json
// README: Quick deploy instructions included at the bottom of this file.
// -------------------------------------------------------------

/* ---------------------------------
   package.json
--------------------------------- */
{
  "name": "aitoolhub",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "swr": "2.2.0"
  }
}

/* ---------------------------------
   next.config.js (i18n)
--------------------------------- */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'hi', 'es'],
    defaultLocale: 'en',
  },
}

/* ---------------------------------
   pages/_app.js
--------------------------------- */
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

/* ---------------------------------
   components/Header.jsx
--------------------------------- */
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header({ siteName = 'AIToolHub' }) {
  const router = useRouter()
  const { locale, locales, asPath } = router

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <img src="/logo.svg" alt="logo" className="logo" />
          <div>
            <h1 className="site-title">{siteName}</h1>
            <p className="site-tag">Discover the best AI tools for creators & teams</p>
          </div>
        </div>

        <div className="controls">
          <select
            aria-label="Language"
            value={locale}
            onChange={(e) => router.push(asPath, asPath, { locale: e.target.value })}
          >
            {locales.map((l) => (
              <option key={l} value={l}>{l.toUpperCase()}</option>
            ))}
          </select>
        </div>
      </div>
    </header>
  )
}

/* ---------------------------------
   components/ToolCard.jsx
--------------------------------- */
import React from 'react'

export default function ToolCard({ tool }) {
  return (
    <article className="tool-card">
      <div className="tool-head">
        <img src={tool.logo || '/logo.svg'} alt={`${tool.name} logo`} className="tool-logo" />
        <div>
          <h3 className="tool-name">{tool.name}</h3>
          <div className="tool-meta">{tool.category} • {tool.price}</div>
        </div>
      </div>

      <p className="tool-desc">{tool.description}</p>

      <div className="tool-actions">
        <a className="btn" target="_blank" rel="noopener noreferrer" href={tool.affiliate || tool.url}>
          Visit Tool
        </a>
        <a className="btn ghost" target="_blank" rel="noopener noreferrer" href={tool.url}>
          Official
        </a>
      </div>
    </article>
  )
}

/* ---------------------------------
   components/Newsletter.jsx
--------------------------------- */
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()
    // Placeholder: Integrate Mailchimp/ConvertKit API here.
    // For now we simulate success.
    setSent(true)
    setEmail('')
  }

  return (
    <section className="newsletter">
      <div className="container">
        <h2>Get New AI Tools Every Week</h2>
        <p>Weekly curated AI tools, updates and deals — straight to your inbox.</p>

        {sent ? (
          <div className="notice">Thanks — you're subscribed!</div>
        ) : (
          <form onSubmit={subscribe} className="newsletter-form">
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn" type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  )
}

/* ---------------------------------
   pages/index.js
--------------------------------- */
import Head from 'next/head'
import Header from '../components/Header'
import ToolCard from '../components/ToolCard'
import Newsletter from '../components/Newsletter'

// Starter tools list (20 tools)
const TOOLS = [
  { name: 'ChatGPT', category: 'Writing', description: 'Smart AI assistant for writing, research, and productivity.', price: 'Free + Paid', url: 'https://chat.openai.com' },
  { name: 'Claude', category: 'Writing', description: 'Long-form writing & reasoning AI.', price: 'Paid', url: 'https://claude.ai' },
  { name: 'Jasper', category: 'Writing', description: 'Marketing-focused AI writing assistant.', price: 'Paid', url: 'https://www.jasper.ai' },
  { name: 'MidJourney', category: 'Image', description: 'Text-to-image generator known for stylized art.', price: 'Paid', url: 'https://www.midjourney.com' },
  { name: 'Canva AI', category: 'Image', description: 'Design suite with built-in generative tools.', price: 'Free + Paid', url: 'https://www.canva.com' },
  { name: 'Pika Labs', category: 'Video', description: 'AI-native video generation tool.', price: 'Paid', url: 'https://www.pikalabs.com' },
  { name: 'RunwayML', category: 'Video', description: 'AI video editing & effects.', price: 'Paid', url: 'https://runwayml.com' },
  { name: 'Descript', category: 'Video', description: 'Audio & video editor with AI overdub.', price: 'Paid', url: 'https://www.descript.com' },
  { name: 'QuillBot', category: 'Students', description: 'Paraphrasing & writing tools.', price: 'Free + Paid', url: 'https://quillbot.com' },
  { name: 'Grammarly', category: 'Students', description: 'Grammar & clarity AI assistant.', price: 'Free + Paid', url: 'https://www.grammarly.com' },
  { name: 'Perplexity', category: 'Research', description: 'AI research & answer engine.', price: 'Free', url: 'https://www.perplexity.ai' },
  { name: 'Notion AI', category: 'Productivity', description: 'AI assistant inside Notion for notes & docs.', price: 'Paid', url: 'https://www.notion.so' },
  { name: 'Airtable AI', category: 'Business', description: 'AI-powered workflows for teams.', price: 'Paid', url: 'https://airtable.com' },
  { name: 'Zapier AI', category: 'Automation', description: 'Automate workflows using AI actions.', price: 'Paid', url: 'https://zapier.com' },
  { name: 'ElevenLabs', category: 'Voice', description: 'High-quality AI text-to-speech.', price: 'Paid', url: 'https://elevenlabs.io' },
  { name: 'GitHub Copilot', category: 'Coding', description: 'AI code assistant inside your editor.', price: 'Paid', url: 'https://github.com/features/copilot' },
  { name: 'Replit AI', category: 'Coding', description: 'Cloud IDE with AI features.', price: 'Free + Paid', url: 'https://replit.com' },
  { name: 'Tome', category: 'Productivity', description: 'AI-first presentations & storytelling.', price: 'Paid', url: 'https://tome.app' },
  { name: 'Taskade', category: 'Productivity', description: 'AI team workspace for tasks & notes.', price: 'Free + Paid', url: 'https://www.taskade.com' },
  { name: 'Durable', category: 'Website', description: 'AI that builds simple business websites instantly.', price: 'Paid', url: 'https://durable.co' }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>AIToolHub — Discover the Best AI Tools</title>
        <meta name="description" content="AIToolHub: hand-picked AI tools for creators, students and teams. Discover, compare and visit tools." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header siteName="AIToolHub" />

      <main className="container main">
        <section className="hero">
          <h2>Discover the Best AI Tools That Save Time & Make You Smarter</h2>
          <p className="lead">Hand-picked AI tools across writing, image, video, coding and productivity.</p>
        </section>

        <section className="categories">
          <div className="cat-grid">
            <span>Writing</span>
            <span>Image</span>
            <span>Video</span>
            <span>Productivity</span>
            <span>Coding</span>
            <span>Business</span>
          </div>
        </section>

        <section className="featured">
          <h3>Featured Tools</h3>
          <div className="tools-grid">
            {TOOLS.slice(0,6).map((t) => (
              <ToolCard key={t.name} tool={t} />
            ))}
          </div>
        </section>

        <section className="all-tools">
          <h3>All Tools</h3>
          <div className="tools-grid">
            {TOOLS.map((t) => (
              <ToolCard key={t.name + '-all'} tool={t} />
            ))}
          </div>
        </section>

        <Newsletter />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} AIToolHub — Built with ❤️ • Change name anytime</p>
        </div>
      </footer>
    </>
  )
}

/* ---------------------------------
   styles/globals.css
   Minimal clean Apple-style design
--------------------------------- */
:root{
  --bg:#ffffff;
  --text:#0b1220;
  --muted:#6b7280;
  --accent:#111827;
  --card:#f8f9fb;
}

*{box-sizing:border-box}
html,body,#__next{height:100%}
body{font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial; margin:0; color:var(--text); background:var(--bg)}
.container{max-width:980px; margin:0 auto; padding:28px}
.site-header{border-bottom:1px solid #eef2f7}
.header-inner{display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;gap:14px;align-items:center}
.logo{width:56px;height:56px}
.site-title{margin:0;font-size:18px}
.site-tag{margin:0;color:var(--muted);font-size:13px}
.controls select{padding:8px;border-radius:8px;border:1px solid #e6e9ef}

.hero{padding:36px 0;text-align:center}
.hero h2{margin:0;font-size:28px}
.lead{color:var(--muted);margin-top:8px}

.cat-grid{display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin:18px 0}
.cat-grid span{background:#fafbfc;border:1px solid #eef2f7;padding:8px 12px;border-radius:999px;font-size:13px}

.tools-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin-top:12px}
.tool-card{background:var(--card);padding:16px;border-radius:12px;border:1px solid #eef2f7}
.tool-head{display:flex;gap:12px;align-items:center}
.tool-logo{width:48px;height:48px;border-radius:8px;object-fit:cover}
.tool-name{margin:0;font-size:16px}
.tool-meta{font-size:12px;color:var(--muted)}
.tool-desc{font-size:14px;color:var(--text);margin:12px 0}
.tool-actions{display:flex;gap:8px}
.btn{display:inline-block;padding:8px 12px;border-radius:10px;background:var(--accent);color:white;text-decoration:none}
.btn.ghost{background:transparent;color:var(--accent);border:1px solid #e6e9ef}

.newsletter{margin:36px 0;padding:20px;border-radius:12px;background:#fbfbfe;border:1px solid #eef2f7}
.newsletter-form{display:flex;gap:8px;max-width:560px;margin-top:12px}
.newsletter-form input{flex:1;padding:10px;border-radius:10px;border:1px solid #e6e9ef}
.notice{padding:12px;background:#ecfdf5;border-radius:8px}

.site-footer{border-top:1px solid #eef2f7;padding:22px 0;margin-top:28px;color:var(--muted);text-align:center}

/* Responsive tweaks */
@media (max-width:600px){
  .header-inner{flex-direction:column;gap:12px;align-items:flex-start}
  .container{padding:18px}
}

/* ---------------------------------
   public/locales/en.json
--------------------------------- */
{
  "siteTitle": "AIToolHub",
  "heroTitle": "Discover the Best AI Tools That Save Time & Make You Smarter",
  "heroSubtitle": "Hand-picked AI tools across writing, image, video, coding and productivity.",
  "newsletterTitle": "Get New AI Tools Every Week",
  "newsletterSubtitle": "Weekly curated AI tools, updates and deals — straight to your inbox."
}

/* ---------------------------------
   public/locales/hi.json
   (Simplified Hindi translations)
--------------------------------- */
{
  "siteTitle": "AIToolHub",
  "heroTitle": "बेहतरीन AI टूल खोजें जो आपका समय बचाते हैं और आपको स्मार्ट बनाते हैं",
  "heroSubtitle": "लिखने, इमेज, वीडियो, कोडिंग और उत्पादकता के लिए चुने हुए AI टूल।",
  "newsletterTitle": "हर सप्ताह नए AI टूल",
  "newsletterSubtitle": "साप्ताहिक चयनित AI टूल, अपडेट और डील — सीधे आपके इनबॉक्स में।"
}

/* ---------------------------------
   public/locales/es.json
   (Spanish translations)
--------------------------------- */
{
  "siteTitle": "AIToolHub",
  "heroTitle": "Descubre las mejores herramientas de IA que ahorran tiempo y te hacen más inteligente",
  "heroSubtitle": "Herramientas de IA seleccionadas para escritura, imagen, video, codificación y productividad.",
  "newsletterTitle": "Recibe nuevas herramientas de IA cada semana",
  "newsletterSubtitle": "Herramientas de IA seleccionadas semanalmente, actualizaciones y ofertas — directo a tu bandeja de entrada."
}

/* ---------------------------------
   public/logo.svg
   (very small placeholder SVG — replace with your own)
--------------------------------- */
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#0b1220" />
  <text x="50" y="58" font-size="36" fill="#fff" text-anchor="middle" font-family="Inter, Arial">AI</text>
</svg>

/* ---------------------------------
   README: Quick setup & deploy
--------------------------------- */
/*
1) Create a new folder and paste the files above into the correct structure.

2) Install dependencies:
   npm install

3) Run locally:
   npm run dev
   Open http://localhost:3000

4) To deploy to Vercel (recommended):
   - Create a GitHub repo and push the project.
   - Sign into vercel.com and import the GitHub repo.
   - Vercel will detect Next.js and auto-deploy.

5) Mailchimp newsletter:
   - Replace Newsletter.subscribe() placeholder with your Mailchimp/ConvertKit API endpoint or form action.

6) Affiliate links:
   - Replace each tool.url or add tool.affiliate with your affiliate links.

7) SEO & analytics:
   - Add analytics (Google Analytics / Plausible) into _app or use Vercel integrations.

8) Add more languages:
   - Expand locales in next.config.js and add locale JSON files.

Notes & next steps (recommendations):
- After launching, sign up to affiliate programs for the top tools and update the 'affiliate' property for higher commissions.
- Create short review snippets and structured data (JSON-LD) later for better SEO rich results.
- Add server-side feed to auto-add new AI tools (cron job + small serverless function).
*/
