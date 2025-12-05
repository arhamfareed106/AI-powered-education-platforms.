# Fluento AI - Spanish Learning Platform

A pixel-perfect frontend implementation of the Fluento AI Spanish learning platform built with Next.js, Tailwind CSS, and Lucide React Icons.

## Features

- Responsive design for all device sizes
- Dark/light mode support
- Interactive UI components
- Pixel-perfect recreation of design specifications
- TypeScript type safety

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Folder Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # Reusable UI components
└── app/globals.css      # Global styles
```

## Color Palette

- Primary Emerald/Mint Green: `#10B981`
- Dark Background: `#0A0A0A` to `#111111`
- Light Background: `#FFFFFF` and `#F9FAFB`

## Components

1. **Navbar** - Fixed navigation bar with logo, menu, and actions
2. **HeroSection** - Main hero section with headline and avatars
3. **DashboardHome** - User dashboard with stats and learning path
4. **SessionComplete** - Session completion screen with feedback
5. **FeaturesSplit** - Feature sections with images and tabs
6. **CoreFeaturesGrid** - Grid of core features
7. **PricingSection** - Pricing plans with highlighted option
8. **FaqSection** - Accordion-style FAQ section