import React, { useContext } from "react";
import Component1 from "./Component1";
import { counterContext } from '../Context/context'

const Button = () => {
  const {counter, setCounter} = useContext(counterContext);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        <span>
          <Component1/>
        </span>
        I am button
      </button>
    </div>
  );
};

export default Button;
