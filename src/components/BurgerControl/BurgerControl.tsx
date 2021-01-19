import React from "react";
import "./BurgerControl.css";

interface BurgerContorlProps {
  controlNames: string[];
  lessOnClickHandler: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  moreOnClickHandler: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  price: number;
}

const BurgerControl: React.FC<BurgerContorlProps> = (props) => {
  return (
    <div className="burger-controls">
      <p>
        Price: <strong>${props.price}</strong>
      </p>
      {props.controlNames.map((controlName, i) => {
        return (
          <div key={i}>
            <p>{controlName}</p>
            <button onClick={props.lessOnClickHandler}>Less</button>
            <button onClick={props.moreOnClickHandler}>More</button>
          </div>
        );
      })}
    </div>
  );
};

export default BurgerControl;
