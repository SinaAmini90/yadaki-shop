import React from "react";
import "./Home.css";
import ProductList from "../components/ProductList";
import Articles from "../components/Articles.jsx";
import CategoryProduct from "../components/CategoryProduct.jsx";
import Hero from "../components/Hero.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

const Home = () => {
  return (
    <>
      <Hero />

      <SectionTitle>
        product <span>category</span>
      </SectionTitle>
      <CategoryProduct />

      <SectionTitle>
        <span>Featured</span> Products
      </SectionTitle>
      <ProductList featured />

      <SectionTitle>
        Last<span> Articles</span>
      </SectionTitle>
      <Articles />
    </>
  );
};

export default Home;
