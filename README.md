# Plugin Architect — 3D Portfolio (Next.js + R3F)

A unique 3D “Module Lab” portfolio with scroll-driven assembly, click-to-focus modules, and clean glass UI overlays.

## Quick start
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Customize
Edit `lib/data.ts`:
- name, headline, email
- GitHub/LinkedIn links
- projects + repos

Put your resume PDF in `/public` and update the link.

## Deploy
- Recommended: Vercel (import repo)
- Or build + host anywhere:
```bash
npm run build
npm run start
```

## Notes
- `prefers-reduced-motion` is respected automatically.
- The 3D scene is intentionally subtle and professional.
