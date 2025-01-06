import "./ArticlesList.css";
import newsData from "../data/data";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SupportedLang } from "../types";

export default function ArticlesDetailed() {
  const [t, i18n] = useTranslation();
  const [searchedData, setSearchedData] = useState(newsData);
  const [searchQuery, setSearchQuery] = useState("");

  const currentLang: SupportedLang = i18n.language as SupportedLang;
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredData = newsData.filter(
      (news) =>
        news.title[currentLang].toLowerCase().includes(query) ||
        news.summary[currentLang].toLowerCase().includes(query)
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
              <img
                src={news.image}
                alt={news.title[currentLang]}
                className="news-image"
              />
              <div>
                <h3 className="news-title">
                  {highlightText(news.title[currentLang], searchQuery)}
                </h3>
                <p className="news-summary">
                  {highlightText(news.summary[currentLang], searchQuery)}
                </p>
                <a href="/news" className="read-more-link">
                  {t("read-more")}
                </a>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
