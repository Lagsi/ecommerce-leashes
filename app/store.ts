import { atom } from "jotai";

export type Item = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

export const cart = atom<Item[]>([]);
