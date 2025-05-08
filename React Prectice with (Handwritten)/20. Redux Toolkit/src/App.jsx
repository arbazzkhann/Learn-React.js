import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div>
        <input type="text" value={color}/>
        <button onClick={() => setColor("Red")}>Red</button>
        <button onClick={() => setColor("Green")}>Green</button>
      </div>
    </>
  )
}

export default App
