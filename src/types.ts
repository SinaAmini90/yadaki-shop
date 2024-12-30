import { ReactNode } from "react";
type Description = {
  material: string;
  weight: number;
  productionMethod: string;
  compatibleCar: string;
};
export type ProductItem = {
  id: number;
  category: string;
  name: string;
  description: Description;
  price: number;
  quantity: number;
  image: string;
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

//prop types
export interface ButtonProps {
  textOnly: boolean;
  cssClass: string;
  [key: string]: any;
}

export interface CartProps {
  item: ProductItem;
  addFunc: (item: ProductItem) => void;
  removeFunc: (id: number) => void;
}

export interface ProductListProps {
  featured: boolean;
}
