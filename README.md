# Portfolio – Motion

A fast, minimal, and animated developer portfolio built with React + TypeScript, Vite, Tailwind CSS, and Framer Motion.

## ✨ Highlights

- Clean dark UI with soft gradients and glassy details
- Skills as compact pill badges with icons
- Projects grid with autoplaying muted video previews, Website + GitHub buttons, and text-only tech tags
- Open‑source contributions section
- Animated, unique footer with a shimmering “Built with…” badge
- Subtle bottom-blur overlay that softly fades content near the viewport edge

## 🧱 Tech Stack

- React 18 + Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react (icons) and react-icons

## 📁 Project Structure

```
src/
	App.tsx
	App.css
	index.css
	main.tsx
	Components/
		AboutMe.tsx
		ContentAbout.tsx
		Skills.tsx
		Projects.tsx
		OpenSource.tsx
		Blogs.tsx
		Newsletter.tsx
		BottomDock.tsx
		Footer.tsx
		BottomBlur.tsx
public/
	videos/
		ElevateX.mp4
		Polysee.mp4
	assets/ ...
```

## 🚀 Getting Started

1. Install dependencies

```cmd
npm install
```

2. Start the dev server

```cmd
npm run dev
```

3. Build for production

```cmd
npm run build
```

4. Preview the production build

```cmd
npm run preview
```

> Tip: You can also use `yarn` or `pnpm` if that’s your preference.

## 🧩 Key Components

- `Skills.tsx`: Technologies list rendered as white pill badges with small icons.
- `Projects.tsx`: Responsive 2‑column grid, gradient cards, autoplaying muted looping video banners, text‑only tags, Website + GitHub buttons, and conditional rendering if the website URL is missing.
- `OpenSource.tsx`: PRs and contributions with tidy card styling.
- `Footer.tsx`: Minimalist gradient footer with a shiny animated badge and concise meta line.
- `BottomBlur.tsx`: Fixed bottom overlay (masked backdrop blur) that fades upward to softly blend content near the viewport edge.

## 🎥 Project Videos

Place your demos in `public/videos/` and update paths in `Projects.tsx`.

Example files used:

- `public/videos/ElevateX.mp4`
- `public/videos/Polysee.mp4`

Make sure videos are optimized (short length, reasonable bitrate) for quick loading.

## 🖌️ Styling Notes

- Tailwind classes are used throughout; tweak spacing, borders, and colors directly in components.
- The shiny badge uses custom keyframes in `App.css` (`animate-shine-smooth`).
- The bottom blur uses a CSS mask for a smooth fade; adjust height/opacity in `BottomBlur.tsx`.

## 🧪 Commands (quick reference)

```cmd
npm run dev
npm run build
npm run preview
```

## 📦 Deploy

This project works great on Vercel, Netlify, or any static host.

- Build: `npm run build`
- Deploy the `dist/` directory

## ✅ Roadmap / Ideas

- Add theme toggle (light/dark)
- Add more project filters (tags) and animations
- Hook newsletter to a backend/email service

## 📝 License

MIT

---

Built with focus, curiosity, and a tasteful dose of motion.
