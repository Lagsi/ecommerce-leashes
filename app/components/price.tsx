"use client";

import { useAtom } from "jotai";
import { finalPrice } from "../store";
import { Product } from "@prisma/client";

interface PriceProps {
  leash: Product;
}

export default function Price({ leash }: PriceProps) {
  const [price, setPrice] = useAtom(finalPrice);
  return (
    <div className="flex justify-between w-full">
      {leash.onSale ? (
        <>
          <div className="flex gap-3 items-center">
            <span className="text-xl font-bold text-stone-900">
              $
              {leash.saleAmount
                ? (price - leash.saleAmount).toFixed(2)
                : (price * (1 - leash.salePercent! / 100)).toFixed(2)}
            </span>
            <span className="bg-teal-800 text-teal-950 px-2 rounded-md font-semibold text-sm">
              {leash.saleAmount
                ? "-$" + leash.saleAmount
                : leash.salePercent + "%"}
            </span>
          </div>
          <div>
            <span className="text-stone-800 font-bold line-through">
              ${price}
            </span>
          </div>
        </>
      ) : (
        <div>
          <span className="text-xl font-bold text-stone-900">${price}</span>
        </div>
      )}
    </div>
  );
}
