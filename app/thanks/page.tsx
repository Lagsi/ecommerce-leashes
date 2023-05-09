"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ThanksPage() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(
      () => router.push("https://github.com/Lagsi/ecommerce-leashes"),
      5000
    );
  }, []);

  return (
    <div className="text-center">
      <h1>Thanks for shopping with us!!!!!!</h1>
      <h2>BYYEEEE</h2>
    </div>
  );
}
