"use client";

import { useAtom } from "jotai";
import { cart } from "../store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

export default function Header() {
  const [itemsInCart, setItemsInCart] = useAtom(cart);
  const [cartOpen, setCartOpen] = useState(() => false);
  const [run, setRun] = useState(Boolean);
  let totalAmount: number = 0;
  const router = useRouter();

  //Setting the itemsInCart atom from localStorage value
  useEffect(() => {
    setItemsInCart(JSON.parse(localStorage.getItem("itemsInCart")!) || []);
  }, []);

  //Setting the localStorage value from itemsInChart, every time our state is changing, but only if itemsInChart(atom).length is > 0
  useEffect(() => {
    if (itemsInCart.length > 0) {
      localStorage.setItem("itemsInCart", JSON.stringify(itemsInCart));
    }
  }, [itemsInCart]);

  //Checking for clicks outside our cart to close it
  const cartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const checkForOutsideCartClick = (e: any) => {
      if (cartOpen && cartRef.current && !cartRef.current.contains(e.target)) {
        setCartOpen(false);
      }
    };
    document.addEventListener("click", checkForOutsideCartClick);
    return () => {
      document.removeEventListener("click", checkForOutsideCartClick);
    };
  }, [cartOpen]);

  return (
    <header className="z-50 h-16 fixed bg-stone-500 border-b border-stone-600 shadow-md w-full top-0">
      <div className="h-16 relative">
        <nav className="flex gap-5 justify-center items-center h-full">
          <Link
            className="text-xl font-semibold h-full px-2 flex items-center text-stone-100 hover:bg-slate-100 hover:cursor-pointer hover:text-stone-500"
            href={"/"}
          >
            <div>Home</div>
          </Link>

          <Link
            className="text-xl font-semibold h-full px-2 flex items-center text-stone-100 hover:bg-slate-100 hover:cursor-pointer hover:text-stone-500"
            href={"/leashes"}
          >
            <div>Leashes</div>
          </Link>
        </nav>
        <div className="absolute right-3 top-10 z-10 rounded-full bg-teal-950 text-stone-100 text-xs px-1 text-center w-4 ">
          {itemsInCart.length}
        </div>
        <div className="absolute right-5 top-1/2 -translate-y-1/2">
          <FaShoppingCart
            onClick={() => {
              setCartOpen(!cartOpen);
            }}
            color="#F5F5F4"
            size={24}
            className="hover:cursor-pointer"
          />
        </div>
        {
          <div
            ref={cartRef}
            className={`absolute p-6 z-50 text-stone-100 bg-stone-500 rounded-lg border-stone-700 border  ${
              cartOpen ? "right-14" : "-right-96"
            } transition-all ease-in-out`}
          >
            <div className="border-b">
              <h2 className="text-xl">Cart</h2>
            </div>
            {itemsInCart.length >= 1 ? (
              <div className="">
                {itemsInCart.map((item, i: any) => {
                  totalAmount += item.price * item.quantity;
                  return (
                    <div key={i} className="grid grid-cols-[1fr,0fr,0fr] gap-4">
                      <div>
                        <h3>{`${item.title} x ${item.quantity}`}</h3>
                        <span className="text-stone-200 text-sm block">{`${item.color}`}</span>
                        <span className="text-stone-200 text-sm block">{`${item.length}cm`}</span>
                      </div>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                      <div>
                        <button
                          onClick={() => {
                            const filtered = itemsInCart.filter(
                              (filterItem) => filterItem !== item
                            );
                            if (filtered.length === 0) {
                              localStorage.setItem(
                                "itemsInCart",
                                JSON.stringify([])
                              );
                              setItemsInCart(filtered);
                            } else {
                              setItemsInCart(filtered);
                            }
                          }}
                        >
                          <FaTrash className="mr-0 ml-auto" />
                        </button>
                      </div>
                    </div>
                  );
                })}
                <div className="border-t mt-2 grid grid-cols-[1fr,0fr] gap-4">
                  <p>Total: </p>
                  <p>${totalAmount.toFixed(2)}</p>
                </div>
                <button
                  className="w-full border border-transparent text-stone-100 bg-teal-950 rounded-lg mt-4 hover:border-teal-950
                  hover:bg-stone-100 hover:text-teal-950 transition ease-in-out"
                  onClick={() => {
                    router.push("/checkout");
                    setCartOpen(false);
                  }}
                >
                  Checkout
                </button>
              </div>
            ) : (
              <p>No items in cart..</p>
            )}
          </div>
        }
      </div>
    </header>
  );
}
