import { useContext } from "react";
import "./Product.css";
import Button from "./Button";
import CartContext from "../store/CartContext";
import { ProductItem } from "../types";
import { useTranslation } from "react-i18next";

const Product: React.FC<ProductItem> = ({ ...props }) => {
  const cartCtx = useContext(CartContext);
  const { i18n } = useTranslation();

  type SupportedLang = "en" | "fa" | "ar";
  const currentLang: SupportedLang = i18n.language as SupportedLang;

  function handleAddProduct(product: ProductItem) {
    cartCtx.addItem(product);
  }
  function handleRemoveProduct(id: number) {
    cartCtx.removeItem(id);
  }
  const itemQuantity = cartCtx.items.find(
    (item) => item.id === props.id
  )?.quantity;
  return (
    <li className="product-card" key={props.id}>
      <div>
        <img
          src={props.image}
          alt={props.name[currentLang]}
          className="product-image"
        />
        <h2 className="product-name">{props.name[currentLang]}</h2>
        <p className="description">{props.description.material[currentLang]}</p>
      </div>
      <div>
        <p className="product-price">${props.price.toFixed(2)}</p>
        {itemQuantity ? (
          <div className="product-quantity-container">
            <Button
              onClick={() => handleRemoveProduct(props.id)}
              cssClass="cart-quantity-button minus"
              textOnly={false}
            >
              -
            </Button>
            <span className="1">{itemQuantity || 0}</span>
            <Button
              onClick={() => handleAddProduct(props)}
              cssClass="cart-quantity-button plus"
              textOnly={false}
            >
              +
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => handleAddProduct(props)}
            cssClass="add-to-cart"
            textOnly={false}
          >
            Add to Cart
          </Button>
        )}
      </div>
    </li>
  );
};
export default Product;
