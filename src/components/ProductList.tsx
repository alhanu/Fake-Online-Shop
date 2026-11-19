"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api";
import { Product } from "@/types";
import ProductCard from "./ProductCard";

interface ProductListProps {
  initialProducts: Product[];
}

export default function ProductList({ initialProducts }: ProductListProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // the products come from the server first, react query keeps them in cache
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialData: initialProducts,
  });

  if (isLoading) {
    return <p className="text-center">Loading products...</p>;
  }

  if (isError || !products) {
    return (
      <p className="text-center text-red-600">
        Something went wrong while loading products.
      </p>
    );
  }

  // get a list of categories without duplicates
  const categories = Array.from(new Set(products.map((p) => p.category)));

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 mb-10">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 border-2 border-gray-300 rounded-full px-4 py-2 outline-none focus:border-blue-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-1/3 border-b-2 border-gray-200 px-2 py-2 outline-none bg-white capitalize"
        >
          <option value="">Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
