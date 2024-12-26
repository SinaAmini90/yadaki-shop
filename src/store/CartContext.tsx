import { type } from "@testing-library/user-event/dist/type";
import { useReducer, createContext } from "react";
import {
  ProductItem,
  CartState,
  CartAction,
  CartContextType,
  ChildrenType,
} from "../types";

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const updatedItems = [...state.items];
      if (existingItemIndex > -1) {
        const existingItem = state.items[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }
      return { ...state, items: updatedItems };
    }

    case "REMOVE_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const updatedItems = [...state.items];
      const existingItem = state.items[existingItemIndex];
      if (existingItem.quantity > 1) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems.splice(existingItemIndex, 1); // اینجا splice مقدار درست را حذف می‌کند
      }
      return { ...state, items: updatedItems };
    }

    default:
      return state;
  }
}

export function CartContextProvider({ children }: ChildrenType) {
  const [cart, dispach] = useReducer(cartReducer, { items: [] });
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };
  function addItem(item: ProductItem) {
    dispach({ type: "ADD_ITEM", item });
  }
  function removeItem(id: number) {
    dispach({ type: "REMOVE_ITEM", id });
  }
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
