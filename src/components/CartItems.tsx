import "./CartItems.css";
import Button from "./Button";
import { CartProps } from "../types";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
const Cart: React.FC<CartProps> = ({ item, addFunc, removeFunc }) => {
  const { i18n } = useTranslation();

  type SupportedLang = "en" | "fa" | "ar";
  const currentLang: SupportedLang = i18n.language as SupportedLang;

  return (
    <li className="cart-item" key={item.id}>
      <div className="cart-item-img-title-container">
        <img src={item.image} alt={item.name[currentLang]} />
        <div className="cart-item-decription-container">
          <h3 className={currentLang}>{item.name[currentLang]}</h3>
          <p className={currentLang}>
            {item.description.material[currentLang]} / {item.description.weight}
            {t("g")} / {item.description.compatibleCar[currentLang]}
          </p>
        </div>
      </div>
      <div className="cart-item-price-container">
        <p className={currentLang}>
          {t("price")}{" "}
          {currentLang === "fa" ? item.price : item.price.toFixed(2)} {t("$")}
        </p>
        <div className="cart-item-quantity-container">
          <Button
            cssClass="cart-quantity-button minus"
            onClick={() => removeFunc(item.id)}
            textOnly={false}
          >
            -
          </Button>
          <p>{item.quantity}</p>
          <Button
            cssClass="cart-quantity-button plus"
            onClick={() => addFunc(item)}
            textOnly={false}
          >
            +
          </Button>
        </div>
      </div>
      <div className="cart-item-total-price">
        <p className={currentLang}>
          {t("total")}{" "}
          {currentLang === "fa"
            ? item.price * item.quantity
            : (item.price * item.quantity).toFixed(2)}{" "}
          {t("$")}
        </p>
      </div>
    </li>
  );
};

export default Cart;
