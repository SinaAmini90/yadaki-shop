import React from "react";
import "./Product.css";

const Product = ({ name, price, image, description = "description>>" }) => {
  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price}</p>
      <p className="product-description">${description}</p>
    </div>
  );
};

export default Product;
