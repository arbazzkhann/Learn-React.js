import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  function increaseCounter() {
    if(counter < 20) {
    counter = counter + 1;
    setCounter(counter);
    }
    
  }

  function decreaseCounter() {
    if(counter > 0) {
    counter = counter - 1;
    setCounter(counter);
    }
  }

  return (
     <div>
          <label>{counter}</label> <br/>
          <button onClick={increaseCounter}>Increase</button>
          <button onClick={decreaseCounter}>Decrease</button>
     </div>
  )
}

export default App
