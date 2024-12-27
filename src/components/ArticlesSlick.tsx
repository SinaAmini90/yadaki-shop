import "./ArticlesSlick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import newsData from "../data/data";

import Slider from "react-slick";

export default function ArticlesSlick() {
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
    <div id="slick-articles" className="slick-articles">
      <section id="slick-article-container">
        <div className="slick-news-section">
          <Slider {...articleSettings}>
            {newsData.map((news, index) => (
              <div key={index} className="slick-news-card">
                <img
                  src={news.image}
                  alt={news.title}
                  className="slick-news-image"
                />
                <h3>{news.title}</h3>
                <p className="slick-news-summery">
                  {news.summary}
                  <br /> <a href="/news"> Read More ...</a>
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}
