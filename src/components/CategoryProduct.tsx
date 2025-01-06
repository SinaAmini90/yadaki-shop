import "./CategoryProduct.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { categoryData } from "../data/data.js";
import { SupportedLang } from "../types";

export default function CategoryProduct() {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation();

  const currentLang: SupportedLang = i18n.language as SupportedLang;

  const handleCategoryClick = (category: string) => {
    navigate("/products", { state: { selectedCategory: category } });
  };
  return (
    <div>
      <div className="products-category-container">
        {categoryData.map((category) => {
          return (
            <div
              key={category.title[currentLang]}
              className="product-category"
              onClick={() => handleCategoryClick(category.title[currentLang])}
            >
              <img src={category.image} alt={category.title[currentLang]} />
              <h3>{t(category.title[currentLang])}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
