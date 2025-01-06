import { ReactNode } from "react";

export type SupportedLang = "en" | "fa" | "ar";

type MultiLangString = {
  fa: string;
  en: string;
  ar: string;
};
type Description = {
  material: MultiLangString;
  weight: number;
  productionMethod: MultiLangString;
  compatibleCar: MultiLangString;
};
export type ProductItem = {
  id: number;
  category: MultiLangString;
  name: MultiLangString;
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

export interface ArticleType {
  title: MultiLangString;
  image: string;
  summary: MultiLangString;
  fullText: MultiLangString;
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

export type SectionTitleProps = {
  children: React.ReactNode;
  lang: string;
};
