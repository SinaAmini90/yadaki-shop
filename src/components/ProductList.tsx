import "./ProductList.css";
import { useState, useMemo, useEffect } from "react";
import { categoryData } from "../data/data.js";
import productsData from "../data/productsData.js";
import Product from "./Product";
import { ProductListProps, SupportedLang } from "../types";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductList: React.FC<ProductListProps> = ({ featured }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { state } = useLocation();
  const [t, i18n] = useTranslation();

  const currentLang: SupportedLang = i18n.language as SupportedLang;

  useEffect(() => {
    if (state?.selectedCategory) {
      setSelectedCategory(state.selectedCategory);
    }
  }, [state]);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const filteredProducts = useMemo(() => {
    return selectedCategory === "all"
      ? productsData.filter((product) =>
          product.name[currentLang]
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : productsData.filter(
          (product) =>
            product.category[currentLang] === selectedCategory &&
            product.name[currentLang]
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
        );
  }, [selectedCategory, searchQuery, currentLang]);

  return (
    <div className={featured ? "featured-products" : "article-container"}>
      <section className={featured ? "search-bar-off" : "search-bar"}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleFilter(e)}
          placeholder="search..."
        ></input>
        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="all">{t("all-category")}</option>
          {categoryData.map((category) => {
            return (
              <option value={category.title[currentLang]}>
                {category.title[currentLang]}
              </option>
            );
          })}
        </select>
      </section>
      <div className="product-list-container">
        <ul className="product-list">
          {filteredProducts.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </ul>
        <NavLink to="/products" id="all-products">
          {t("all")}
          <br />
          {t("products")}
        </NavLink>
      </div>
    </div>
  );
};

export default ProductList;
