import Burger from "./components/Buger/Burger";
import "./App.css";
import { useState } from "react";
import BurgerControl from "./components/BurgerControl/BurgerControl";

function App() {
  const [ingredientState, setIngredientState] = useState({
    ingredients: Array<string>(),
  });
  const controls = ["cheese", "salad", "bacon", "meat"];
  let price = 0;
  ingredientState.ingredients.forEach((ingredient) => {
    if (ingredient === "cheese") {
      price = price + 2;
    }
    if (ingredient === "salad") {
      price = price + 1.5;
    }
    if (ingredient === "bacon") {
      price = price + 3;
    }
    if (ingredient === "meat") {
      price = price + 2.5;
    }
  });

  const lessOnClickHandler: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void = (e) => {
    const btn = e.target! as HTMLButtonElement;
    const btnParent = btn.parentElement!;
    const value = btnParent.firstChild!.textContent!;
    const index = ingredientState.ingredients.indexOf(value);
    const newState = [...ingredientState.ingredients];
    if (index !== -1) {
      newState.splice(index, 1);
    }
    setIngredientState({
      ingredients: newState,
    });
  };

  const moreOnClickHandler: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void = (e) => {
    const btn = e.target! as HTMLButtonElement;
    const btnParent = btn.parentElement!;
    const value = btnParent.firstChild!.textContent!;
    setIngredientState({
      ingredients: [...ingredientState.ingredients, value],
    });
  };

  return (
    <div className="App">
      <Burger ingredients={ingredientState.ingredients} />
      <BurgerControl
        controlNames={controls}
        price={price}
        lessOnClickHandler={lessOnClickHandler}
        moreOnClickHandler={moreOnClickHandler}
      />
    </div>
  );
}

export default App;
