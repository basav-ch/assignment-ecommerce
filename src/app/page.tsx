"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1000);

  const filtered = products.filter((p) => {
    const matchCategory = category === "All" || p.category === category;
    return matchCategory && p.price <= maxPrice;
  });

  return (
    <main className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      <Sidebar
        category={category}
        setCategory={setCategory}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
        {filtered.length === 0 ? (
          <p className="text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
