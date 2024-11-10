import React from "react";
import "./Home.css";
import ProductList from "../components/ProductList";
import Articles from "../components/Articles.js";
import CategoryProduct from "../components/CategoryProduct.js";
import Hero from "../components/Hero.js";

const Home = () => {
  return (
    <div>
      <section className="hero">
        <Hero />
      </section>
      <section className="products-category">
        <h2 className="products-category-title">
          product <span>category</span>{" "}
        </h2>
        <CategoryProduct />
      </section>
      <section className="featured-products">
        <h2 className="featured-products-title">
          <span>Featured</span> Products
        </h2>
        <ProductList />
      </section>
      <section className="articles">
        <h2 className="articles-title">
          Last<span> Articles</span>
        </h2>
        <Articles />
      </section>
    </div>
  );
};

export default Home;
