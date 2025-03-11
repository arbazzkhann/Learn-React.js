import { useState } from 'react'
import Card from './Components/Card'
import React from 'react'


function App() {
  let [count, setCount] = useState(0)

  function increaseCount() {
    count++;
    setCount(count);
  }

  return (
    <>
      <Card count={count}/>
      <h1>Count: {count} (from App.jsx)</h1>
      <button onMouseOver={increaseCount}>Click me!</button>

    </>
  )
}

export default App
