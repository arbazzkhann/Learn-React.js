import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function increaseCount() {
    count++;
    setCount(count);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Click Me!</button>
    </>
  )
}

export default App
