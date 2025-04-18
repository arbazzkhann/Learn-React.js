import { useRef } from 'react'
import './App.css'

function App() {
  const myInputRef = useRef(0);

  return (
    <>
      <div>
        <input ref={myInputRef}/>
        <button onClick={() => myInputRef.current.focus()}>Click to focus!</button>
      </div>
    </>
  )
}

export default App
