import React from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductList from "../components/ProductList";
import Articles from "../components/Articles.js";
import CategoryProduct from "../components/CategoryProduct.js";

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
