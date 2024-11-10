import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Hero.css";

export default function Hero() {
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
    <div className="hero">
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
    </div>
  );
}
