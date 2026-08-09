"use client";

import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useState, type SubmitEvent, type ChangeEvent } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const items = useCartStore((state) => state.items);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  const router = useRouter();
  const [query, setQuery] = useState("");
  const pathname = usePathname();

  const updateSearch = (value: string) => {
    const params = new URLSearchParams(window.location.search);
    if (value) params.set("search", value);
    else params.delete("search");
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSearch = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateSearch(query);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value === "") updateSearch("");
  };

  return (
    <header className="bg-blue-700 px-6 py-6 grid grid-cols-9 items-center gap-4">
      <Link href="/" className="text-white text-4xl font-bold col-span-3 ml-8">
        Logo
      </Link>

      <form
        onSubmit={handleSearch}
        className="relative border-white col-span-5 mr-20"
      >
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
          size={18}
        />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for products..."
          className="w-full pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-100 placeholder-white border border-white text-white bg-transparent"
        />
      </form>

      <Link
        href="/cart"
        className="relative flex items-center justify-center gap-2 bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-900 justify-self-end w-full mr-10 "
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
