"use client";

import { useAtom, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { cart } from "../store";

interface AddToCartProps {
  id: string;
  price: number;
  title: string;
  color: string;
}

export default function AddToCart({ id, price, title, color }: AddToCartProps) {
  const [nOfitems, setNOfItems] = useState(1);
  const [itemsInCart, setItemsInCart] = useAtom(cart);
  // const [itemsInCart, setItemsInCart] = useState(
  //   JSON.parse(localStorage.getItem("itemsInCart")!) || []
  // );

  function addToCart(
    id: string,
    price: number,
    title: string,
    color: string,
    quantity: number
  ) {
    let item = {
      id: id,
      price: price,
      title: title,
      color: color,
      quantity: quantity,
    };
    const identicalItem = itemsInCart.find((x) => x.id === item.id);
    if (identicalItem) {
      identicalItem.quantity += item.quantity;
    } else {
      setItemsInCart((prev: any) => [item, ...prev]);
    }
  }
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
        <button
          onClick={() => addToCart(id, price, title, color, nOfitems)}
          className="w-full flex justify-center items-center gap-2 text-center rounded-lg py-2 px-2  bg-teal-950 hover:bg-opacity-60 hover:shadow-teal-950 hover:shadow-2xl"
        >
          <FaShoppingCart />
          Add to cart
        </button>
      </div>
    </div>
  );
}
