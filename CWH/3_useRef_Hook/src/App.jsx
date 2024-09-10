// import { useEffect, useRef, useState } from 'react'
// import './App.css'

// function App() {
//   const [myData, setMyData] = useState("");
//   // const [count, setCount] = useState();
//   const count = useRef(0);

//   useEffect(() => {
//       count.current = count.current + 1;
//   })


//   return (
//     <>
//       <input 
//         type="text"
//         value={myData.current}
//         onChange={(e) => setMyData(e.target.value)}
//       />
//       <h2>Counter Value: {count.current}</h2>
//     </>
//   )
// }

// export default App



import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  const [count, setCount] = useState(0);
  let a = useRef(0);
  let myFirstInput = useRef()

  useEffect(() => {
    myFirstInput.current.style.backgroundColor = "red"
    a.current = a.current + 1;
    console.log(`The value of a is: ${a.current}`)
  })

  return (
    <>
      <input ref={myFirstInput} type="text" value={count}/><br />
      <button onClick={() => setCount(count+1)}>Click me</button>
    </>
  )
}

export default App

