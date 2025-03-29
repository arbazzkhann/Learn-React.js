import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Card from './Components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Card count={count}/>
        <button onClick={() => setCount(count+1)}>Increase count</button>
        <button onClick={() => setCount(count-1)}>Decrease count</button>
      </div>
    </>
  )
}

export default App
