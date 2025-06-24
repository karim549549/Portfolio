# Portfolio Client

This is a modern portfolio front-end built with **Next.js 15** and **Tailwind CSS**, featuring advanced UI/UX and animation techniques.

## Features

### Hero Section
- **Animated Gradient Headline:** Eye-catching, animated text with gradient effects.
- **Text Generate Effect:** Smooth, staggered word-by-word text reveal for the intro.
- **Beautiful CTA Button:** Modern, interactive call-to-action with animated gradients and hover effects.
- **Animated Cards:**
  - Each card represents a core skill (Frontend, Backend, UI/UX, DevOps).
  - Cards feature a combination of 3D active animation (staggered, spotlight-style) and a subtle, infinite floating effect.
  - Card icons have synchronized glow/brightness animations.
  - All animations are CSS-based for performance and smoothness.

### Spotlight/Light Leak Effect
- A static, soft, diagonal radial gradient "spotlight" is rendered in the background of the Hero section, simulating a light leak from the bottom right to the top left, using Tailwind's arbitrary value utilities.

### Sidebar Beam Indicator
- (Aceternity UI-inspired) vertical beam and indicator, visible on large screens, tracks the current section as the user scrolls.
- The indicator is visually attached to the beam at the active section's vertical position, updating the section number and title dynamically.
- The beam and indicator are contained within the main content container and do not overlap with the main content.

### Modern UI/UX
- Fully responsive layout with Tailwind CSS.
- Custom fonts and color palette using CSS variables.
- Glassmorphism, gradients, and soft shadows for a contemporary look.
- All effects and animations are accessible and performant.

### Creative Hero Section
- Scattered layout for headline, subheadline, description, button, and skill cards on large screens, with smooth fade/rotate-in animations and glassmorphism effects.
- On small/medium screens, elements stack vertically with proper spacing and animation.
- The description uses a glassmorphism style for a modern, soft look.

### Animated Skill Cards
- Each card animates in with a staggered, floating, and glowing effect.

### TextGenerateEffect Component
- Animated, word-by-word text reveal with support for glowing gradients.

## TextGenerateEffect Usage

The `TextGenerateEffect` component animates each word in a string with a fade-in and optional blur effect. You can now use the `color` prop to apply beautiful glowing gradients:

```tsx
<TextGenerateEffect
  words="Golden Glow Text"
  color="golden" // Golden gradient + glow
  // ...other props
/>

<TextGenerateEffect
  words="Custom Glow Text"
  color="custom" // Red-violet gradient + glow
  // ...other props
/>
```

If you omit the `color` prop, the parent styles will apply.

## Animations

- All hero section elements and cards animate in with Framer Motion (fade/rotate in, staggered, and floating effects).
- The animated text supports glowing gradients for extra visual impact.

---

> **Note:** About and Projects sections will be added in future updates.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Enjoy your creative, animated portfolio!
