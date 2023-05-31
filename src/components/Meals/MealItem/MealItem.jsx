import { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const { meal } = props;
  const cartContextData = useContext(CartContext);
  const addItemToCartHandler = (enteredAmount) => {
    cartContextData.addItem({...meal, amount: enteredAmount})
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{`$${meal.price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm id={meal.id} onAmountItem={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
