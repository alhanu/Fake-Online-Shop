"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function CartButton() {
  const items = useCartStore((state) => state.items);

  // count all items, not just different products
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link href="/cart" className="flex items-center gap-1 text-sm">
      Cart
      <span className="flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-red-500 text-white text-xs">
        {count}
      </span>
    </Link>
  );
}
