<h1 align="center">
  <br>
  🤟 Gestura Landing Page
  <br>
</h1>

<h4 align="center">The official landing page showcase for Gestura — a real-time ASL-to-captions desktop application. Built using Next.js 16, React 19, and TailwindCSS v4.</h4>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs">
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react">
  <img alt="TailwindCSS" src="https://img.shields.io/badge/TailwindCSS-v4.0-38B2AC?style=flat-square&logo=tailwindcss">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript">
  <img alt="Vercel" src="https://img.shields.io/badge/Deployment-Vercel-000000?style=flat-square&logo=vercel">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square">
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#%EF%B8%8F-deployment">Deployment</a> •
  <a href="#-license">License</a>
</p>

---

## 🎨 About The Website

This is the high-performance, visually premium landing page designed to introduce **Gestura** to the world. It showcases the desktop application's capability to bridge communication gaps for specially-abled, non-vocal individuals who cannot speak by offering real-time American Sign Language (ASL) transcription directly on video calls.

The site is styled with sleek dark-mode aesthetics, custom micro-animations, and an interactive particle network representing skeletal hand landmarks.

---

## ✨ Features

The landing page is broken down into modular, responsive, and animated sections:

*   **Interactive Landmark Background:** A dynamic 2D canvas particle web that reacts to cursor movements, simulating the MediaPipe skeletal landmark grid.
*   **Hero & Live Actions:** Engaging introduction linking directly to the YouTube video demo and the published research paper.
*   **The Problem Space:** Highlights the limitations of standard video calling applications for sign language users.
*   **What It Does:** Interactive cards detailing Gestura's core capabilities:
    *   300-word ASL gesture recognition
    *   Sleek local UI controls
    *   Real-time virtual camera pipeline
    *   Fingerspelling fallback & LLM grammar correction
*   **How It Works:** A visually structured breakdown of the 3-layer AI pipeline (MediaPipe $\rightarrow$ GestureTransformer $\rightarrow$ Fingerspelling Fallback $\rightarrow$ Gemini LLM).
*   **Vision & Core Philosophy:** Speaks to the mission of creating accessible, offline-capable, and privacy-first assistive software.
*   **Tech Stack Grid:** Visually highlights the tools used to engineer both the website and the underlying desktop app.

---

## 💻 Tech Stack

### Frontend & Styling
*   **Framework:** [Next.js 16](https://nextjs.org/) (App Router, React Server Components)
*   **UI Core:** [React 19](https://react.dev/)
*   **Styling:** [TailwindCSS v4.0](https://tailwindcss.com/) (using the updated PostCSS engine for lightning-fast compilation)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Components:** Built with a clean implementation using base primitives and [Shadcn UI](https://ui.shadcn.com/) templates.

### Performance & Interactions
*   **Animations:** Custom scroll-reveal wrapper utilizing Intersection Observer APIs for fluid fade-and-slide entry.
*   **Interactive Canvas:** Lightweight HTML5 2D Context engine rendering responsive node grids at 60 FPS without impacting CPU overhead.
*   **Analytics:** Integrated Vercel Speed Insights and Web Analytics for real-time user metrics.

---

## 📁 Project Structure

```
gestura-landing-page/
├── app/
│   ├── globals.css          # Core design tokens, gradients, and custom scrollbars
│   ├── layout.tsx           # Global layouts, Google Fonts (Outfit), and SEO tags
│   └── page.tsx             # Main entry point combining all website sections
├── components/
│   ├── site-nav.tsx         # Responsive glassmorphism header
│   ├── site-footer.tsx      # Multi-column footer referencing research links
│   ├── landmark-background.tsx # Interactive background particle network
│   ├── reveal.tsx           # Scroll animation wrapper
│   ├── gestura-logo.tsx     # Custom SVG signature branding
│   ├── sections/            # Modular landing page blocks
│   │   ├── hero.tsx
│   │   ├── problem.tsx
│   │   ├── what-it-does.tsx
│   │   ├── how-it-works.tsx
│   │   ├── tech-stack.tsx
│   │   ├── vision.tsx
│   │   ├── demo.tsx
│   │   └── get-started.tsx  # Quick guides to cloned repo & OBS config
│   └── ui/                  # Reusable low-level design primitives
├── lib/
│   └── site-links.ts        # Pinned static URLs (YouTube, Research Paper, GitHub)
├── public/                  # Static assets & illustrations
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js 18.x** or higher installed.

### 1. Clone the repository
```bash
git clone https://github.com/SakshamJain258/gestura-website.git
cd gestura-website
```

### 2. Install dependencies
Using **pnpm** (recommended) or **npm**:
```bash
pnpm install
# or
npm install
```

### 3. Run the development server
```bash
pnpm dev
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the live site.

### 4. Build for production
```bash
pnpm build
# or
npm run build
```

---

## 🛠️ Deployment

The project is optimized for deployment on the **Vercel** platform:

1. Connect your GitHub repository to Vercel.
2. The platform will automatically detect Next.js and configure the build command (`next build`) and output directory.
3. Click **Deploy**. Vercel will build and serve your site globally.

---

## 📜 License

This project is licensed under the **MIT License** — see [LICENSE](./LICENSE) for details.

---

<p align="center">
  <em>Built with precision, interactivity, and accessibility in mind. 🤟</em>
</p>
