# Pull request descriptions

## product-listing

**Title:** Product listing with search and category filter

**Description:**
- Fetch products from `GET /products` on the server (SSR) in `app/page.tsx`
- Pass the products to React Query as `initialData` in `ProductList`
- Product grid with `ProductCard` (image, title, description, price)
- Search by product name and filter by category
- Add `loading.tsx` and `error.tsx` for loading and error states
- Grid is 1 column on mobile, 2 on tablet and 3 on desktop

## user-profile

**Title:** User profile with React Query

**Description:**
- Add `useUser` hook that fetches `GET /users/1` with React Query
- Show "Hi, {firstname}" with an avatar icon in the header
- Add `/profile` page with name, username, email, phone and address
- Handle loading and error states (error state has a retry button)

## cart-system

**Title:** Cart system with Zustand

**Description:**
- Add Zustand store (`store/cartStore.ts`) with add, increase, decrease and remove actions
- "Add to cart" button on every product card
- Cart badge in the header shows the number of items
- `/cart` page with a table: number, title, description, quantity (+/-), price, total price and remove button
- Show the total price of the whole cart
- Table scrolls horizontally on small screens
