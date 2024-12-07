import { React, useContext } from "react";
import CartContext from "../store/CartContext.jsx";
import CartItems from "../components/CartItems.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import "./Cart.css";
export default function Cart() {
  const cartCtx = useContext(CartContext);

  return (
    <div>
      <SectionTitle>
        <span>Shopping</span> Cart
      </SectionTitle>
      {cartCtx.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartCtx.items.map((item) => (
            <CartItems
              item={item}
              addFunc={cartCtx.addItem}
              removeFunc={cartCtx.removeItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
