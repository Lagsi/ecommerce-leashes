"use client";

import { useState } from "react";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";

export default function AddToCart() {
  const [nOfitems, setNOfItems] = useState(1);
  return (
    <div className="flex gap-4">
      <div className="flex gap-4 w-1/3 justify-between bg-stone-400 rounded-lg py-2 px-2">
        <button
          disabled={nOfitems <= 0}
          onClick={() => setNOfItems(nOfitems - 1)}
        >
          <FaMinus color="rgb(4 47 46)" />
        </button>
        <span className="text-stone-950 font-semibold">{nOfitems}</span>
        <button
          disabled={nOfitems >= 10}
          onClick={() => setNOfItems(nOfitems + 1)}
        >
          <FaPlus color="rgb(4 47 46)" />
        </button>
      </div>
      <div className="flex-grow ">
        <button className="w-full flex justify-center items-center gap-2 text-center rounded-lg py-2 px-2  bg-teal-950 hover:bg-opacity-60 hover:shadow-teal-950 hover:shadow-2xl">
          <FaShoppingCart />
          Add to cart
        </button>
      </div>
    </div>
  );
}
