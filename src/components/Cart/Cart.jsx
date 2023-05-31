import { useContext } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartContextData = useContext(CartContext);
  const removeItemHandler = function (id) {
    cartContextData.removeItem(id)
  };
  const addItemHandler = function (item) {
    cartContextData.addItem({...item, amount: 1})
  };
  const orderItemHandler = function () {
    const orderList = {
      id: Math.random().toString(),
      orders: cartContextData.items,
      totalAmount: cartContextData.totalAmount
    }
    console.log(orderList)
    cartContextData.orderItems();
    props.onClose()
  }
   return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>
        {cartContextData.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeItemHandler.bind(null, item.id)}
              onAdd={addItemHandler.bind(null, item)}
            />
          );
        })}
      </ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartContextData.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>

        {cartContextData.items.length > 0 && (
          <button
            className={classes.button}
            onClick={orderItemHandler}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
