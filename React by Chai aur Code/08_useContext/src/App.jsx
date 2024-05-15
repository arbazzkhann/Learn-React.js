import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { counterContext } from './context/context'
import Random from './components/Random'

function App() {

  let [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    counter++;
    setCounter(counter);
  }

  return (
    <>
      <counterContext.Provider value={counter}>
        <Random />
        <p>Counter: {counter}</p>
        <button onClick={increaseCounter}>App.jsx</button>
      </counterContext.Provider>
    </>
  )
}

export default App
