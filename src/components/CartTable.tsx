"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function CartTable() {
  const items = useCartStore((state) => state.items);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 mb-4">Your cart is empty.</p>
        <Link href="/" className="text-blue-600 underline">
          Go shopping
        </Link>
      </div>
    );
  }

  return (
    // overflow-x-auto lets the table scroll sideways on small screens
    <div className="overflow-x-auto border border-gray-300">
      <table className="w-full min-w-[700px] text-sm">
        <thead className="bg-gray-400 text-white">
          <tr>
            <th className="p-4 text-left">Number</th>
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Description</th>
            <th className="p-4">Quantity</th>
            <th className="p-4">Price</th>
            <th className="p-4">Total Price</th>
            <th className="p-4"></th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.product.id}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="p-4">{index + 1}</td>
              <td className="p-4 font-semibold max-w-48">
                <p className="line-clamp-2">{item.product.title}</p>
              </td>
              <td className="p-4 max-w-64 text-gray-600">
                <p className="line-clamp-2">{item.product.description}</p>
              </td>
              <td className="p-4">
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => decreaseQuantity(item.product.id)}
                    className="w-6 h-6 rounded-full bg-red-500 text-white leading-none"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.product.id)}
                    className="w-6 h-6 rounded-full bg-blue-600 text-white leading-none"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="p-4 text-center">
                {item.product.price.toFixed(2)}$
              </td>
              <td className="p-4 text-center">
                {(item.product.price * item.quantity).toFixed(2)}$
              </td>
              <td className="p-4 text-center">
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label="Remove item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-6 h-6"
                  >
                    <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr className="border-t border-gray-300">
            <td className="p-4 font-semibold" colSpan={5}>
              Total
            </td>
            <td className="p-4 text-center font-semibold">
              {total.toFixed(2)}$
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
