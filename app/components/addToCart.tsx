"use client";

import { useAtom, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { FaCheck, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { cart, colorAndLength } from "../store";

interface AddToCartProps {
  id: string;
  price: number;
  title: string;
  color: string;
}

export default function AddToCart({ id, price, title, color }: AddToCartProps) {
  const [nOfitems, setNOfItems] = useState(1);
  const [itemsInCart, setItemsInCart] = useAtom(cart);
  const [successVisible, setSuccessVisible] = useState(false);
  const [options, setOptions] = useAtom(colorAndLength);
  // const [itemsInCart, setItemsInCart] = useState(
  //   JSON.parse(localStorage.getItem("itemsInCart")!) || []
  // );

  function addToCart(
    id: string,
    price: number,
    title: string,
    color: string,
    length: number,
    quantity: number
  ) {
    let item = {
      id: id,
      price: length > 150 ? ((length - 150) / 50) * (price / 4) + price : price,
      title: title,
      color: color,
      length: length,
      quantity: quantity,
    };
    const identicalItem = itemsInCart.find(
      (x) =>
        x.id === item.id && x.color === item.color && x.length === item.length
    );
    if (identicalItem) {
      identicalItem.quantity += item.quantity;
    } else {
      setItemsInCart((prev: any) => [item, ...prev]);
    }
    setSuccessVisible(true);
    setNOfItems(1);
    setOptions({ color: "", length: 0 });
    setTimeout(() => {
      setSuccessVisible(false);
    }, 2000);
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
          onClick={() =>
            addToCart(id, price, title, options.color, options.length, nOfitems)
          }
          className={`w-full flex justify-center items-center gap-2 text-center rounded-lg py-2 px-2  bg-teal-950 hover:bg-opacity-60 hover:shadow-teal-950 hover:shadow-2xl`}
        >
          {!successVisible && <FaShoppingCart />}{" "}
          {!successVisible && "Add to cart"}
          {successVisible && <FaCheck />} {successVisible && "Added!"}
        </button>
      </div>
    </div>
  );
}
