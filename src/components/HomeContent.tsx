"use client";

import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function HomeContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [category, setCategoryState] = useState(
    searchParams.get("category") || "All",
  );
  const [maxPrice, setMaxPriceState] = useState(
    Number(searchParams.get("price")?.split("-")[1]) || 1000,
  );
  const search = searchParams.get("search") || "";

  const updateParams = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => params.set(key, value));
    router.replace(`${pathname}?${params.toString()}`);
  };

  const setCategory = (cat: string) => {
    setCategoryState(cat);
    updateParams({ category: cat });
  };

  const setMaxPrice = (price: number) => {
    setMaxPriceState(price);
    updateParams({ price: `0-${price}` });
  };

  const filtered = products.filter((p) => {
    const matchCategory = category === "All" || p.category === category;
    const matchPrice = p.price <= maxPrice;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchPrice && matchSearch;
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
