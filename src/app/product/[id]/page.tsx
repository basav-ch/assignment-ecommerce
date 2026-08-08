import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";
import ProductDetailClient from "@/components/ProductDetailClient";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) notFound();

  return (
    <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="relative w-full h-96 bg-white rounded-lg">
        <Image src={product.image} alt={product.title} fill className="object-contain" />
      </div>
      <ProductDetailClient product={product} />
    </main>
  );
}