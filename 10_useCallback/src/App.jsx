import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [count, setCount] = useState(0)

  function nvb() {
    count++;
    setCount(count)
    console.log ("Navbar remderded " + count);
  }  

  return (
    <>
      <p>{count}</p>
      <button onClick={nvb}>Click</button>
    </>
  )
}

export default App
