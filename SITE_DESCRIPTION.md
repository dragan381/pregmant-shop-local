# PREGMAT — Construction Materials Shop: Full Site Description

## Project Overview

**PREGMAT** is a single-page e-commerce website for a Serbian construction materials and tools supplier. The UI is in Serbian. It is scroll-navigation based (no client-side routing) with a slide-out cart drawer.

---

## Color Palette & Design System

### Theme

- **Accent color:** Orange-amber — `hsl(35, 90%, 50%)` — used for prices, badges, CTA buttons, hover states, icons
- **Background:** Light gray — `hsl(0, 0%, 96%)`
- **Card/Surface:** Pure white — `hsl(0, 0%, 100%)`
- **Muted sections:** Near-white gray — `hsl(0, 0%, 92%)` — used for alternating section backgrounds
- **Foreground/Text:** Dark charcoal — `hsl(0, 0%, 15%)`
- **Primary (dark button):** `hsl(0, 0%, 25%)`
- **Muted text:** `hsl(0, 0%, 45%)`
- **Border:** `hsl(0, 0%, 85%)`
- **Footer background:** Very dark gray — `hsl(0, 0%, 15%)` — with `hsl(0, 0%, 80%)` text
- **"Concrete" gray scale:** Full 50–900 neutral gray scale (no color hue)
- **Dark mode:** Supported via CSS class. Dark background `hsl(0, 0%, 10%)`, dark card `hsl(0, 0%, 15%)`
- **Border radius:** `0.5rem`

### Typography

- **Font:** Roboto (Google Fonts), weights 400/500/700, italic variant for logo
- **Logo:** "PREGMAT" — bold italic, `text-2xl`, white/card color
- **Section titles:** Bold, `text-2xl md:text-3xl`, dark foreground, `mb-6`
- **Prices:** Bold, accent/orange color, `text-lg`

### Animations

- `fade-in`: opacity 0 → 1
- `slide-in`: translate from right (cart drawer entrance)
- `accordion-down/up`: height animations
- Hover on product cards: `shadow-md + translateY(-4px)` (lift effect)
- Hover on category images: inner `<img>` scales to 110% over 500ms

### Spacing / Layout

- **Max-width container:** `max-w-7xl` centered, horizontal padding `px-4 sm:px-6 lg:px-8`
- **Sections vertical padding:** `py-12 md:py-16`

---

## Page Structure (Top to Bottom)

```
┌──────────────────────────────────────────────────────┐
│  NAVBAR (sticky top)                                 │
├──────────────────────────────────────────────────────┤
│  HERO SECTION (full-width image, text overlay)       │
├──────────────────────────────────────────────────────┤
│  AD BANNER (placeholder horizontal ad)               │
├──────────────────────────────────────────────────────┤
│  SPECIAL OFFERS SECTION (carousel of ProductCards)   │
├──────────────────────────────────────────────────────┤
│  CATEGORIES SECTION (carousel of category cards)     │
├──────────────────────────────────────────────────────┤
│  PRODUCTS SECTION (filter bar + paginated grid)      │
├──────────────────────────────────────────────────────┤
│  AD BANNER (second placeholder)                      │
├──────────────────────────────────────────────────────┤
│  FOOTER (4-column: about, contact, links, social)    │
└──────────────────────────────────────────────────────┘
     + CART DRAWER (slide-in overlay from right, z-50)
```

---

## Component Descriptions

### 1. Navbar

- **Position:** Sticky top, `z-50`, white/card background, bottom border, box shadow
- **Height:** `h-16`
- **Left:** Logo text "PREGMAT" — bold italic — clicking scrolls to `#hero`
- **Center/Right (desktop ≥ md):** 3 text-button nav links: "Kategorije" → `#categories`, "Proizvodi" → `#products`, "O nama" → `#about`
- **Far right (desktop):** `ShoppingCart` icon (24×24). If cart has items, shows a small orange circle badge with total item count positioned at top-right of icon
- **Mobile (< md):** Logo left. Right side: cart icon + hamburger/X toggle button
- **Mobile dropdown menu:** Full-width stacked buttons, `py-3 px-2`, fade-in animation, top border, `hover:bg-muted`

### 2. Hero Section

- **Height:** `h-[500px] md:h-[600px]`
- **Background:** Full-width cover image (`/images/hero-construction.jpg`)
- **Overlay:** Linear gradient left-to-right: `concrete-900/90` → `concrete-800/70` → transparent
- **Content:** Left-aligned, vertically centered, max-width ~xl, `animate-fade-in`
  - `<h1>`: "Sve za gradnju na jednom mestu" — bold, `text-4xl md:text-5xl lg:text-6xl`, white
  - `<p>`: "Kvalitetni građevinski materijali i alat za profesionalne izvođače i majstore." — `text-lg md:text-xl`, light gray
  - CTA button: "Saznaj više" — orange accent fill, `px-6 py-3`, rounded, scrolls to `#products`

### 3. Ad Banner (horizontal, used twice)

- White/card background, `py-6`
- Inner box: light gray (`concrete-200`), border, rounded, `p-4`
- Placeholder label "Reklamni prostor" in muted text
- Gray rectangle `h-24 md:h-32` with centered text "728x90 / 970x90"
- Appears once after Hero and once after ProductsSection

### 4. Special Offers Section

- **Background:** White/card (`bg-card`)
- **Title:** "Posebne ponude" — section-title centered
- **Content:** Horizontal looping carousel of `ProductCard` components
  - `basis-full sm:basis-1/2 lg:basis-1/4` (1 → 2 → 4 columns by viewport)
  - Prev/Next arrow buttons: hidden on mobile, visible on `md+`, white bg with orange accent on hover, positioned `-left-4` / `-right-4`
- Shows only products with `isSpecial: true` (4 items: Beli cement, Fasadna boja, Kamena vuna, Set odvijača)

### 5. Categories Section

- **Background:** Muted (`bg-muted`)
- **Title:** "Kategorije" — section-title centered
- **Content:** Horizontal looping carousel
  - `basis-1/2 md:basis-1/3 lg:basis-1/4` (2 → 3 → 4 columns by viewport)
  - Each item: square aspect-ratio card, `rounded-lg`, `overflow-hidden`, cursor pointer, full image cover
  - Hover: inner image smoothly scales to 110% (500ms transition)
  - Bottom gradient overlay: `from-concrete-900/80 via-transparent to-transparent`
  - Category name: bold, white, `text-lg md:text-xl`, bottom-left corner
  - Clicking scrolls to `#products` and activates that category's filter

**4 categories:**
| ID | Name | Slug |
|---|---|---|
| 1 | Cement | cement |
| 2 | Boje i fasade | boje |
| 3 | Izolacija | izolacija |
| 4 | Alat | alat |

### 6. Products Section

- **Background:** Muted (`bg-muted`)
- **Title:** "Proizvodi" — section-title centered
- **Filter bar:** White card, `rounded-lg p-4 shadow-sm mb-8`, responsive 5-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4`)
  - **Col 1:** Category dropdown select with `Layers` icon
  - **Col 2:** Search text input — `Search` icon inset left, placeholder "Pretraži proizvode..."
  - **Col 3:** Min price number input — inline label "Cena od:"
  - **Col 4:** Max price number input — inline label "Cena do:"
  - **Col 5:** Sort dropdown with `SlidersHorizontal` icon — options: Name A-Ž / Ž-A, Price low/high
- **Status line:** Centered muted text — active category name + product count + page X of Y (separated by `•`)
- **Products grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6`, 8 items per page
- **Pagination:** Centered row — `ChevronLeft` / `ChevronRight` outline icon buttons + numbered page buttons; active page uses filled style
- **Empty state:** Centered message with "Resetuj filtere" text link (orange, underline on hover)

### 7. Product Card

- **Container:** White card, `rounded-lg shadow-sm border`, hover: lift (`shadow-md + -translate-y-1`), full-height flex column
- **Top:** Square aspect-ratio image, `object-cover`
  - "Akcija" badge: orange, top-right corner, `text-xs px-2 py-1 rounded` — shown if `isSpecial`
- **Body (`p-4`, flex-grow column):**
  - Product name: bold, dark, `line-clamp-2`
  - Price: bold, accent/orange, `text-lg`, formatted in Serbian locale (e.g., "1.200 RSD")
  - Toggle link: "Pogledaj više" / "Sakrij detalje" — orange, `text-sm`, toggles description visibility
  - Description: `text-sm`, muted, `animate-fade-in` on reveal
- **Bottom (`mt-auto space-y-3`):**
  - Quantity stepper: centered row in muted rounded container — `Minus` icon | number | `Plus` icon, min 1
  - "Dodaj u korpu" button: full-width, dark primary bg, white text, `ShoppingCart` icon left

### 8. Cart Drawer

- **Trigger:** Overlay covers full screen (`foreground/50`), clicking overlay closes drawer
- **Drawer panel:** Slides in from right (`animate-slide-in`), `max-w-md` wide, full viewport height, white/card bg, flex column
- **Header:** "Korpa" label with `ShoppingBag` icon + X close button (rounded hover)
- **Empty state:** Large `ShoppingBag` icon (64×64, muted), "Vaša korpa je prazna"
- **Cart items list (scrollable flex-1):** Each row in `bg-muted rounded-lg p-3 flex gap-3`:
  - 64×64 thumbnail (rounded)
  - Name (`line-clamp-1`, `text-sm`), price in orange/accent
  - Quantity +/- controls (`w-3 h-3` icons)
  - Red `Trash2` icon button right-aligned (`destructive` color)
- **Order form** (toggled by "Poruči" button):
  - Fields: Ime i prezime (required), Telefon (required), Email (optional), Adresa dostave (required), Napomena (textarea, 3 rows)
  - All inputs: `w-full px-3 py-2 border rounded-md bg-background`
- **Sticky footer:** Border top, `p-4 space-y-4`
  - Total row: "Ukupno:" — price in orange, both bold, `text-lg`
  - "Isprazni korpu" — full-width outline button
  - "Poruči" / "Nazad" — full-width dark primary button (toggles form view)
  - When form visible: "Pošalji porudžbinu" — submit button

### 9. Footer

- **Background:** `concrete-800` (very dark gray), `concrete-200` text
- **Layout:** 4-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`), `py-12 md:py-16`
- **Col 1 — About:** Logo "PREGMAT" (bold italic, white, `text-2xl`) + description in `concrete-400`
- **Col 2 — Kontakt:** Icon + text rows for address (`MapPin`), phone (`Phone`), email (`Mail`) — all icons orange/accent
- **Col 3 — Brzi linkovi:** Anchor links to `#categories`, `#products`, `#about` — hover turns orange
- **Col 4 — Pratite nas:** 3 circle social buttons (`w-10 h-10 rounded-full bg-concrete-700`): Facebook, Instagram, LinkedIn — hover: orange fill
- **Map:** Below 4-col grid, `mt-8 rounded-lg h-48` — embedded Google Maps iframe (Belgrade, Serbia)
- **Bottom bar:** Full-width separator, centered copyright text, `py-6 text-sm text-concrete-400`

---

## Data Model

### Category

```
id: number
name: string        (Serbian)
image: string       (/images/category-*.jpg)
slug: string
```

### Product

```
id: number
name: string        (Serbian)
description: string (Serbian)
price: number       (RSD — Serbian dinar, integers)
image: string       (/images/category-*.jpg)
categoryId: number
isSpecial?: boolean
```

### Cart Item

```
id: number
name: string
price: number
quantity: number
image: string
```

---

## Full Product Catalog

| ID  | Name                        | Description                                                       | Price (RSD) | Category      | isSpecial |
| --- | --------------------------- | ----------------------------------------------------------------- | ----------- | ------------- | --------- |
| 1   | Portland cement 25kg        | Visokokvalitetan portland cement za sve vrste građevinskih radova | 850         | Cement        | —         |
| 2   | Beli cement 25kg            | Premium beli cement za dekorativne radove                         | 1200        | Cement        | ✓         |
| 3   | Cement za malterisanje 40kg | Specijalizovani cement za malterisanje zidova                     | 950         | Cement        | —         |
| 4   | Brzovezujući cement 25kg    | Cement sa brzim vremenom vezivanja                                | 1100        | Cement        | —         |
| 5   | Fasadna boja bela 15L       | Kvalitetna fasadna boja za spoljašnje zidove                      | 4500        | Boje i fasade | ✓         |
| 6   | Unutrašnja boja 10L         | Periva unutrašnja boja za sve prostorije                          | 2800        | Boje i fasade | —         |
| 7   | Temeljna boja 5L            | Osnovna boja za pripremu površina                                 | 1800        | Boje i fasade | —         |
| 8   | Lak za drvo 2.5L            | Zaštitni lak za drvene površine                                   | 2200        | Boje i fasade | —         |
| 9   | Stiropor 5cm 1m²            | Termoizolacione stiropor ploče                                    | 350         | Izolacija     | —         |
| 10  | Kamena vuna 10cm            | Zvučna i termička izolacija od kamene vune                        | 650         | Izolacija     | ✓         |
| 11  | Hidroizolacija 10m²         | Bitumenska hidroizolaciona membrana                               | 3500        | Izolacija     | —         |
| 12  | XPS ploče 8cm               | Ekstrudirana polistirenska izolacija                              | 550         | Izolacija     | —         |
| 13  | Profesionalni čekić         | Čelični čekić sa drvenom drškom 500g                              | 1500        | Alat          | —         |
| 14  | Set odvijača 8kom           | Komplet odvijača raznih veličina                                  | 2200        | Alat          | ✓         |
| 15  | Metar 5m                    | Profesionalni metar sa blokadom                                   | 800         | Alat          | —         |
| 16  | Libela 60cm                 | Aluminijumska libela sa 3 nivoa                                   | 1800        | Alat          | —         |

---

## Cart State Logic

- Global in-memory state (no persistence / no localStorage)
- `addToCart(item, qty)`: adds new item or increments quantity of existing
- `removeFromCart(id)`: removes item by id
- `updateQuantity(id, qty)`: updates quantity; if qty ≤ 0, removes item
- `clearCart()`: empties all items
- `getTotalPrice()`: returns sum of `price × quantity` across all items
- Navbar badge shows sum of all item quantities

---

## Images Required

```
/images/hero-construction.jpg      — Full-width hero background (construction site)
/images/category-cement.jpg        — Cement category card + all cement product images
/images/category-paint.jpg         — Paint/facade category card + all paint product images
/images/category-insulation.jpg    — Insulation category card + all insulation product images
/images/category-tools.jpg         — Tools category card + all tools product images
```

---

## Interactions & UX Behaviors

- **Scroll navigation:** All nav links and CTA buttons smooth-scroll to section `id`s (`#hero`, `#categories`, `#products`, `#about`)
- **Category → Products:** Clicking a category card sets it as active filter in Products section and scrolls there with a 100ms delay
- **Product quantity stepper:** Min value 1, no max, resets to 1 after adding to cart
- **Cart toast:** "Dodato u korpu" notification with product name and quantity appears on add-to-cart
- **Order submit toast:** "Porudžbina poslata! Kontaktiraćemo vas u najkraćem roku." — clears cart, resets form, closes drawer
- **Filter reset button:** Resets search text, min price, max price (does not reset category or sort)
- **Pagination auto-reset:** Goes back to page 1 whenever category, search, price, or sort changes

---

## All UI Text (Serbian)

| Location              | Text                                                                                                                                         |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Navbar links          | Kategorije, Proizvodi, O nama                                                                                                                |
| Hero title            | Sve za gradnju na jednom mestu                                                                                                               |
| Hero subtitle         | Kvalitetni građevinski materijali i alat za profesionalne izvođače i majstore.                                                               |
| Hero CTA button       | Saznaj više                                                                                                                                  |
| Special Offers title  | Posebne ponude                                                                                                                               |
| Categories title      | Kategorije                                                                                                                                   |
| Products title        | Proizvodi                                                                                                                                    |
| Search placeholder    | Pretraži proizvode...                                                                                                                        |
| Price filter labels   | Cena od:, Cena do:                                                                                                                           |
| Sort options          | Ime (A-Ž), Ime (Ž-A), Cena (najniža), Cena (najviša)                                                                                         |
| Product sale badge    | Akcija                                                                                                                                       |
| Product detail toggle | Pogledaj više / Sakrij detalje                                                                                                               |
| Add to cart button    | Dodaj u korpu                                                                                                                                |
| Products status line  | Prikazuje se: {category} • {count} proizvoda • Strana {x} od {y}                                                                             |
| Empty results         | Nema proizvoda koji odgovaraju kriterijumima pretrage.                                                                                       |
| Reset filters link    | Resetuj filtere                                                                                                                              |
| Cart drawer title     | Korpa                                                                                                                                        |
| Cart empty state      | Vaša korpa je prazna                                                                                                                         |
| Cart total label      | Ukupno:                                                                                                                                      |
| Order button          | Poruči                                                                                                                                       |
| Clear cart button     | Isprazni korpu                                                                                                                               |
| Back button           | Nazad                                                                                                                                        |
| Submit order button   | Pošalji porudžbinu                                                                                                                           |
| Order form — name     | Ime i prezime \*                                                                                                                             |
| Order form — phone    | Telefon \*                                                                                                                                   |
| Order form — email    | Email                                                                                                                                        |
| Order form — address  | Adresa dostave \*                                                                                                                            |
| Order form — note     | Napomena                                                                                                                                     |
| Footer about text     | Vaš pouzdan partner za sve građevinske materijale i alate. Kvalitetni proizvodi po pristupačnim cenama za profesionalne izvođače i majstore. |
| Footer contact title  | Kontakt                                                                                                                                      |
| Footer address        | Industrijska zona bb, 11000 Beograd, Srbija                                                                                                  |
| Footer phone          | +381 11 123 4567                                                                                                                             |
| Footer email          | info@pregmat.rs                                                                                                                              |
| Footer links title    | Brzi linkovi                                                                                                                                 |
| Footer social title   | Pratite nas                                                                                                                                  |
| Copyright             | © 2025 Pregmat. Sva prava zadržana.                                                                                                          |
| Ad placeholder label  | Reklamni prostor                                                                                                                             |
| Ad size label         | 728x90 / 970x90                                                                                                                              |
