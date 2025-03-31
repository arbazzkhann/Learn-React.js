import React from "react";
import { useState } from "react";


export default function App () {
  const [val, setVal] = useState(0);

  return (
    <>
      <div>
        <h1>{val}</h1>
        <input 
          type="range" 
          value={val} 
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
    </>
  )
}