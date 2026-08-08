"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Star } from "lucide-react";
import { Product } from "@/data/products";
import { useCartStore } from "@/store/cartStore";

export default function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [expanded, setExpanded] = useState(false);
  const [columns, setColumns] = useState(3);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) setColumns(3);
      else if (window.innerWidth >= 640) setColumns(2);
      else setColumns(1);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => setExpanded(true), 1500);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setExpanded(false);
  };

  const colInRow = index % columns;
  const isLastCol = columns > 1 && colInRow === columns - 1;

  const colClass = expanded && columns > 1 ? "col-span-2" : "";
  const rowClass = expanded && columns === 2 ? "row-span-2" : "";

  const style: CSSProperties | undefined =
    expanded && isLastCol ? { gridColumn: `${colInRow} / span 2` } : undefined;

  return (
    <div
      className={`transition-all duration-200 ${colClass} ${rowClass}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={
          expanded
            ? "bg-white rounded-lg shadow-2xl p-4 flex flex-row gap-6 h-full"
            : "bg-white rounded-lg shadow p-4 flex flex-col h-full"
        }
      >
        <Link
          href={`/product/${product.id}`}
          className={expanded ? "w-1/2 shrink-0" : ""}
        >
          <div
            className={`relative w-full ${expanded ? "h-full min-h-70" : "h-40 mb-3"}`}
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>
          {!expanded && <h3 className="font-semibold">{product.title}</h3>}
        </Link>

        {expanded ? (
          <div className="flex flex-col flex-1">
            <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
            <p className="text-gray-700 text-xl mb-2">${product.price}</p>
            <div className="flex mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < product.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-auto bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800"
            >
              Add to Cart
            </button>
          </div>
        ) : (
          <>
            <p className="text-gray-700 mb-2">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-auto bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800"
            >
              Add to Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}
