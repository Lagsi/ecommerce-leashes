"use client";

import { useAtom } from "jotai";
import { cart } from "../store";
import Link from "next/link";

export default function CheckoutPage() {
  const [customerCart, setCustomerCart] = useAtom(cart);
  let totalAmount = 0;
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center">
      <div className="max-w-2xl w-[90%] mx-auto min-h-[50vh]  p-6">
        {customerCart.length === 0 ? (
          <h2>No items in cart..</h2>
        ) : (
          <div>
            {customerCart.map((item, i) => {
              totalAmount += item.price * item.quantity;
              return (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center pb-6 mb-6 border-b"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.imgSrc}
                      alt="product thumbnail"
                      className="h-40 w-40 rounded-md"
                    />
                    <div className="flex flex-col justify-center gap-1">
                      <h3>{item.title}</h3>
                      <div>
                        <span className="block text-sm text-stone-200">
                          {item.color}
                        </span>
                        <span className="block text-sm text-stone-200">
                          {item.length}cm
                        </span>
                      </div>
                      <span className="block text-sm text-stone-200">
                        x{item.quantity}
                      </span>
                    </div>
                  </div>
                  <div className="text-lg font-bold">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              );
            })}
            <div className="sm:text-right font-bold text-lg">
              Total: ${totalAmount}
            </div>
          </div>
        )}
      </div>
      {customerCart.length > 0 && (
        <Link
          className="p-2 px-6 border border-transparent font-bold uppercase text-stone-100 bg-teal-950 rounded-lg mt-4 hover:border-teal-950
                  hover:bg-stone-100 hover:text-teal-950 transition ease-in-out"
          href={"/thanks"}
        >
          Pay now
        </Link>
      )}
    </div>
  );
}
