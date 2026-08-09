"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { ArrowLeft } from "lucide-react";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) {
    return (
      <main className="max-w-4xl mx-auto p-6">
        <Link
          href="/"
          className="inline-flex items-center font-semibold gap-2 hover:underline mb-4"
        >
          <ArrowLeft size={28} />
          Back
        </Link>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
          <p className="text-gray-500 mb-4">Your cart is empty.</p>
          <Link href="/" className="text-blue-700 underline">
            Continue shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 hover:underline mb-4 font-semibold"
      >
        <ArrowLeft size={28} />
        Back
      </Link>
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="flex flex-col gap-4 mb-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white rounded-lg shadow p-4"
          >
            <div className="relative w-20 h-20 shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill sizes="80px"
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  updateQuantity(item.id, Math.max(1, item.quantity - 1))
                }
                className="border px-2 py-1 rounded-md"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="border px-2 py-1 rounded-md"
              >
                +
              </button>
            </div>
            <p className="w-20 text-right font-semibold">
              ${item.price * item.quantity}
            </p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
        <span className="text-lg font-semibold">Total</span>
        <span className="text-xl font-bold">${total}</span>
      </div>
    </main>
  );
}
