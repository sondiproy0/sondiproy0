# Sondip Roy — Portfolio (React + Tailwind)

Local dev instructions:

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

Notes:
- This project is scaffolded with Vite, React, Tailwind CSS and Framer Motion.
- Replace `public/headshot.svg` with your real headshot (keep the filename `headshot.svg` or update the `Hero.jsx` image path).
- Add `resume.pdf` to the project root to enable the Resume button.
 - Replace `public/headshot.svg` with your real headshot or save your headshot as `public/headshot.jpg` (preferred) so the site serves the raster image. The app will use `headshot.jpg` if present and fall back to `headshot.svg`.
 - `public/resume.pdf` was created from your provided resume text. Replace it with your finalized PDF if you prefer a different layout.

Next steps implemented:
- Initial scaffold, components and styles added.

Planned next work:
- Add fonts & real assets, polish animations, background mesh, accessibility checks.

Deployment notes:

- Netlify: add the project to Netlify and set the build command to `npm run build` and publish directory to `dist` (a `netlify.toml` is included).
- Vercel: import the project and use the `@vercel/static-build` with `dist` as the output directory (a `vercel.json` is included).
- GitHub Pages: a GitHub Actions workflow `.github/workflows/deploy.yml` is included; push to `main` or `master` to trigger a build and publish to GitHub Pages.

Replace `public/resume.pdf` with your actual resume file to enable the Resume button.

Docker (local)
----------------
Build and run the app in Docker (multi-stage build + nginx):

```bash
# build the image (run from project root)
docker build -t sondip-portfolio:latest .

# run with docker (maps container 80 -> host 8080)
docker run --rm -p 8080:80 sondip-portfolio:latest
```

Or use docker-compose:

```bash
docker-compose up --build
```

Then visit http://localhost:8080 to preview the deployed site.
