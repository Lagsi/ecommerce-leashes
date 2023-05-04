"use client";

import { Product } from "@prisma/client";
import { colorAndLength } from "../store";
import { useAtom } from "jotai";

interface Props {
  leash: Product;
}

export default function ColorAndLength({ leash }: Props) {
  const [options, setOptions] = useAtom(colorAndLength);

  function handleChange(event: any) {
    const { name, value } = event.target;
    setOptions((prevOptions) => {
      return {
        ...prevOptions,
        [name]: value,
      };
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <select
        name="color"
        value={options.color}
        onChange={handleChange}
        className="bg-stone-400 text-stone-900 py-2 rounded-lg text-center max-w-[200px] px-6"
      >
        <option>Choose a color</option>
        {leash.color.map((color) => (
          <option key={color} value={color}>
            {color[0].toUpperCase() + color.slice(1)}
          </option>
        ))}
      </select>
      <select
        name="length"
        value={options.length}
        onChange={handleChange}
        className="bg-stone-400 text-stone-900 py-2 rounded-lg text-center max-w-[200px] px-6"
      >
        <option>Choose length</option>
        {leash.length.map((length) => (
          <option key={length} value={length}>
            {length}cm
          </option>
        ))}
      </select>
    </div>
  );
}
