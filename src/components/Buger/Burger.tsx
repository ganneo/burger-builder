import React from "react";
import "./Burger.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngedients";

interface BurgerProps {
  ingredients: string[];
}

const Burger: React.FC<BurgerProps> = (props) => {
  return (
    <div>
      <p className="bread-top">bread top</p>
      <BurgerIngredients ingredients={props.ingredients} />
      <p className="bread-bottom">bread bottom</p>
    </div>
  );
};

export default Burger;
