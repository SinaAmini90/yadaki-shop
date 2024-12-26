import { useContext } from "react";
import CartContext from "../store/CartContext";
import CartItems from "../components/CartItems";
import SectionTitle from "../components/SectionTitle";
import "./Cart.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartCtx = useContext(CartContext);

  // Calculate total amount
  const totalAmount = cartCtx.items.reduce((sum, item) => {
    return sum + item.quantity * item.price;
  }, 0);

  return (
    <div>
      <SectionTitle>
        <span>Shopping</span> Cart
      </SectionTitle>
      <section className="cart-container">
        {cartCtx.items.length === 0 ? (
          <h3>
            Your cart is empty. <Link to="/products">Go shopping!</Link>
          </h3>
        ) : (
          <>
            <ul className="cart-list">
              {cartCtx.items.map((item) => (
                <CartItems
                  key={item.id}
                  item={item}
                  addFunc={cartCtx.addItem}
                  removeFunc={cartCtx.removeItem}
                />
              ))}
            </ul>
            <div className="cart-list cart-summary ">
              <span>Total price: ${totalAmount.toFixed(2)}</span>
              <Button cssClass="add-to-cart" textOnly={false}>
                continue to checkout
              </Button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
