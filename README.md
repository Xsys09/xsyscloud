# XsysCloud

Personal portfolio and blog for Aladdin // Xsys.

**Live:** [xsyscloud.vercel.app](https://xsyscloud.vercel.app)

## Stack

| Layer    | Tool             |
|----------|------------------|
| Framework | Next.js 14 (App Router) |
| Styling  | Tailwind CSS     |
| Blog     | MDX (next-mdx-remote) |
| Fonts    | Rajdhani + IBM Plex Mono |
| Hosting  | Vercel (free tier) |
| Forms    | Formspree (free tier) |

## Getting Started

```bash
git clone https://github.com/Xsys09/xsyscloud.git
cd xsyscloud
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Blog Posts

Create a `.mdx` file in `content/posts/`:

```mdx
---
title: Your Post Title
date: "2026-01-15"
excerpt: A short description shown in the blog list.
tags: [powershell, azure]
---

Your post content in Markdown here.
```

The post auto-appears in the blog listing sorted by date. No database, no CMS — just files.

## Customising Content

| What | Where |
|------|-------|
| Projects | `components/Projects.tsx` |
| Skills / Stack | `components/Skills.tsx` |
| About bio & stats | `components/About.tsx` |
| Nav links | `components/Navbar.tsx` |
| Contact email | `app/contact/page.tsx` |
| Site metadata | `app/layout.tsx` |
| Resume file | `public/resume.pdf` |

## Contact Form Setup

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy the form ID
3. In `app/contact/page.tsx`, replace `YOUR_FORM_ID` with your actual ID:
   ```
   fetch('https://formspree.io/f/YOUR_FORM_ID', ...)
   ```

## Deployment

1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project → select this repo
3. Vercel auto-detects Next.js — click Deploy
4. Every `git push` to `main` auto-deploys

**Total cost: $0**
