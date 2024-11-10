import React from "react";
import "./CategoryProduct.css";

export default function CategoryProduct() {
  return (
    <div>
      <div className="products-category-container">
        <a href="/products" className="product">
          <img src="/images/category1.webp" alt="category 1" />
          <h3>TONGLI CODE</h3>
        </a>
        <a href="/products" className="product">
          <img src="/images/category2.webp" alt="category 2" />
          <h3>Stabilizer Link </h3>
        </a>
        <a href="/products" className="product">
          <img src="/images/category3.webp" alt="category 3" />
          <h3>Front Axle Right</h3>
        </a>
        <a href="/products" className="product">
          <img src="/images/category4.webp" alt="category 4" />
          <h3>Product Group</h3>
        </a>
        <a href="/products" className="product">
          <img src="/images/category5.webp" alt="category 5" />
          <h3>Suspension Bushing </h3>
        </a>
        <a href="/products" className="product">
          <img src="/images/category2.webp" alt="category 2" />
          <h3> Front Axle</h3>
        </a>
        <a href="/products" className="product">
          <img src="/images/category4.webp" alt="category 4" />
          <h3>Fitting Position</h3>
        </a>
        <a href="/products" className="product">
          <img src="/images/category5.webp" alt="category 5" />
          <h3>Rubber-Metal Mount</h3>
        </a>
      </div>
    </div>
  );
}
