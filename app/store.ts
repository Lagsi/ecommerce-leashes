import { atom } from "jotai";

export type Item = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  color: string;
};

export const cart = atom<Item[]>([]);
