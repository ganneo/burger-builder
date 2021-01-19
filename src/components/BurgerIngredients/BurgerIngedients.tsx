import React from "react";
import "./BurgerIngredients.css";

interface BurgerIngredientProps {
  ingredients: string[];
}

const BurgerIngredients: React.FC<BurgerIngredientProps> = (props) => {
  let burgerIngredients;

  if (props.ingredients.length > 0) {
    burgerIngredients = (
      <React.Fragment>
        {props.ingredients.map((ingredient, i) => (
          <p key={i} className={ingredient}>
            {ingredient}
          </p>
        ))}
      </React.Fragment>
    );
  } else {
    burgerIngredients = <p>Please add some ingredients</p>;
  }
  return burgerIngredients;
};

export default BurgerIngredients;
