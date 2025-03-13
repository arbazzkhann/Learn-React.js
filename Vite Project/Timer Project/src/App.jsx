import { useState, useRef } from 'react'
import './App.css'

function App() {
  let timeRef = useRef(null)
  let [time, setTime] = useState(0)

  function startTimer() {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  }

  function stopTimer() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  function resetTimer() {
    stopTimer()
    setTime(0);
  }

  return (
    <>
      <div>
        <h1>Stopwatch: {time} seconds</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  )
}

export default App
