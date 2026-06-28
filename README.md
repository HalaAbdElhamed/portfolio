# Hala Abdelhameed – Portfolio

A premium personal portfolio website built with **React + Vite** and **Framer Motion**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Your Profile Photo

Place your photo in the `public/` folder with exactly this filename:

```
public/WhatsApp Image 2026-04-19 at 10.22.04 PM.jpeg
```

The Hero section will automatically pick it up.

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── WhatsApp Image 2026-04-19 at 10.22.04 PM.jpeg  ← add your photo here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── About.jsx / .module.css
│   │   ├── Skills.jsx / .module.css
│   │   ├── Projects.jsx / .module.css
│   │   ├── Contact.jsx / .module.css
│   │   ├── Footer.jsx / .module.css
│   │   └── FloatingButtons.jsx / .module.css
│   ├── hooks/
│   │   ├── useTheme.js
│   │   └── useScrollSpy.js
│   ├── styles/
│   │   └── globals.css
│   ├── data.js        ← edit your info here
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Customisation

- **Content**: Edit `src/data.js` to update projects, skills, and links.
- **Colors**: Change CSS variables at the top of `src/styles/globals.css`.
- **Project images**: Replace the Unsplash URLs in `src/data.js` `image` fields with paths to your own screenshots placed in `public/`.

## Tech Stack

- React 18 + Vite 5
- Framer Motion 11
- CSS Modules
- React Icons

## Build for Production

```bash
npm run build
npm run preview
```
