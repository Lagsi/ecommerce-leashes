import { atom } from "jotai";

type Item = {
  id: string;
  title: string;
  price: number;
};

export const cart = atom<Item[]>([]);
