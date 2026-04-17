# Hallo Group — hallogroup.id

Website resmi Hallo Group. Built with Next.js 14 + Tailwind CSS + Framer Motion.

## Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + inline styles
- **Animation**: Framer Motion
- **Font**: Space Grotesk (Google Fonts)
- **Deploy**: Vercel
- **Domain**: hallogroup.id (via Niagahoster)

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy ke Vercel

### 1. Push ke GitHub
```bash
git init
git add .
git commit -m "init: hallo group website"
git remote add origin https://github.com/USERNAME/hallogroup.git
git push -u origin main
```

### 2. Connect ke Vercel
1. Login ke [vercel.com](https://vercel.com)
2. New Project → Import dari GitHub repo
3. Framework preset: **Next.js** (auto-detected)
4. Deploy

### 3. Custom Domain (hallogroup.id via Niagahoster)
1. Di Vercel dashboard → Settings → Domains → Add `hallogroup.id`
2. Vercel akan kasih 2 DNS record (A record + CNAME)
3. Login ke Niagahoster → DNS Management → tambahkan kedua record tersebut
4. Tunggu propagasi 5–30 menit

---

## Update Konten

Semua konten ada di satu file:

```
src/lib/data.ts
```

Edit file itu untuk update:
- Nama & info Hallo Group
- Daftar networks / clusters
- Stats (jumlah klien, dll)
- Social media links
- Email kontak

---

## Struktur Project

```
src/
├── app/
│   ├── page.tsx          ← Homepage (sticky scroll)
│   ├── about/page.tsx    ← About page
│   ├── networks/page.tsx ← Networks page
│   ├── work/page.tsx     ← Work / clients page
│   ├── contact/page.tsx  ← Contact page
│   ├── not-found.tsx     ← 404 page
│   ├── layout.tsx        ← Root layout + metadata
│   └── globals.css       ← Global styles
├── components/
│   ├── Cursor.tsx        ← Custom cursor
│   ├── Nav.tsx           ← Navigation
│   ├── Marquee.tsx       ← Bottom ticker
│   ├── StickyScroll.tsx  ← Fullscreen scroll controller
│   ├── PageShell.tsx     ← Inner page wrapper
│   └── slides/
│       ├── SlideHero.tsx
│       ├── SlideAbout.tsx
│       ├── SlideNetworks.tsx
│       └── SlideCTA.tsx
└── lib/
    └── data.ts           ← ⭐ Single source of truth for all content
```
