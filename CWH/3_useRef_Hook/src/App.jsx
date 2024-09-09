import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [myData, setMyData] = useState("");
  // const [count, setCount] = useState();
  const count = useRef(0);

  useEffect(() => {
      count.current = count.current + 1;
  })


  return (
    <>
      <input 
        type="text"
        value={myData.current}
        onChange={(e) => setMyData(e.target.value)}
      />
      <h2>Counter Value: {count.current}</h2>
    </>
  )
}

export default App
