import "./CartItems.css";
import Button from "./Button";
import { CartProps } from "../types";

const Cart: React.FC<CartProps> = ({ item, addFunc, removeFunc }) => {
  return (
    <li className="cart-item" key={item.id}>
      <div className="cart-item-img-title-container">
        <img src={item.image} alt={item.name} />
        <div className="cart-item-decription-container">
          <h3>{item.name}</h3>
          <p>
            {item.description.material}/{item.description.weight}گرم /مناسب برای{" "}
            {item.description.compatibleCar}
          </p>
        </div>
      </div>
      <div className="cart-item-price-container">
        {/* <p>Price: ${item.price.toFixed(2)}</p> */}
        <p>قیمت {item.price} تومان</p>
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
      {/* <p className="cart-item-total-price">
        Total Price: ${(item.price * item.quantity).toFixed(2)}
      </p>  */}
      <p className="cart-item-total-price">
        مجموع {item.price * item.quantity} تومان
      </p>
    </li>
  );
};

export default Cart;
