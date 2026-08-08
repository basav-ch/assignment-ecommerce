"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/data/products";
import { useCartStore } from "@/store/cartStore";

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-40 mb-3">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="font-semibold">{product.title}</h3>
      </Link>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <div className="flex mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < product.rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800"
      >
        Add to Cart
      </button>
    </div>
  );
}
