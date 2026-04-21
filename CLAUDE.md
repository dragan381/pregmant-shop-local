# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run start     # Run production server
npm run lint      # Run ESLint
```

No test framework is currently configured.

## Architecture

**Stack:** Next.js 15 (App Router), React 18, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query v5, React Hook Form + Zod, Radix UI.

**Data flow:** Static product/category data lives in [data/products.ts](data/products.ts) and is accessed through [services/productService.ts](services/productService.ts). Components consume this via TanStack Query. `services/orderService.ts` is a mock — it has Supabase integration stubbed out and commented.

**Cart state:** Managed globally via React Context in [context/CartContext.tsx](context/CartContext.tsx) (add, remove, update qty, clear, compute totals). Displayed in [components/CartDrawer.tsx](components/CartDrawer.tsx).

**Provider stack** (in [app/layout.tsx](app/layout.tsx)): `QueryClientProvider` → `TooltipProvider` → `CartProvider`.

**Routing:** Currently a single-page app — all content is rendered in [app/page.tsx](app/page.tsx) with scroll-based navigation. The app is ready for additional routes under `app/`.

**UI components:** 35+ shadcn/ui components live in [components/ui/](components/ui/). Custom page-level components are directly under [components/](components/). Path alias `@/*` maps to the project root.

**Styling:** CSS custom properties (HSL variables) defined in [styles/globals.css](styles/globals.css) drive the Tailwind theme. Dark mode is class-based. Custom animations: `accordion-down`, `accordion-up`, `fade-in`, `slide-in`.

## Database (not yet connected)

The project is Supabase-ready. [services/productService.ts](services/productService.ts) contains commented Supabase client code and the SQL schema for `categories` and `products` tables. When connecting:

1. Create a Supabase project and run the schema in the file.
2. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local`.
3. Uncomment the Supabase client code in `productService.ts` and `orderService.ts`.

## Notes

- All interactive components use the `'use client'` directive — the project was recently migrated from Vite and RSC is not yet utilized.
- Images are set to `unoptimized: true` in [next.config.ts](next.config.ts); change this when deploying to Vercel with image optimization.
- TypeScript strict mode is enabled but `noImplicitAny`, `noUnusedLocals`, and similar strict checks are disabled in [tsconfig.json](tsconfig.json).
- The product catalog text is in Serbian.
