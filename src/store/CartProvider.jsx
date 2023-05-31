import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      let updateItems;
      const isDuplicateItem = state.items.some(
        (item) => item.id === action.payload.id
      );

      const updateTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      if (isDuplicateItem) {
        const duplicateItemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[duplicateItemIndex].amount += action.payload.amount;
        updateItems = [...state.items];
      } else {
        updateItems = [...state.items, action.payload];
      }

      return {
        ...state,
        totalAmount: updateTotalAmount,
        items: updateItems,
      };

    case "REMOVE_ITEM":
      const [chosenItem] = state.items.filter(
        (item) => item.id === action.payload
      );
      const chosenItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const totalAmount = state.totalAmount - chosenItem.price;
      if (chosenItem.amount > 1) {
        state.items[chosenItemIndex].amount--;
      } else {
        state.items.splice(chosenItemIndex, 1);
      }
      return { ...state, totalAmount: totalAmount };

    case "ORDER_ITEMS":
      return { ...state, items: [], totalAmount: 0 };
    
    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = function (item) {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItemHandler = function (id) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const orderItemsHandler = function () {
    dispatch({ type: "ORDER_ITEMS" });
  };

  const initalValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    orderItems: orderItemsHandler,
  };

  return (
    <CartContext.Provider value={initalValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
