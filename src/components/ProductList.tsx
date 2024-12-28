import "./ProductList.css";
import { useState, useMemo } from "react";
import { categoryData, productsData as products } from "../data/data.js";
import Product from "./Product";
import { ProductListProps } from "../types";

const ProductList: React.FC<ProductListProps> = ({ featured }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    return selectedCategory === "all"
      ? products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : products.filter(
          (product) =>
            product.category === selectedCategory &&
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
  }, [selectedCategory, products, searchQuery]);

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
        <button id="all-products">
          All
          <br />
          products
        </button>
      </div>
    </div>
  );
};

export default ProductList;
