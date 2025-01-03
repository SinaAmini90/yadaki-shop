import "./CategoryProduct.css";
import { useNavigate } from "react-router-dom";
import { categoryData } from "../data/data.js";
import { useTranslation } from "react-i18next";

export default function CategoryProduct() {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const handleCategoryClick = (category: string) => {
    navigate("/products", { state: { selectedCategory: category } });
  };
  return (
    <div>
      <div className="products-category-container">
        {categoryData.map((category) => {
          return (
            <div
              key={category.title}
              className="product-category"
              onClick={() => handleCategoryClick(category.title)}
            >
              <img src={category.image} alt={category.title} />
              <h3>{t(category.title)}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
