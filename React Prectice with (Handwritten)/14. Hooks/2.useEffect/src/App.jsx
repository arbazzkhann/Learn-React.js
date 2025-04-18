import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [myVal, setMyVal] = useState(0);

  useEffect(() => {
    document.querySelector(".myUseEffect").innerText = `Component mounted or updated. ${myVal}`;
  }, [myVal])

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}> count: {count} </button>
        <button onClick={() => setMyVal(myVal + 1)}> myVal: {myVal} </button>
        <p className='myUseEffect'></p>       
      </div>
    </>
  )
}

export default App
