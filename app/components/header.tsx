"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [itemsInCart, setItemsInCart] = useState([]);
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
          <div className="h-full px-2 flex items-center text-stone-100 hover:bg-slate-100 hover:cursor-pointer hover:text-stone-500">
            <Link className="text-xl font-semibold" href={"/"}>
              Home
            </Link>
          </div>
          <div className="h-full px-2 flex items-center text-stone-100 hover:bg-slate-100 hover:cursor-pointer hover:text-stone-500">
            <Link className="text-xl font-semibold" href={"/leashes"}>
              Leashes
            </Link>
          </div>
        </nav>
        <div className="absolute right-3 top-10 z-10 rounded-full bg-teal-950 text-stone-100 text-xs px-1 text-center w-4 ">
          {itemsInCart.length}
        </div>
        <div className="absolute right-5 top-1/2 -translate-y-1/2">
          <FaShoppingCart
            onClick={() => {
              setCartOpen(!cartOpen);
              setItemsInCart(JSON.parse(localStorage.getItem("itemsInCart")!));
            }}
            color="#F5F5F4"
            size={24}
            className="hover:cursor-pointer"
          />
        </div>
        {cartOpen && (
          <div
            ref={cartRef}
            className="absolute right-20 top-10 p-6 z-50 bg-stone-500 rounded-lg border-stone-700 border"
          >
            <div className="border-b">
              <h2 className="text-xl">Cart</h2>
            </div>
            {itemsInCart.length >= 1 ? (
              <div>
                {itemsInCart.map((item: any, i) => (
                  <div key={i} className="flex gap-4">
                    <h3>{item.title}</h3>
                    <span>${item.price}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p>No items in cart..</p>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
