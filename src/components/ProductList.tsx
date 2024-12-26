import "./ProductList.css";
import { productsData as products } from "../data/data.js";
import Product from "./Product";
import { ProductListProps } from "../types";

const ProductList: React.FC<ProductListProps> = ({ featured }) => {
  //fetch data from backend
  // const [loadedProducts, setLoadedProducts] = setState([]);
  // useEffect(() => {
  //   async function fechProducts() {
  //     const response = await fetch("url");
  //     if (!response.ok) {
  //     }
  //     const products = await response.json();
  //     setLoadedProducts(products);
  //   }
  //   fechProducts();
  // }, []);

  return (
    <div className={featured ? "featured-products" : ""}>
      <div className="product-list-container">
        <ul className="product-list">
          {products.map((product) => (
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
