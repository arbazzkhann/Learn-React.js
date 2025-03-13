import React, { useEffect, useState, useRef, use } from "react";

function App() {

  let [count, setCount] = useState(0);

  let val = useRef(0);
  let changeColorRef = useRef();

  let cVal = false;

  const handleIncrement = ()=> {
    val.current = val.current + 1;
    console.log("Value of val: ", val.current);
    setCount(count+1);
  }

  let changeColor = () => {
      changeColorRef.current.style.color = "red";
  }

  return (
    <>
      <div>
        <button onClick={handleIncrement}>Click me!</button>
        <h1 ref={changeColorRef}>{count}</h1>
        <button onClick={changeColor}>Change Color</button>
      </div>
    </>
  )
}

export default App;