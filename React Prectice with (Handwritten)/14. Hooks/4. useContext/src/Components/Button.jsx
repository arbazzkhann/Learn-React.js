import React from "react";
import Component1 from "./Component1";

const Button = ({ count, setCount }) => {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        <span>
          <Component1 count={count}/>
        </span>
        I am button
      </button>
    </div>
  );
};

export default Button;
