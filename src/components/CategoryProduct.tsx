import "./CategoryProduct.css";
import { categoryData } from "../data/data.js";

export default function CategoryProduct() {
  console.log(categoryData);
  return (
    <div>
      <div className="products-category-container">
        {categoryData.map((category) => {
          return (
            <a href="/products" className="product">
              <img src={category.image} alt="category 1" />
              <h3>{category.title}</h3>
            </a>
          );
        })}
      </div>
    </div>
  );
}
