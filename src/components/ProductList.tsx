import "./ProductList.css";
import { useState, useMemo, useEffect } from "react";
import { categoryData } from "../data/data.js";
import productsData from "../data/productsData.js";
import Product from "./Product";
import { ProductListProps } from "../types";
import { NavLink, useLocation } from "react-router-dom";

const ProductList: React.FC<ProductListProps> = ({ featured }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { state } = useLocation();

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
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : productsData.filter(
          (product) =>
            product.category === selectedCategory &&
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
  }, [selectedCategory, productsData, searchQuery]);

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
          <option value="all">All Categories</option>
          {categoryData.map((category) => {
            return <option value={category.title}>{category.title}</option>;
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
          All
          <br />
          products
        </NavLink>
      </div>
    </div>
  );
};

export default ProductList;
