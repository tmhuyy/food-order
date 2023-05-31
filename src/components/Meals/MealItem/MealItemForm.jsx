import { useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const { id } = props;
  const [amount, setAmount] = useState(1);

  // funciton handler
  const changeAmountHandler = function (e) {
    setAmount(+e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();
    props.onAmountItem(amount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          value: amount,
          id: `amount_${id}`,
          onChange: changeAmountHandler,
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
