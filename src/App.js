import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
const App = function () {
  const [isShow, setIsShow] = useState(false)
  const showCartHandler = function () {
    setIsShow(true)
  }

  const closeCartHandler = function () {
    setIsShow(false)
  }
  return (
    <>
      {isShow && <Cart onClose={ closeCartHandler} />}
      <Header onOpen={ showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
