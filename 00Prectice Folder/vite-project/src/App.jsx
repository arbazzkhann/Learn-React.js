import React, { useEffect, useState, useRef, use } from "react";

function App() {

  let [count, setCount] = useState(0);

  let val = useRef(0);

  useEffect(() => {
    console.log("Me firse render ho gaya hu.")
  }, [count])

  const handleIncrement = ()=> {
    val.current = val.current + 1;
    console.log("Value of val: ", val.current);
    setCount(count+1);
  }

  return (
    <>
      <div>
        <button onClick={handleIncrement}>Click me!</button>
        <h1>{count}</h1>
      </div>
    </>
  )
}

export default App;