import React from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductList from "../components/ProductList";

const Home = () => {
  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    cssEase: "linear",
  };

  return (
    <div>
      <section className="hero">
        <div className="slider-container">
          <Slider {...heroSliderSettings}>
            <div>
              <img src="/images/banner1.jpg" alt="Banner 1" />
            </div>
            <div>
              <img src="/images/banner2.jpg" alt="banner 2" />
            </div>
            <div>
              <img src="/images/banner3.jpg" alt="banner 3" />
            </div>
          </Slider>
        </div>
      </section>
      <section className="products-category">
        <h2 className="products-category-title">
          product <span>category</span>{" "}
        </h2>
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
      </section>
      <section>
        <h2 className="featured-products-title">
          <span>Featured</span> Products
        </h2>
        <ProductList />
      </section>
      <footer></footer>
    </div>
  );
};

export default Home;
