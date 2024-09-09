import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  useEffect(() => {
    alert("Count was changed");
  },[count])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Click Me</button>
    </>
  )
}

export default App
