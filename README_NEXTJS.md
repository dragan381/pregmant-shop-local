# Pregnant Shop - Next.js Version

A modern construction materials e-commerce shop built with Next.js, TypeScript, and Tailwind CSS.

## Project Structure

```
app/                    # Next.js app directory
├── layout.tsx         # Root layout with providers
├── page.tsx          # Home page
components/           # React components (mostly client-side for interactivity)
├── ui/              # shadcn/ui components
├── Navbar.tsx       # Navigation bar
├── HeroSection.tsx  # Hero banner
├── ProductCard.tsx  # Individual product card
└── [other components]

context/              # React context for state management
├── CartContext.tsx  # Shopping cart context

services/             # API/data services
├── productService.ts # Product fetching
├── orderService.ts  # Order submission

hooks/                # Custom React hooks
├── use-toast.ts     # Toast notifications
├── use-mobile.ts    # Mobile detection

data/                 # Static data
├── products.ts      # Product and category data

styles/               # Global styles
├── globals.css      # Tailwind and custom styles

lib/                  # Utility functions
├── utils.ts         # Helper functions (cn)

types/                # TypeScript types
├── index.ts         # Type definitions
```

## Features

- **Server-side Ready**: Layout uses 'use client' for providers, allowing SSR where possible
- **Responsive Design**: Mobile-first responsive layout
- **Shopping Cart**: React Context-based cart management
- **Product Filtering**: Filter by category, search, price range, sort
- **Category Browsing**: Carousel-based category selection
- **Order Form**: Customer order submission form
- **Toast Notifications**: User feedback with sonner
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ and npm or bun

### Installation

```bash
# Install dependencies
npm install
# or
bun install
```

### Development

```bash
npm run dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Key Components

### Page Structure

- **Home Page** (`app/page.tsx`): Main landing page with all sections
- **Layout** (`app/layout.tsx`): Root layout with React Query and Cart providers

### Client Components

Most components are marked with 'use client' to enable interactivity:

- `Navbar` - Navigation and mobile menu
- `CartDrawer` - Shopping cart sidebar
- `ProductCard` - Individual product with add to cart
- `ProductsSection` - Products grid with filters
- `CategoriesSection` - Category carousel
- `SpecialOffersSection` - Featured products carousel

### Server Components

The following can remain as server components:

- `HeroSection` - Static banner
- `AdBanner` - Ad placeholder
- `Footer` - Static footer

## Data Management

### Shopping Cart

Uses React Context API (`CartContext`) for simple cart state management. Can be upgraded to zustand, jotai, or Redux if needed.

### Products

Static data in `data/products.ts`. Ready to integrate with:

- Supabase (uncommented in productService.ts)
- REST API
- GraphQL

## Styling

Built with Tailwind CSS using a custom color scheme:

- Primary colors for CTAs
- Accent color for highlights (orange)
- Responsive utilities
- Custom CSS classes (container-boxed, section-title, product-card, etc.)

## Future Enhancements

- [ ] Supabase integration for dynamic products
- [ ] User authentication
- [ ] Payment integration
- [ ] Order tracking
- [ ] Admin dashboard
- [ ] Image optimization
- [ ] SEO improvements
- [ ] Analytics integration
