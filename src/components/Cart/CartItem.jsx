import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { item } = props;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{`$${item.price.toFixed(2)}`}</span>
          <span className={classes.amount}>x {item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
