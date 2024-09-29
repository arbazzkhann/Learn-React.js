import React, { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import { counterContext } from './Context/Context'

const App = () => {

  const [count, setCount] = useState(1)

  return (
    <>
      <counterContext.Provider value={{count, setCount}}>
        <Navbar />
        <button onClick={() => {setCount(count + 1)}}>Click me! {count}</button>
      </counterContext.Provider>
    </>
  )
}

export default App