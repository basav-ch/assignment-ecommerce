"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Product } from "@/data/products";
import { useCartStore } from "@/store/cartStore";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="text-2xl text-gray-800 mb-3">${product.price}</p>
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={
              i < product.rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="mb-4">
        <span className="font-semibold">Category:</span> {product.category}
      </p>

      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="border px-3 py-1 rounded-md"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="border px-3 py-1 rounded-md"
        >
          +
        </button>
      </div>

      <button
        onClick={() => addToCart(product, quantity)}
        className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800"
      >
        Add to Cart
      </button>
    </div>
  );
}
