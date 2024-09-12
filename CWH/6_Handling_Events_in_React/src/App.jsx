import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Arbaz")

  const handleClick = () => {
    alert("He i am clicked")
  }

  const handleMouseOver = () => {
    alert("He i am handleMouseOver")
  }

  // const handleChange = (e) => {
  //   setName(e.target.value)
  // }

  return (
    <>

      <div className="button">
        <button onClick={handleClick}>onClick</button>
      </div>

      <div className="red" onMouseOver={handleMouseOver}>
      {name} MouseOver
      </div>
      {name}
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
    </>
  )
}

export default App
