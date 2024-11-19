import React from "react";
import "./Home.css";
import ProductList from "../components/ProductList";
import Articles from "../components/Articles.js";
import CategoryProduct from "../components/CategoryProduct.js";
import Hero from "../components/Hero.js";
import SectionTitle from "../components/SectionTitle.jsx";

const Home = () => {
  return (
    <>
      <Hero />

      <SectionTitle cssClass="section-title">
        product <span>category</span>
      </SectionTitle>
      <CategoryProduct />

      <SectionTitle cssClass="section-title">
        <span>Featured</span> Products
      </SectionTitle>
      <ProductList featured />

      <SectionTitle cssClass="section-title">
        Last<span> Articles</span>
      </SectionTitle>
      <Articles />
    </>
  );
};

export default Home;
