import { ReactNode } from "react";

export type ProductItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

export interface CartState {
  items: ProductItem[];
}

export type CartAction =
  | { type: "ADD_ITEM"; item: ProductItem }
  | { type: "REMOVE_ITEM"; id: number };

export interface CartContextType {
  items: ProductItem[];
  addItem: (item: ProductItem) => void;
  removeItem: (id: number) => void;
}

export interface ChildrenType {
  children: ReactNode;
}
