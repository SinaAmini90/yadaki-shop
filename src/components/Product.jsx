import React, { useContext } from "react";
import "./Product.css";
import Button from "./Button";
import CartContext from "../store/CartContext.jsx";

export default function Product({ ...props }) {
  const cartCtx = useContext(CartContext);

  function handleAddProduct(product) {
    cartCtx.addItem(product);
  }
  return (
    <li className="product-card" key={props.id}>
      <img src={props.image} alt={props.name} className="product-image" />
      <h2 className="product-name">{props.name}</h2>
      <p className="description">More Description</p>
      <p className="product-price">${props.price.toFixed(2)}</p>
      <Button onClick={() => handleAddProduct(props)} cssClass="add-to-cart">
        Add to Cart
      </Button>
    </li>
  );
}
