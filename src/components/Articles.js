import React from "react";
import "./Articles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Articles() {
  const newsData = [
    {
      title: "The Future of E-Commerce: Trends to Watch",
      image: "https://picsum.photos/300/200?random=1",
      summary:
        "Discover the latest trends shaping e-commerce, from AI-driven recommendations to the rise of sustainable products and online experiences.",
    },
    {
      title: "10 Must-Have Accessories for Your Smartphone",
      image: "https://picsum.photos/300/200?random=2",
      summary:
        "Enhance your smartphone experience with these essential accessories, including cases, screen protectors, and portable chargers.",
    },
    {
      title: "Exploring the Best Home Office Gadgets",
      image: "https://picsum.photos/300/200?random=3",
      summary:
        "Transform your workspace with innovative gadgets that improve productivity, comfort, and organization in your home office.",
    },
    {
      title: "Top 5 Fitness Trackers for 2024",
      image: "https://picsum.photos/300/200?random=4",
      summary:
        "Stay on top of your health goals with our pick of the best fitness trackers for tracking steps, heart rate, and sleep quality.",
    },
    {
      title: "Why Sustainable Fashion is Here to Stay",
      image: "https://picsum.photos/300/200?random=5",
      summary:
        "Sustainable fashion is growing in popularity. Learn why consumers are opting for eco-friendly clothing and how brands are adapting.",
    },
    {
      title: "Tips for Buying a High-Quality Laptop",
      image: "https://picsum.photos/300/200?random=6",
      summary:
        "Choosing a laptop? Here’s what to consider, from battery life and display quality to processing power and durability.",
    },
    {
      title: "Kitchen Gadgets You Didn’t Know You Needed",
      image: "https://picsum.photos/300/200?random=7",
      summary:
        "Upgrade your cooking game with these innovative kitchen gadgets that save time and make meal preparation more enjoyable.",
    },
    {
      title: "How Smart Home Devices Can Simplify Your Life",
      image: "https://picsum.photos/300/200?random=8",
      summary:
        "Discover how smart home devices are changing daily routines, enhancing security, and making homes more efficient.",
    },
  ];

  let articleSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="articles">
      <section id="article-container">
        <div className="news-section">
          <Slider {...articleSettings}>
            {newsData.map((news, index) => (
              <div key={index} className="news-card">
                <img src={news.image} alt={news.title} className="news-image" />
                <h3>{news.title}</h3>
                <p className="news-summery">
                  {news.summary}
                  <a href="/news"> Read More ...</a>
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* <section id="article-category">1000</section> */}
    </div>
  );
}
