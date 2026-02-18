# Stellarmart Frontend Documentation

Stellarmart is a React + Vite single-page frontend for a marketplace landing experience. It includes a fixed navigation bar, hero section, onboarding steps, pricing plans, and footer content.

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- ESLint 9 (flat config)
- Lucide React icons

## Installed Packages

Runtime dependencies (`dependencies`):

- `react`
- `react-dom`
- `tailwindcss`
- `@tailwindcss/vite`
- `lucide-react`

Development dependencies (`devDependencies`):

- `vite`
- `@vitejs/plugin-react`
- `eslint`
- `@eslint/js`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `globals`

## Project Structure

```text
src/
  main.jsx                  # App bootstrap
  App.jsx                   # Page composition
  index.css                 # Global styles + Tailwind import
  components/
    Navbar.jsx              # Header, desktop nav, mobile menu
    HeroSection.jsx         # Main hero copy and CTAs
    StoreCard.jsx           # 4-step onboarding cards
    Pricing.jsx             # Pricing section and plan data
    PricingCard.jsx         # Reusable plan card UI
    Footer.jsx              # Footer links, newsletter, contacts
public/
  ...images and icons used across sections
eslint.config.js            # ESLint flat config
vite.config.js              # Vite + React + Tailwind plugin config
```

## How the App Renders

1. `src/main.jsx` mounts React into `#root` and wraps the app with `StrictMode`.
2. `src/App.jsx` renders sections in this order:
   - `Navbar`
   - `HeroSection`
   - `StoreCard`
   - `Pricing`
   - `Footer`

This means the app is currently a one-page marketing layout without route-level page switching.

## Component Notes

### `Navbar`

- Has two local UI states:
  - `isProfileOpen`: toggles profile dropdown.
  - `isMenuOpen`: toggles mobile drawer + backdrop.
- Desktop navigation items are generated from `navLinks`.
- Mobile drawer reuses the same `navLinks` list.
- Search input and cart indicator are visual-only in current implementation.

### `HeroSection`

- Displays core value proposition and CTA buttons.
- Uses static assets from `public/`.
- CTA buttons are presentational (no handlers yet).

### `StoreCard`

- Maps through `cardData` to render four setup steps.
- Data-driven card content makes updates easy from one array.

### `Pricing`

- Contains `plans` data array and maps each plan into `PricingCard`.
- Current plan titles/prices are static and local to the component.

### `PricingCard`

- Accepts `title`, `price`, and `popular` props.
- Uses a shared `features` list for all plans.
- Button is currently presentational.

### `Footer`

- Contains quick links, customer links, payment graphic, newsletter field, and contact details.
- Social icons are image-based and currently not wired to external profile links.

## Styling System

- Tailwind CSS utilities are used directly in JSX for layout and typography.
- `src/index.css` imports Tailwind and sets:
  - Google Inter font
  - page background color `#F8FAFC`
- Color usage is currently inline via utility arbitrary values (example: `bg-[#44C538]`).

## Linting and Build

Available scripts:

- `npm run dev` - start local development server
- `npm run build` - production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint

On Windows PowerShell with strict execution policy, use:

```powershell
npm.cmd run lint
npm.cmd run dev
```

## ESLint Rules (Current)

`eslint.config.js` is configured for:

- JavaScript recommended rules (`@eslint/js`)
- React hooks rules (`eslint-plugin-react-hooks`)
- React refresh/Vite integration (`eslint-plugin-react-refresh`)
- Browser globals (`globals.browser`)
- Custom `no-unused-vars` behavior to ignore names beginning with uppercase or underscore

## Known Functional Gaps

These are not build blockers, but important for production readiness:

- Navigation links are not fully wired for real page routing.
- Several buttons/inputs are UI-only (no submit or action handlers).
- Pricing cards share one feature list; per-plan differentiation is not implemented.
- Accessibility can be improved (semantic interactive elements, keyboard behavior).

## Local Setup

1. Install Node.js LTS.
2. Install dependencies:

```bash
npm ci
```

Alternative (manual install command):

```bash
npm install react react-dom tailwindcss @tailwindcss/vite lucide-react
npm install -D vite @vitejs/plugin-react eslint @eslint/js eslint-plugin-react-hooks eslint-plugin-react-refresh globals
```

If you only want to add icon + styling packages to an existing React app:

```bash
npm install tailwindcss
npm install lucide-react
npm install @tailwindcss/vite
```

3. Run the app:

```bash
npm run dev
```

4. Run quality checks:

```bash
npm run lint
npm run build
```

