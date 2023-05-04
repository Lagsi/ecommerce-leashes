import { atom } from "jotai";

export type Item = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  color: string;
  length: number;
};

export const cart = atom<Item[]>([]);

export const colorAndLength = atom({
  color: "",
  length: 0,
});
