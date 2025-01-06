import { ButtonProps } from "../types";
import "../App.css";

const Button: React.FC<ButtonProps> = ({
  textOnly,
  cssClass,
  children,
  ...props
}) => {
  let buttonMode = textOnly ? "text-button" : " ";
  buttonMode += cssClass;
  return (
    <button className={buttonMode} {...props}>
      {children}
    </button>
  );
};

export default Button;
