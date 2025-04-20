import { useCallback, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const [adjective, setAdjective] = useState("good");

  const getAdjective = () => {
    return "Another";
  }



  return (
    <>
      <Navbar adjective={"good"} getAdjective={getAdjective}/>
    </>
  )
}

export default App
