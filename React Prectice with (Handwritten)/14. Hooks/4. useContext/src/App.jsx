import './App.css'
import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { counterContext } from './Context/context';

/*
App.jsx -> Navbar.jsx -> Button.jsx -> Component1.jsx
*/

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <counterContext.Provider value={{counter, setCounter}}>
        <div>
          <Navbar />
        </div>
      </counterContext.Provider>
    </>
  )
}

export default App
