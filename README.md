# Fake Store

A simple online shop built with Next.js (App Router). It shows products from the
[Fake Store API](https://fakestoreapi.com), lets you search and filter them, add them
to a cart and see the profile of the logged in user.

## Tech stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- React Query (`@tanstack/react-query`) for server data (products and user)
- Zustand for the cart

## Features

- **Product listing** (`/`)
  - Products are fetched on the server (SSR) and passed to React Query as initial data
  - Search products by name
  - Filter products by category
  - Loading (`loading.tsx`) and error (`error.tsx`) states
- **User profile** (`/profile`)
  - User 1 is fetched with React Query (`GET /users/1`)
  - The header shows "Hi, {name}" and links to the profile page
  - Loading and error states (with a "Try again" button)
- **Cart** (`/cart`)
  - Cart state is stored in a Zustand store
  - Add to cart, increase / decrease quantity, remove item
  - Shows unit price, total price per product and the cart total
  - The cart badge in the header shows how many items are in the cart
- **Responsive** on mobile, tablet and desktop (1, 2 or 3 product columns, the cart table scrolls sideways on small screens)

## Setup

You need Node.js 18.18 or newer.

```bash
# 1. clone the repo
git clone <your-repo-url>
cd shop-app

# 2. install packages
npm install

# 3. start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other commands:

```bash
npm run build   # production build
npm start       # run the production build
npm run lint    # run eslint
```

## Project structure

```
src/
  app/
    layout.tsx        # root layout with header and providers
    providers.tsx     # React Query provider
    page.tsx          # product listing (server component)
    loading.tsx       # loading state
    error.tsx         # error state
    cart/page.tsx     # cart page
    profile/page.tsx  # user profile page
  components/
    Header.tsx
    UserGreeting.tsx
    CartButton.tsx
    ProductList.tsx   # search, filter and product grid
    ProductCard.tsx
    CartTable.tsx
  hooks/
    useUser.ts        # React Query hook for the user
  lib/
    api.ts            # fetch functions for the API
  store/
    cartStore.ts      # Zustand cart store
  types/
    index.ts          # Product and User types
```

## Git workflow

Each feature was built on its own branch and merged into `main`:

- `product-listing`
- `user-profile`
- `cart-system`
