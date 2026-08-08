"use client";

import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useState, type SubmitEvent } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const items = useCartStore((state) => state.items);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/?search=${encodeURIComponent(query)}`);
  };

  return (
    <header className="bg-blue-700 px-6 py-4 flex items-center justify-between gap-4">
      <Link href="/" className="text-white text-2xl font-bold">
        Logo
      </Link>

      <form onSubmit={handleSearch} className="flex-1 max-w-xl relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
          className="w-full pl-10 pr-4 py-2 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </form>

      <Link
        href="/cart"
        className="relative flex items-center gap-2 bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-900"
      >
        <ShoppingCart size={18} />
        Cart
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {count}
          </span>
        )}
      </Link>
    </header>
  );
}
