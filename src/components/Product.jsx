import React, { useContext } from "react";
import "./Product.css";
import Button from "./Button";
import CartContext from "../store/CartContext.jsx";

export default function Product({ ...props }) {
  const cartCtx = useContext(CartContext);
  console.log("items", cartCtx.items);

  function handleAddProduct(product) {
    cartCtx.addItem(product);
  }
  function handleRemoveProduct(id) {
    cartCtx.removeItem(id);
  }
  const itemQuantity = cartCtx.items.find(
    (item) => item.id === props.id
  )?.quantity;
  return (
    <li className="product-card" key={props.id}>
      <img src={props.image} alt={props.name} className="product-image" />
      <h2 className="product-name">{props.name}</h2>
      <p className="description">More Description</p>
      <p className="product-price">${props.price.toFixed(2)}</p>
      {itemQuantity ? (
        <div className="product-quantity-container">
          <Button
            onClick={() => handleRemoveProduct(props.id)}
            cssClass="cart-quantity-button minus"
          >
            -
          </Button>
          <span className="1">{itemQuantity || 0}</span>
          <Button
            onClick={() => handleAddProduct(props)}
            cssClass="cart-quantity-button plus"
          >
            +
          </Button>
        </div>
      ) : (
        <Button onClick={() => handleAddProduct(props)} cssClass="add-to-cart">
          Add to Cart
        </Button>
      )}
    </li>
  );
}
