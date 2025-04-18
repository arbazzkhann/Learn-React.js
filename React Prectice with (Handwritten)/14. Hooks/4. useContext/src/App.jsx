import './App.css'
import React, { useState } from 'react'
import Navbar from './Components/Navbar'

/*
App.jsx -> Navbar.jsx -> Button.jsx -> Component1.jsx
*/

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar count={count} setCount={setCount}/>
      </div>
    </>
  )
}

export default App
