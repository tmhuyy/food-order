import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContextData = useContext(CartContext);
  const amountOfItems = cartContextData.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>You Cart</span>
      <span className={classes.badge}>{amountOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
