import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  

  return (
    <>

      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={ props.onOpen } />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meal-img" />
      </div>
    </>
  );
};

export default Header;
