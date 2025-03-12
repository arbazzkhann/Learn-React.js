import React, { useEffect, useState, useRef } from "react";

function App() {
  let [name, setName] = useState("Arbaz");

  let refElement = useRef("");

  console.log(refElement)

  //video Link:: https://youtu.be/nX9ShZo0COc?t=377
  const reset = () => {
    setName("");
    refElement.current.focus();
  }

  //manipulating DOM Directly
  const arbaz = () => {
    refElement.current.value = "Arbaz";
  }

  return (
    <>
      <div>
        <h1>{name}</h1>
        <input ref={refElement} className="bg-white text-black" type="text" onChange={(e) => {setName(e.target.value)}} />
        <button onClick={reset}>Reset</button>
        <button onClick={arbaz}>Arbaz</button>
      </div>
    </>
  )
}

export default App;