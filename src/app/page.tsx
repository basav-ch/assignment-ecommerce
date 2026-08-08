import { Suspense } from "react";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}