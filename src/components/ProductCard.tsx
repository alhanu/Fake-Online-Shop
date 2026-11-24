"use client";

import Image from "next/image";
import { Product } from "@/types";
import { useCartStore } from "@/store/cartStore";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="flex flex-col bg-white shadow-md">
      <div className="relative h-56 bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-4"
        />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h2 className="text-lg font-semibold mb-3 line-clamp-2">
          {product.title}
        </h2>
        <p className="text-sm text-gray-600 mb-4 line-clamp-4">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm text-gray-700">price {product.price}$</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white text-sm px-5 py-2 hover:bg-blue-700"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
