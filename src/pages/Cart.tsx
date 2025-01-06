import { useContext } from "react";
import CartContext from "../store/CartContext";
import CartItems from "../components/CartItems";
import SectionTitle from "../components/SectionTitle";
import "./Cart.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Cart() {
  const cartCtx = useContext(CartContext);
  const [t, i18n] = useTranslation();
  const currentLang = i18n.language;
  // Calculate total amount
  const totalAmount = cartCtx.items.reduce((sum, item) => {
    return sum + item.quantity * item.price;
  }, 0);

  return (
    <>
      <SectionTitle lang="en">
        <span>{t("Shopping")}</span> {t("cart")}
      </SectionTitle>
      <section className="cart-container">
        {cartCtx.items.length === 0 ? (
          <h3>
            {t("empty-cart")}{" "}
            <Link className={currentLang} to="/products">
              {t("go-shoping")}
            </Link>
          </h3>
        ) : (
          <>
            <ul className="cart-list">
              {cartCtx.items.map((item) => (
                <CartItems
                  key={item.id}
                  item={item}
                  addFunc={cartCtx.addItem}
                  removeFunc={cartCtx.removeItem}
                />
              ))}
            </ul>
            <section className="cart-list">
              <div className="cart-summary">
                <span className={currentLang}>
                  {t("total-price")}{" "}
                  {currentLang === "en" ? totalAmount.toFixed(2) : totalAmount}{" "}
                  {t("$")}
                </span>
                <Button cssClass="add-to-cart" textOnly={false}>
                  {t("checkout")}
                </Button>
              </div>
            </section>
          </>
        )}
      </section>
    </>
  );
}
