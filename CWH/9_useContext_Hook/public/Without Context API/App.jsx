import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar count={count}/>
      <button onClick={() => {setCount(count + 1)}}>Click me</button>
    </>
  )
}

export default App
