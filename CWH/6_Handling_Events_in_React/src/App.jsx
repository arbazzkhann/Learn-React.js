import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Arbaz")
  const [form, setForm] = useState({email: "", phone: ""})

  const handleClick = () => {
    alert("He i am clicked")
  }

  // const handleMouseOver = () => {
  //   alert("He i am handleMouseOver")
  // }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
    console.log(form)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>onClick</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        MouseOver
      </div> */}
      <input type="text" name='email' value={form.name} onChange={handleChange} />
      <input type="text" name='password ' value={form.password} onChange={handleChange} />
    </>
  )
}

export default App
