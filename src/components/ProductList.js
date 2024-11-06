import React from "react";
import "./ProductList.css";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    image:
      "https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/ie-true.png",
    description: "description of product",
  },
  {
    id: 2,
    name: "Product 2",
    price: 49.99,
    image:
      "https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/safari-true.png",
    description: "description of product",
  },
  {
    id: 3,
    name: "Product 3",
    price: 19.99,
    image:
      "https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/firefox-true.png",
    description: "description of product",
  },
  {
    id: 4,
    name: "Product 3",
    price: 19.99,
    image:
      "https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/firefox-true.png",
    description: "description of product",
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          {" "}
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h2 className="product-name">{product.name}</h2>
          {/* <button className="description">More Description</button> */}
          <p className="product-price">${product.price.toFixed(2)}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
