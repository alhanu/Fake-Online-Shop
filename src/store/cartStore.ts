import { create } from "zustand";
import { Product } from "@/types";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: Product) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.items.find((item) => item.product.id === product.id);

      // if the product is already in the cart just add one more
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return { items: [...state.items, { product, quantity: 1 }] };
    }),

  increaseQuantity: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  // quantity can't go below 1, use the remove button to delete the item
  decreaseQuantity: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),

  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== id),
    })),
}));
