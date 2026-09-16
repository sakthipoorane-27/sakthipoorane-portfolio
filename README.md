# Sakthipoorane — Developer Portfolio

A premium, responsive React + Vite + Tailwind CSS portfolio for Sakthipoorane, a final-year B.Tech Information Technology student focused on software development, full-stack web development and AI-powered applications.

## Tech stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Framer Motion
- Lucide React

## 1. Installation

```bash
npm install
```

## 2. Development

```bash
npm run dev
```

Open the local URL printed by Vite.

## 3. Production build

```bash
npm run build
```

The production output is generated in `dist/`.

## 4. Vercel deployment

This is a static Vite application and is ready for Vercel.

Recommended settings:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

No server-side runtime is required.

## 5. Resume

The provided resume has been copied to:

```text
public/resume.pdf
```

If you replace it, keep the same filename. The portfolio's View Resume and Download Resume actions point to `/resume.pdf`.

## 6. Update project links

Edit:

```text
src/data/projects.js
```

Each project has `github` and `live` fields. They are intentionally empty where no real URL was supplied, so the site never invents links.

## 7. Update personal information

The main contact details and social links are centralized in:

```text
src/data/site.js
```

## 8. Update resume-derived content

Resume-derived education, skills, projects, certifications and internship details are stored in:

```text
src/data/site.js
src/data/projects.js
src/data/certifications.js
src/data/skills.js
```

The uploaded resume was treated as the source of truth for resume-related facts.

## Notes

- No profile photo is included.
- No fake testimonials, companies, statistics, percentages or experience have been added.
- The contact form is frontend-only and prepares an email through the user's mail client rather than pretending to send through a backend.
- Project live-demo/GitHub actions remain disabled until genuine URLs are configured.
