"use client";

import Image from "next/image";
import Link from "next/link";
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
            fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
        <h3 className="font-bold">{product.title}</h3>
      </Link>
      <p className="font-bold mb-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800"
      >
        Add to Cart
      </button>
    </div>
  );
}
