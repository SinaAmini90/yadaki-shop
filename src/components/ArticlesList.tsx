import "./ArticlesList.css";
import newsData from "../data/data";
import { useState } from "react";

export default function ArticlesDetailed() {
  const [searchedData, setSearchedData] = useState(newsData);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredData = newsData.filter(
      (news) =>
        news.title.toLowerCase().includes(query) ||
        news.summary.toLowerCase().includes(query)
    );
    setSearchedData(filteredData);
  };
  const highlightText = (text: string, query: string) => {
    if (!query) return text; // If there's no query, return the original text

    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };
  return (
    <section id="article-container" className="article-container">
      <section className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e)}
          placeholder="search..."
        ></input>
      </section>
      <div className="news-section">
        {searchedData.length === 0 ? (
          // <p className="no-results-message">Nothing matches "{searchQuery}"</p>
          <p className="no-results-message">
            مقاله ای با"{searchQuery}" یافت نشد
          </p>
        ) : (
          searchedData.map((news, index) => (
            <article key={index} className="news-card">
              <img src={news.image} alt={news.title} className="news-image" />
              <div>
                <h3 className="news-title">
                  {highlightText(news.title, searchQuery)}
                </h3>
                <p className="news-summary">
                  {highlightText(news.summary, searchQuery)}
                </p>
                <a href="/news" className="read-more-link">
                  {/* Read More... */}
                  ... ادامه مطلب
                </a>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
