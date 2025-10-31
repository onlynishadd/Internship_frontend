# AppDost — Modern Next.js Clone with Improved UI/Animations

A high-quality, production-ready clone inspired by `appdost.in`, rebuilt with a modern stack, improved UX, polished animations, and fully connected sub-pages.

## Features
- Home page with animated background image that fades with scroll
- Global animated navbar (Framer Motion) with smooth transitions
- Pages: `Home`, `About`, `Services`, `Portfolio` (with modal popups), `Careers`, `Blog` (list + article template), `Contact` (validated animated form)
- Responsive design, light/dark support, refined focus/scroll/selection styles
- TypeScript throughout and ESLint configured

## Tech Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS (v4) + custom theme tokens
- Framer Motion for animations

## Local Development
```bash
npm install
npm run dev
# visit http://localhost:3000
```

If you see a lockfile root warning in dev logs, it’s due to multiple `package-lock.json` files in your Windows workspace. You can fix by setting `turbopack.root` in `next.config.ts` or by running `npm install` only inside this project folder and avoiding another lockfile in the parent directory.

## Build & Run
```bash
npm run build
npm run start
```

## Project Structure (key paths)
- `src/app/layout.tsx` — Root layout (imports animated `Navbar` client component)
- `src/app/Navbar.tsx` — Animated navbar (Client Component)
- `src/app/page.tsx` — Home with scroll-reactive background
- `src/app/{about,services,portfolio,careers,blog,contact}/page.tsx` — Sub-pages
- `public/` — Static assets (e.g., `hero-bg.png`, `project-alpha.png`, etc.)

## Portfolio Images
Place project images in `public/` and reference them in `src/app/portfolio/page.tsx`. Example:
- `/project-alpha.png`
- `/beta-crm.png`
- `/gamma-site.png`
- `/delta-cloud.png`
- `/epsilon-ui.png`
- `/zeta-secure.png`

## Contact Form
Client-side validation only. To wire up real delivery:
- Add an API route (e.g., `src/app/api/contact/route.ts`) sending email via a provider (Resend, SendGrid, etc.), or
- Use a form service (Formspree, Basin) and POST from the UI.

## Deployment
- Vercel (recommended): one-click Next.js deploy. Add the repo and deploy from `main`.
- Other Node hosts: `npm run build && npm run start`

## Push to GitHub (instructions)
1. Create a new GitHub repo (e.g., `appdost-plus`).
2. In project root:
```bash
git config user.name "Your Name"
git config user.email "onlynishad30@gmail.com"

git add .
git commit -m "Initial commit: AppDost+ enhanced clone"

git branch -M main
git remote add origin https://github.com/<your-username>/appdost-plus.git
git push -u origin main
```
> Replace `<your-username>` and repo name with yours.

## Notes
- This repo uses Client Components where animations are needed and keeps the rest as Server Components for performance.
- If you modify the navbar/hero to add more animations, keep them in Client Components to avoid server/client boundary errors.

Enjoy your improved AppDost+! 🎉
