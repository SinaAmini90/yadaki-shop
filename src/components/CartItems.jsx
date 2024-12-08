import React from "react";
import "./CartItems.css";
import Button from "./Button";

export default function Cart({ item, addFunc, removeFunc }) {
  return (
    <li className="cart-item" key={item.id}>
      <div className="cart-item-img-title-container">
        <img src={item.image} alt={item.name} />
        <div className="cart-item-decription-container">
          <h3>{item.name}</h3>
          <h4>{item.description}</h4>
        </div>
      </div>
      <div className="cart-item-price-container">
        <p>Price: ${item.price.toFixed(2)}</p>
        <div className="cart-item-quantity-container">
          <Button
            cssClass="cart-quantity-button minus"
            onClick={() => removeFunc(item.id)}
          >
            -
          </Button>
          <p>{item.quantity}</p>
          <Button
            cssClass="cart-quantity-button plus"
            onClick={() => addFunc(item)}
          >
            +
          </Button>
        </div>{" "}
      </div>
      <p className="cart-item-total-price">
        Total Price: ${(item.price * item.quantity).toFixed(2)}
      </p>
    </li>
  );
}
